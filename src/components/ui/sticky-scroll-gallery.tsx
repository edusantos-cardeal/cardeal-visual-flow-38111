import { ReactLenis } from 'lenis/react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Video {
  id: string;
  thumbnail: string;
  vimeoId?: string;
}

interface StickyScrollGalleryProps {
  videos: Video[];
}

export const StickyScrollGallery = ({ videos }: StickyScrollGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  // Dividir vídeos em 3 colunas
  const column1 = videos.slice(0, Math.ceil(videos.length / 3));
  const column2 = videos.slice(Math.ceil(videos.length / 3), Math.ceil(videos.length * 2 / 3));
  const column3 = videos.slice(Math.ceil(videos.length * 2 / 3));

  const getVimeoId = (thumbnail: string) => {
    const match = thumbnail.match(/vumbnail\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <>
      <ReactLenis root>
        <div className="w-full overflow-hidden">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-2">
            {/* Coluna 1 - Scroll normal */}
            <div className="grid gap-2 md:col-span-4 col-span-1">
              {column1.map((video) => (
                <figure key={video.id} className="w-full" onClick={() => setSelectedVideo(getVimeoId(video.thumbnail))}>
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="transition-all duration-300 w-full h-60 md:h-96 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                  />
                </figure>
              ))}
            </div>

            {/* Coluna 2 - Sticky (apenas desktop) */}
            <div className="md:sticky md:top-0 md:h-screen w-full md:col-span-4 col-span-1 gap-2 md:grid md:grid-rows-3 hidden md:block">
              {column2.map((video) => (
                <figure key={video.id} className="w-full h-full" onClick={() => setSelectedVideo(getVimeoId(video.thumbnail))}>
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="transition-all duration-300 h-full w-full align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                  />
                </figure>
              ))}
            </div>

            {/* Coluna 2 versão mobile */}
            <div className="grid gap-2 md:hidden col-span-1">
              {column2.map((video) => (
                <figure key={video.id} className="w-full" onClick={() => setSelectedVideo(getVimeoId(video.thumbnail))}>
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="transition-all duration-300 w-full h-60 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                  />
                </figure>
              ))}
            </div>

            {/* Coluna 3 - Scroll normal */}
            <div className="grid gap-2 md:col-span-4 col-span-1">
              {column3.map((video) => (
                <figure key={video.id} className="w-full" onClick={() => setSelectedVideo(getVimeoId(video.thumbnail))}>
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="transition-all duration-300 w-full h-60 md:h-96 align-bottom object-cover rounded-md cursor-pointer hover:opacity-80"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </ReactLenis>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0">
          {selectedVideo && (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo}?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Video Player"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
