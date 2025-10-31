import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'BR' | 'EN' | 'ES' | 'FR' | 'CH';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  BR: {
    // Hero
    'hero.title': 'CARDEAL TV',
    'hero.subtitle': 'POST PRODUCTION HOUSE',
    
    // About
    'about.title': 'PÓS-PRODUÇÃO. ONDE A IMAGEM ENCONTRA SUA VERDADE',
    'about.p1': 'A Cardeal é uma casa de pós-produção feita por quem vive o audiovisual com intensidade.',
    'about.p2': 'A gente transforma o bruto em ritmo, textura e significado.',
    'about.p3': 'Cuidamos da história até o último frame — porque é nele que tudo se revela.',
    'about.p4': 'Aqui, a timeline é território de precisão.',
    'about.p5': 'E cada corte é pensado pra emocionar, não pra impressionar.',
    
    // Services
    'services.title': 'O QUE A GENTE FAZ',
    'services.editing': 'EDIÇÃO',
    'services.editing.desc': 'O corte certo muda tudo. A gente encontra o pulso da história, o respiro e o impacto de cada segundo.',
    'services.motion': 'MOTION & DESIGN',
    'services.motion.desc': 'Design em movimento, com propósito. Não é sobre efeito — é sobre expressão.',
    'services.color': 'COLOR',
    'services.color.desc': 'Cor é emoção em forma de luz. A gente traduz sentimentos em gradações, nuances e atmosferas.',
    'services.finishing': 'FINALIZAÇÃO',
    'services.finishing.desc': 'Do som ao render, do detalhe ao conjunto. Aqui, tudo fecha com coerência, técnica e estética.',
    
    // Method
    'method.title': 'NOSSO JEITO DE FAZER',
    'method.text': 'Pós pra gente é o coração do audiovisual. Não é o "depois" do set — é o momento em que a história ganha vida. Trabalhamos lado a lado com quem cria: diretores, produtoras, agências e marcas. Sem formalidade, sem ruído — só entrega clara, leve e bonita.',
    
    // Energy
    'energy.title': 'NOSSA ENERGIA',
    'energy.text': 'Somos inquietos, mas meticulosos. Artísticos, mas organizados. De quem entende que a técnica é só o primeiro passo da criação. A Cardeal é movimento, precisão e propósito — tudo no mesmo frame.',
    
    // Brands
    'brands.title': 'MARCAS QUE CONFIAM EM NOSSA EXPERTISE',
    
    // Contact
    'contact.title': 'QUER DAR O TOQUE FINAL NO SEU PROJETO?',
    'contact.subtitle': 'A gente cuida do corte, da cor e do ritmo — pra que cada história voe como deve.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensagem enviada!',
    'contact.successMessage': 'Obrigado pelo contato. Retornaremos em breve.',
    'contact.error': 'Erro ao enviar',
    'contact.errorMessage': 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
    'contact.download': 'Download Media Kit',
    
    // FAQ
    'faq.q1': 'Qual é o prazo médio para produção de um vídeo?',
    'faq.a1': 'O prazo varia conforme a complexidade do projeto, mas trabalhamos com timelines transparentes definidos no início do processo. Projetos simples podem ser entregues em 2 semanas, enquanto produções mais elaboradas podem levar de 4 a 8 semanas.',
    'faq.q2': 'Como funciona o processo de trabalho?',
    'faq.a2': 'Nosso processo inclui: briefing detalhado, planejamento estratégico, aprovação de roteiro/storyboard, produção, edição e finalização. Você acompanha e aprova cada etapa, garantindo alinhamento total com sua visão.',
    'faq.q3': 'Vocês atendem projetos de qualquer porte?',
    'faq.a3': 'Sim! Temos soluções para empresas de todos os tamanhos, desde startups até grandes corporações. Adaptamos nossa abordagem às necessidades e orçamento de cada cliente.',
    'faq.q4': 'Quais são os investimentos médios?',
    'faq.a4': 'Cada projeto é único e os valores são personalizados conforme suas necessidades específicas. Entre em contato para uma proposta detalhada baseada no seu briefing.',
    
    // Footer
    'footer.title': 'CARDEAL TV – PÓS-PRODUÇÃO',
    'footer.subtitle': '"O fim da linha é só o começo da história."',
    
    // Menu
    'menu.home': 'Início',
    'menu.about': 'Sobre',
    'menu.services': 'Serviços',
    'menu.gallery': 'Galeria',
    'menu.brands': 'Marcas',
    'menu.contact': 'Contato',
    'menu.contact.button': 'CONTATE-NOS',
  },
  EN: {
    // Hero
    'hero.title': 'CARDEAL TV',
    'hero.subtitle': 'POST PRODUCTION HOUSE',
    
    // About
    'about.title': 'POST-PRODUCTION. WHERE IMAGE MEETS ITS TRUTH',
    'about.p1': 'Cardeal is a post-production house made by those who live audiovisual with intensity.',
    'about.p2': 'We transform raw footage into rhythm, texture and meaning.',
    'about.p3': 'We take care of the story until the last frame — because that\'s where everything is revealed.',
    'about.p4': 'Here, the timeline is a territory of precision.',
    'about.p5': 'And every cut is designed to move, not to impress.',
    
    // Services
    'services.title': 'WHAT WE DO',
    'services.editing': 'EDITING',
    'services.editing.desc': 'The right cut changes everything. We find the pulse of the story, the breath and impact of every second.',
    'services.motion': 'MOTION & DESIGN',
    'services.motion.desc': 'Design in motion, with purpose. It\'s not about effect — it\'s about expression.',
    'services.color': 'COLOR',
    'services.color.desc': 'Color is emotion in the form of light. We translate feelings into gradations, nuances and atmospheres.',
    'services.finishing': 'FINISHING',
    'services.finishing.desc': 'From sound to render, from detail to the whole. Here, everything closes with coherence, technique and aesthetics.',
    
    // Method
    'method.title': 'OUR WAY OF DOING',
    'method.text': 'Post for us is the heart of audiovisual. It\'s not the "after" of the set — it\'s the moment when the story comes to life. We work side by side with creators: directors, production companies, agencies and brands. No formality, no noise — just clear, light and beautiful delivery.',
    
    // Energy
    'energy.title': 'OUR ENERGY',
    'energy.text': 'We are restless, but meticulous. Artistic, but organized. From those who understand that technique is just the first step of creation. Cardeal is movement, precision and purpose — all in the same frame.',
    
    // Brands
    'brands.title': 'BRANDS THAT TRUST OUR EXPERTISE',
    
    // Contact
    'contact.title': 'WANT TO GIVE YOUR PROJECT THE FINAL TOUCH?',
    'contact.subtitle': 'We take care of the cut, color and rhythm — so that each story flies as it should.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent!',
    'contact.successMessage': 'Thank you for contacting us. We will get back to you soon.',
    'contact.error': 'Error sending',
    'contact.errorMessage': 'An error occurred while sending your message. Please try again.',
    'contact.download': 'Download Media Kit',
    
    // FAQ
    'faq.q1': 'What is the average timeline for video production?',
    'faq.a1': 'The timeline varies according to project complexity, but we work with transparent timelines defined at the beginning of the process. Simple projects can be delivered in 2 weeks, while more elaborate productions can take 4 to 8 weeks.',
    'faq.q2': 'How does the work process work?',
    'faq.a2': 'Our process includes: detailed briefing, strategic planning, script/storyboard approval, production, editing and finishing. You follow and approve each step, ensuring total alignment with your vision.',
    'faq.q3': 'Do you work on projects of any size?',
    'faq.a3': 'Yes! We have solutions for companies of all sizes, from startups to large corporations. We adapt our approach to each client\'s needs and budget.',
    'faq.q4': 'What are the average investments?',
    'faq.a4': 'Each project is unique and values are customized according to your specific needs. Contact us for a detailed proposal based on your briefing.',
    
    // Footer
    'footer.title': 'CARDEAL TV – POST-PRODUCTION',
    'footer.subtitle': '"The end of the line is just the beginning of the story."',
    
    // Menu
    'menu.home': 'Home',
    'menu.about': 'About',
    'menu.services': 'Services',
    'menu.gallery': 'Gallery',
    'menu.brands': 'Brands',
    'menu.contact': 'Contact',
    'menu.contact.button': 'CONTACT US',
  },
  ES: {
    // Hero
    'hero.title': 'CARDEAL TV',
    'hero.subtitle': 'CASA DE POSTPRODUCCIÓN',
    
    // About
    'about.title': 'POSTPRODUCCIÓN. DONDE LA IMAGEN ENCUENTRA SU VERDAD',
    'about.p1': 'Cardeal es una casa de postproducción hecha por quienes viven el audiovisual con intensidad.',
    'about.p2': 'Transformamos lo bruto en ritmo, textura y significado.',
    'about.p3': 'Cuidamos la historia hasta el último fotograma — porque es ahí donde todo se revela.',
    'about.p4': 'Aquí, la línea de tiempo es territorio de precisión.',
    'about.p5': 'Y cada corte está pensado para emocionar, no para impresionar.',
    
    // Services
    'services.title': 'LO QUE HACEMOS',
    'services.editing': 'EDICIÓN',
    'services.editing.desc': 'El corte correcto lo cambia todo. Encontramos el pulso de la historia, el respiro y el impacto de cada segundo.',
    'services.motion': 'MOTION & DESIGN',
    'services.motion.desc': 'Diseño en movimiento, con propósito. No se trata de efecto — se trata de expresión.',
    'services.color': 'COLOR',
    'services.color.desc': 'El color es emoción en forma de luz. Traducimos sentimientos en gradaciones, matices y atmósferas.',
    'services.finishing': 'FINALIZACIÓN',
    'services.finishing.desc': 'Del sonido al renderizado, del detalle al conjunto. Aquí, todo cierra con coherencia, técnica y estética.',
    
    // Method
    'method.title': 'NUESTRA MANERA DE HACER',
    'method.text': 'La post para nosotros es el corazón del audiovisual. No es el "después" del set — es el momento en que la historia cobra vida. Trabajamos codo a codo con quienes crean: directores, productoras, agencias y marcas. Sin formalidades, sin ruido — solo entrega clara, ligera y hermosa.',
    
    // Energy
    'energy.title': 'NUESTRA ENERGÍA',
    'energy.text': 'Somos inquietos, pero meticulosos. Artísticos, pero organizados. De quienes entienden que la técnica es solo el primer paso de la creación. Cardeal es movimiento, precisión y propósito — todo en el mismo fotograma.',
    
    // Brands
    'brands.title': 'MARCAS QUE CONFÍAN EN NUESTRA EXPERIENCIA',
    
    // Contact
    'contact.title': '¿QUIERES DAR EL TOQUE FINAL A TU PROYECTO?',
    'contact.subtitle': 'Nos encargamos del corte, el color y el ritmo — para que cada historia vuele como debe.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado!',
    'contact.successMessage': 'Gracias por contactarnos. Te responderemos pronto.',
    'contact.error': 'Error al enviar',
    'contact.errorMessage': 'Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.',
    'contact.download': 'Descargar Media Kit',
    
    // FAQ
    'faq.q1': '¿Cuál es el plazo promedio para la producción de un video?',
    'faq.a1': 'El plazo varía según la complejidad del proyecto, pero trabajamos con plazos transparentes definidos al inicio del proceso. Los proyectos simples se pueden entregar en 2 semanas, mientras que las producciones más elaboradas pueden llevar de 4 a 8 semanas.',
    'faq.q2': '¿Cómo funciona el proceso de trabajo?',
    'faq.a2': 'Nuestro proceso incluye: briefing detallado, planificación estratégica, aprobación de guión/storyboard, producción, edición y finalización. Sigues y apruebas cada etapa, garantizando una alineación total con tu visión.',
    'faq.q3': '¿Atienden proyectos de cualquier tamaño?',
    'faq.a3': '¡Sí! Tenemos soluciones para empresas de todos los tamaños, desde startups hasta grandes corporaciones. Adaptamos nuestro enfoque a las necesidades y presupuesto de cada cliente.',
    'faq.q4': '¿Cuáles son las inversiones promedio?',
    'faq.a4': 'Cada proyecto es único y los valores se personalizan según tus necesidades específicas. Contáctanos para una propuesta detallada basada en tu briefing.',
    
    // Footer
    'footer.title': 'CARDEAL TV – POSTPRODUCCIÓN',
    'footer.subtitle': '"El fin de la línea es solo el comienzo de la historia."',
    
    // Menu
    'menu.home': 'Inicio',
    'menu.about': 'Acerca',
    'menu.services': 'Servicios',
    'menu.gallery': 'Galería',
    'menu.brands': 'Marcas',
    'menu.contact': 'Contacto',
    'menu.contact.button': 'CONTÁCTENOS',
  },
  FR: {
    // Hero
    'hero.title': 'CARDEAL TV',
    'hero.subtitle': 'MAISON DE POST-PRODUCTION',
    
    // About
    'about.title': 'POST-PRODUCTION. OÙ L\'IMAGE TROUVE SA VÉRITÉ',
    'about.p1': 'Cardeal est une maison de post-production faite par ceux qui vivent l\'audiovisuel avec intensité.',
    'about.p2': 'Nous transformons le brut en rythme, texture et signification.',
    'about.p3': 'Nous prenons soin de l\'histoire jusqu\'à la dernière image — car c\'est là que tout se révèle.',
    'about.p4': 'Ici, la timeline est un territoire de précision.',
    'about.p5': 'Et chaque coupe est conçue pour émouvoir, pas pour impressionner.',
    
    // Services
    'services.title': 'CE QUE NOUS FAISONS',
    'services.editing': 'MONTAGE',
    'services.editing.desc': 'La bonne coupe change tout. Nous trouvons le pouls de l\'histoire, le souffle et l\'impact de chaque seconde.',
    'services.motion': 'MOTION & DESIGN',
    'services.motion.desc': 'Design en mouvement, avec un but. Il ne s\'agit pas d\'effet — il s\'agit d\'expression.',
    'services.color': 'COULEUR',
    'services.color.desc': 'La couleur est l\'émotion sous forme de lumière. Nous traduisons les sentiments en gradations, nuances et atmosphères.',
    'services.finishing': 'FINITION',
    'services.finishing.desc': 'Du son au rendu, du détail à l\'ensemble. Ici, tout se ferme avec cohérence, technique et esthétique.',
    
    // Method
    'method.title': 'NOTRE FAÇON DE FAIRE',
    'method.text': 'La post pour nous est le cœur de l\'audiovisuel. Ce n\'est pas l\'"après" du plateau — c\'est le moment où l\'histoire prend vie. Nous travaillons côte à côte avec les créateurs : réalisateurs, sociétés de production, agences et marques. Pas de formalité, pas de bruit — juste une livraison claire, légère et belle.',
    
    // Energy
    'energy.title': 'NOTRE ÉNERGIE',
    'energy.text': 'Nous sommes agités, mais méticuleux. Artistiques, mais organisés. De ceux qui comprennent que la technique n\'est que le premier pas de la création. Cardeal est mouvement, précision et but — tout dans la même image.',
    
    // Brands
    'brands.title': 'MARQUES QUI FONT CONFIANCE À NOTRE EXPERTISE',
    
    // Contact
    'contact.title': 'VOULEZ-VOUS DONNER LA TOUCHE FINALE À VOTRE PROJET?',
    'contact.subtitle': 'Nous prenons soin de la coupe, de la couleur et du rythme — pour que chaque histoire vole comme elle le devrait.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé!',
    'contact.successMessage': 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
    'contact.error': 'Erreur d\'envoi',
    'contact.errorMessage': 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
    'contact.download': 'Télécharger le Media Kit',
    
    // FAQ
    'faq.q1': 'Quel est le délai moyen pour la production d\'une vidéo?',
    'faq.a1': 'Le délai varie selon la complexité du projet, mais nous travaillons avec des délais transparents définis au début du processus. Les projets simples peuvent être livrés en 2 semaines, tandis que les productions plus élaborées peuvent prendre de 4 à 8 semaines.',
    'faq.q2': 'Comment fonctionne le processus de travail?',
    'faq.a2': 'Notre processus comprend : briefing détaillé, planification stratégique, approbation du script/storyboard, production, montage et finition. Vous suivez et approuvez chaque étape, garantissant un alignement total avec votre vision.',
    'faq.q3': 'Travaillez-vous sur des projets de toute taille?',
    'faq.a3': 'Oui! Nous avons des solutions pour les entreprises de toutes tailles, des startups aux grandes entreprises. Nous adaptons notre approche aux besoins et au budget de chaque client.',
    'faq.q4': 'Quels sont les investissements moyens?',
    'faq.a4': 'Chaque projet est unique et les valeurs sont personnalisées selon vos besoins spécifiques. Contactez-nous pour une proposition détaillée basée sur votre briefing.',
    
    // Footer
    'footer.title': 'CARDEAL TV – POST-PRODUCTION',
    'footer.subtitle': '"La fin de la ligne n\'est que le début de l\'histoire."',
    
    // Menu
    'menu.home': 'Accueil',
    'menu.about': 'À propos',
    'menu.services': 'Services',
    'menu.gallery': 'Galerie',
    'menu.brands': 'Marques',
    'menu.contact': 'Contact',
    'menu.contact.button': 'CONTACTEZ-NOUS',
  },
  CH: {
    // Hero
    'hero.title': 'CARDEAL TV',
    'hero.subtitle': '后期制作工作室',
    
    // About
    'about.title': '后期制作。图像找到真相的地方',
    'about.p1': 'Cardeal是一家由热爱音视频的人创建的后期制作工作室。',
    'about.p2': '我们将原始素材转化为节奏、质感和意义。',
    'about.p3': '我们照顾故事直到最后一帧——因为那是一切揭示的地方。',
    'about.p4': '在这里，时间线是精确的领域。',
    'about.p5': '每一个剪辑都是为了打动人心，而不是为了给人留下深刻印象。',
    
    // Services
    'services.title': '我们做什么',
    'services.editing': '剪辑',
    'services.editing.desc': '正确的剪辑改变一切。我们找到故事的脉搏，每一秒的呼吸和影响。',
    'services.motion': '动态与设计',
    'services.motion.desc': '有目的的动态设计。这不是关于效果——而是关于表达。',
    'services.color': '调色',
    'services.color.desc': '色彩是光的形式的情感。我们将情感转化为渐变、细微差别和氛围。',
    'services.finishing': '精修',
    'services.finishing.desc': '从声音到渲染，从细节到整体。在这里，一切都以连贯性、技术和美学结束。',
    
    // Method
    'method.title': '我们的工作方式',
    'method.text': '对我们来说，后期是视听的核心。它不是片场的"之后"——它是故事焕发生机的时刻。我们与创作者并肩工作：导演、制作公司、代理商和品牌。没有形式主义，没有噪音——只有清晰、轻盈和美丽的交付。',
    
    // Energy
    'energy.title': '我们的能量',
    'energy.text': '我们不安分，但一丝不苟。艺术性强，但有条理。来自那些理解技术只是创作第一步的人。Cardeal是运动、精确和目标——都在同一帧中。',
    
    // Brands
    'brands.title': '信任我们专业知识的品牌',
    
    // Contact
    'contact.title': '想给您的项目最后的润色吗？',
    'contact.subtitle': '我们负责剪辑、色彩和节奏——让每个故事如其所愿地飞翔。',
    'contact.name': '姓名',
    'contact.email': '电子邮件',
    'contact.phone': '电话',
    'contact.message': '留言',
    'contact.send': '发送',
    'contact.sending': '发送中...',
    'contact.success': '消息已发送！',
    'contact.successMessage': '感谢您与我们联系。我们会尽快回复您。',
    'contact.error': '发送错误',
    'contact.errorMessage': '发送消息时出错。请重试。',
    'contact.download': '下载媒体资料包',
    
    // FAQ
    'faq.q1': '视频制作的平均时间是多少？',
    'faq.a1': '时间根据项目复杂性而变化，但我们在流程开始时定义透明的时间表。简单项目可以在2周内交付，而更复杂的制作可能需要4到8周。',
    'faq.q2': '工作流程如何运作？',
    'faq.a2': '我们的流程包括：详细简报、战略规划、脚本/故事板批准、制作、编辑和精修。您跟踪并批准每个步骤，确保与您的愿景完全一致。',
    'faq.q3': '你们接受任何规模的项目吗？',
    'faq.a3': '是的！我们为各种规模的公司提供解决方案，从初创公司到大型企业。我们根据每个客户的需求和预算调整我们的方法。',
    'faq.q4': '平均投资是多少？',
    'faq.a4': '每个项目都是独特的，价值根据您的具体需求定制。请与我们联系，根据您的简报获取详细提案。',
    
    // Footer
    'footer.title': 'CARDEAL TV – 后期制作',
    'footer.subtitle': '"线的尽头只是故事的开始。"',
    
    // Menu
    'menu.home': '首页',
    'menu.about': '关于',
    'menu.services': '服务',
    'menu.gallery': '画廊',
    'menu.brands': '品牌',
    'menu.contact': '联系',
    'menu.contact.button': '联系我们',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('BR');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
