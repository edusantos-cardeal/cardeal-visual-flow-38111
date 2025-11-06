import { ReactLenis } from 'lenis/react';

interface Video {
  id: string;
  thumbnail: string;
}

interface StickyScrollGalleryProps {
  videos: Video[];
}

export const StickyScrollGallery = ({ videos }: StickyScrollGalleryProps) => {
  // Dividir vídeos em 3 colunas
  const column1 = videos.slice(0, Math.ceil(videos.length / 3));
  const column2 = videos.slice(Math.ceil(videos.length / 3), Math.ceil(videos.length * 2 / 3));
  const column3 = videos.slice(Math.ceil(videos.length * 2 / 3));

  return (
    <ReactLenis root>
      <div className="w-full px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Coluna 1 - Scroll normal */}
          <div className="grid gap-4 md:col-span-4">
            {column1.map((video) => (
              <figure key={video.id} className="w-full">
                <img
                  src={video.thumbnail}
                  alt={`Video ${video.id}`}
                  className="transition-all duration-300 w-full h-[400px] md:h-96 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>

          {/* Coluna 2 - Sticky */}
          <div className="md:col-span-4">
            <div className="sticky top-0 h-screen grid grid-rows-3 gap-4">
              {column2.map((video) => (
                <figure key={video.id} className="w-full h-full">
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>

          {/* Coluna 3 - Scroll normal */}
          <div className="grid gap-4 md:col-span-4">
            {column3.map((video) => (
              <figure key={video.id} className="w-full">
                <img
                  src={video.thumbnail}
                  alt={`Video ${video.id}`}
                  className="transition-all duration-300 w-full h-[400px] md:h-96 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};
