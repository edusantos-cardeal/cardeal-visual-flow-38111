import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validar campos obrigatórios
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: 'Campos obrigatórios',
          description: 'Por favor, preencha nome, email e mensagem.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      // Criar mensagem para WhatsApp
      const whatsappMessage = `*Nova mensagem do site Cardeal TV*%0A%0A*Nome:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Telefone:* ${encodeURIComponent(formData.phone || 'Não informado')}%0A*Mensagem:* ${encodeURIComponent(formData.message)}`;
      
      // Número de WhatsApp da Cardeal TV (substituir pelo número real)
      const whatsappNumber = '5511999999999'; // Atualizar com o número correto
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');

      toast({
        title: t('contact.success'),
        description: 'Redirecionando para WhatsApp...',
      });

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.errorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section 
      ref={ref} 
      id="contact" 
      className={`relative min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
        {/* Coluna 1 - Formulário */}
        <div className="w-full px-4 md:px-[56px] py-0">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-montserrat font-black uppercase mb-4 md:mb-6 text-2xl md:text-3xl">
              {t('contact.title')}
            </h2>
            <p className="text-base md:text-lg text-foreground/80 font-inter font-extralight">
              {t('contact.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 border border-border p-4 md:p-8 bg-background/50">
            <div>
              <Input type="text" placeholder={t('contact.name')} value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="bg-muted border-0 placeholder:text-muted-foreground/50" />
            </div>

            <div>
              <Input type="email" placeholder={t('contact.email')} value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="bg-muted border-0 placeholder:text-muted-foreground/50" />
            </div>

            <div>
              <Input type="tel" placeholder={t('contact.phone')} value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className="bg-muted border-0 placeholder:text-muted-foreground/50" />
            </div>

            <div>
              <Textarea placeholder={t('contact.message')} value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} className="bg-muted border-0 placeholder:text-muted-foreground/50 min-h-[150px] resize-none" />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider py-4 md:py-6 disabled:opacity-50"
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </div>

        {/* Coluna 2 - Imagens */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
          <img 
            src="https://cardeal.tv/wp-content/uploads/2025/10/CARDEAIS.png" 
            alt="Cardeais" 
            className="w-full h-full object-cover object-center" 
          />
          <div 
            style={{
              backgroundImage: 'url(https://cardeal.tv/wp-content/uploads/2025/10/noise.webp)',
              backgroundRepeat: 'repeat'
            }} 
            className="absolute inset-0 w-full h-full mix-blend-overlay opacity-10" 
          />
          
          {/* Botão de Download sobre a imagem */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 md:pb-8 z-10">
            <a 
              href="https://cardeal.tv/wp-content/uploads/2025/10/Midia-Kit-Cardeal-2025_.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-inter text-xs md:text-sm uppercase tracking-wider bg-background/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 border border-border hover:bg-background/90"
            >
              <Download className="w-3 h-3 md:w-4 md:h-4" />
              {t('contact.download')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};