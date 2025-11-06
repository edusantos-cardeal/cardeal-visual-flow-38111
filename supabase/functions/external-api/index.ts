import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.80.0';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-api-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ExternalApiRequest {
  action: 'get_leads' | 'get_lead_by_id';
  params?: {
    limit?: number;
    offset?: number;
    id?: string;
  };
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
    // Validate API key
    const apiKey = req.headers.get('x-api-key');
    const validApiKey = Deno.env.get('PORTFOLIO_API_KEY');
    
    if (!apiKey || apiKey !== validApiKey) {
      console.error('Invalid or missing API key');
      return new Response(
        JSON.stringify({ error: 'Unauthorized: Invalid API key' }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
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

    // Parse request body
    const body: ExternalApiRequest = await req.json();
    const { action, params = {} } = body;

    // Create Supabase client for the portfolio project
    const portfolioSupabase = createClient(portfolioUrl, portfolioServiceKey);

    // Handle different actions
    switch (action) {
      case 'get_leads': {
        const limit = params.limit || 100;
        const offset = params.offset || 0;

        const { data, error } = await portfolioSupabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false })
          .range(offset, offset + limit - 1);

        if (error) {
          console.error('Error fetching leads:', error);
          return new Response(
            JSON.stringify({ error: 'Failed to fetch leads', details: error.message }),
            { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }

        console.log(`Successfully fetched ${data?.length || 0} leads`);
        return new Response(
          JSON.stringify({ success: true, data, count: data?.length || 0 }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      case 'get_lead_by_id': {
        const { id } = params;
        
        if (!id) {
          return new Response(
            JSON.stringify({ error: 'Missing lead ID' }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }

        const { data, error } = await portfolioSupabase
          .from('leads')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching lead:', error);
          return new Response(
            JSON.stringify({ error: 'Failed to fetch lead', details: error.message }),
            { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }

        console.log('Successfully fetched lead:', id);
        return new Response(
          JSON.stringify({ success: true, data }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action', available_actions: ['get_leads', 'get_lead_by_id'] }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
    }
  } catch (error: any) {
    console.error("external-api error:", error?.message || error);
    return new Response(
      JSON.stringify({ error: "Internal error", details: error?.message || String(error) }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
