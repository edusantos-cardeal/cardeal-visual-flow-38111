import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.80.0';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const body: LeadPayload = await req.json();

    // Basic validation
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const message = (body.message || "").toString().trim();
    const source = (body.source || "Cardeal TV").toString().trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, message" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get Portfolio Supabase credentials
    const portfolioUrl = Deno.env.get('PORTFOLIO_SUPABASE_URL');
    const portfolioServiceKey = Deno.env.get('PORTFOLIO_SERVICE_ROLE_KEY');
    
    if (!portfolioUrl || !portfolioServiceKey) {
      console.error('Portfolio Supabase credentials not configured');
      return new Response(
        JSON.stringify({ error: 'Backend configuration missing' }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create Supabase client for the portfolio project
    const portfolioSupabase = createClient(portfolioUrl, portfolioServiceKey);

    // Insert lead directly into portfolio database with a safe fallback
    let saved: any = null;
    try {
      const payload: Record<string, any> = { name, email, message, source };
      if (phone) payload.phone = phone;

      const { data, error } = await portfolioSupabase
        .from('leads')
        .insert(payload)
        .select()
        .single();

      if (error) throw error;
      saved = data;
    } catch (err: any) {
      const msg = err?.message || '';
      const code = err?.code || '';

      // If the target DB doesn't have the 'phone' column, retry without it
      if (msg.includes("'phone' column") || msg.toLowerCase().includes('phone') || code === 'PGRST204') {
        console.warn("Schema mismatch detected. Retrying insert without 'phone' column.");
        const { data, error } = await portfolioSupabase
          .from('leads')
          .insert({ name, email, message, source })
          .select()
          .single();

        if (error) {
          console.error('Error inserting lead (retry without phone):', error);
          return new Response(
            JSON.stringify({ error: 'Failed to save lead', details: error.message }),
            { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        saved = data;
      } else {
        console.error('Error inserting lead:', err);
        return new Response(
          JSON.stringify({ error: 'Failed to save lead', details: msg }),
          { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    console.log('Lead saved successfully:', saved);

    return new Response(
      JSON.stringify({ success: true, data: saved }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("forward-lead error:", error?.message || error);
    return new Response(
      JSON.stringify({ error: "Internal error", details: error?.message || String(error) }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});