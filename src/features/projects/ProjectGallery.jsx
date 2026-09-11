import { useState } from "react";
import ProgressiveImage from "../../components/ui/ProgressiveImage";
import { getImageSources } from "../../lib/imageSources";

const ProjectGallery = ({ title, images, captions = [] }) => {
  const galleryImages = images;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (galleryImages.length === 0) {
    return null;
  }

  const currentImage = getImageSources(galleryImages[currentIndex]);

  const customCaption = captions[currentIndex]?.trim();
  const figureCaption = customCaption
    ? `Fig ${currentIndex + 1}. ${customCaption}`
    : `Fig ${currentIndex + 1}`;

  const nextImage = () => {
    setCurrentIndex((previous) => (previous + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (previous) => (previous - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <section className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/24 bg-black/30">
        <div className="absolute inset-0">
          <img
            src={currentImage.placeholder || getImageSources(galleryImages[currentIndex], 320).src}
            alt=""
            className="h-full w-full scale-110 object-cover opacity-35 blur-3xl"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative flex aspect-[16/10] items-center justify-center p-5 sm:aspect-video sm:p-8">
          <ProgressiveImage
            src={galleryImages[currentIndex]}
            alt={`${title} preview ${currentIndex + 1}`}
            className="h-full w-full rounded-2xl"
            imageClassName="object-contain"
            sizes="(min-width: 1080px) 950px, (min-width: 640px) calc(100vw - 112px), calc(100vw - 72px)"
            loading="eager"
          />

          {galleryImages.length > 1 ? (
            <>
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/24 bg-black/45 text-lg text-white transition hover:border-orange-300/55 hover:bg-orange-500/40"
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/24 bg-black/45 text-lg text-white transition hover:border-orange-300/55 hover:bg-orange-500/40"
              >
                →
              </button>
            </>
          ) : null}
        </div>

        <div className="relative border-t border-orange-400/16 px-5 py-4 sm:px-6">
          <p className="text-sm font-medium text-slate-300">{figureCaption}</p>
        </div>
      </div>

      {galleryImages.length > 1 ? (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {galleryImages.map((image, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={isActive}
                className={`overflow-hidden rounded-2xl border transition ${
                  isActive
                    ? "border-orange-300/65 ring-1 ring-orange-300/45"
                    : "border-orange-400/20 hover:border-orange-300/38"
                }`}
              >
                <ProgressiveImage
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="aspect-[4/3] h-full w-full"
                  imageClassName="object-cover"
                  maxWidth={320}
                  sizes="(min-width: 768px) 160px, calc((100vw - 56px) / 3)"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default ProjectGallery;
