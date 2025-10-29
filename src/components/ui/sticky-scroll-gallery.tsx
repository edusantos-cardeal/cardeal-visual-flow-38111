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
      <div className="w-full">
        <div className="grid grid-cols-12 gap-2">
          {/* Coluna 1 - Scroll normal */}
          <div className="grid gap-2 col-span-4">
            {column1.map((video) => (
              <figure key={video.id} className="w-full">
                <img
                  src={video.thumbnail}
                  alt={`Video ${video.id}`}
                  className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                />
              </figure>
            ))}
          </div>

          {/* Coluna 2 - Sticky */}
          <div className="sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3">
            {column2.map((video) => (
              <figure key={video.id} className="w-full h-full">
                <img
                  src={video.thumbnail}
                  alt={`Video ${video.id}`}
                  className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                />
              </figure>
            ))}
          </div>

          {/* Coluna 3 - Scroll normal */}
          <div className="grid gap-2 col-span-4">
            {column3.map((video) => (
              <figure key={video.id} className="w-full">
                <img
                  src={video.thumbnail}
                  alt={`Video ${video.id}`}
                  className="transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};
