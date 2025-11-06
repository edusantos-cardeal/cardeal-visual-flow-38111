import { StickyScrollGallery } from '../ui/sticky-scroll-gallery';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
export const GallerySection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const videos = [{
    id: '1',
    thumbnail: 'https://vumbnail.com/991148213.jpg'
  }, {
    id: '2',
    thumbnail: 'https://vumbnail.com/991148177.jpg'
  }, {
    id: '3',
    thumbnail: 'https://vumbnail.com/991212776.jpg'
  }, {
    id: '4',
    thumbnail: 'https://vumbnail.com/980012835.jpg'
  }, {
    id: '5',
    thumbnail: 'https://vumbnail.com/991148258.jpg'
  }, {
    id: '6',
    thumbnail: 'https://vumbnail.com/991148238.jpg'
  }, {
    id: '7',
    thumbnail: 'https://vumbnail.com/991212698.jpg'
  }, {
    id: '8',
    thumbnail: 'https://vumbnail.com/991148213.jpg'
  }, {
    id: '9',
    thumbnail: 'https://vumbnail.com/991148177.jpg'
  }];
  return (
    <section 
      ref={ref} 
      id="gallery" 
      className={`relative min-h-screen flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="font-montserrat font-black uppercase mb-12 my-[17px] py-[32px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">NOSSOS TRABALHOS</h2>
      
      <StickyScrollGallery videos={videos} />
    </section>
  );
};