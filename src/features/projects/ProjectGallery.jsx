import { useEffect, useMemo, useState } from "react";
import { resolveAssetList } from "../../lib/assets";

const ProjectGallery = ({ title, images, captions = [] }) => {
  const galleryImages = useMemo(() => resolveAssetList(images), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (galleryImages.length < 2) return;

    const preload = (index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = galleryImages[index];
    };

    preload((currentIndex + 1) % galleryImages.length);
    preload((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [currentIndex, galleryImages]);

  if (galleryImages.length === 0) {
    return null;
  }

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
            src={galleryImages[currentIndex]}
            alt=""
            className="h-full w-full scale-110 object-cover opacity-35 blur-3xl"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative flex aspect-[16/10] items-center justify-center p-5 sm:aspect-video sm:p-8">
          <img
            src={galleryImages[currentIndex]}
            alt={`${title} preview ${currentIndex + 1}`}
            className="max-h-full w-full rounded-2xl object-contain shadow-2xl"
          />

          {galleryImages.length > 1 ? (
            <>
              <button
                type="button"
                onClick={previousImage}
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-orange-400/24 bg-black/45 text-lg text-white transition hover:border-orange-300/55 hover:bg-orange-500/40"
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextImage}
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
                className={`overflow-hidden rounded-2xl border transition ${
                  isActive
                    ? "border-orange-300/65 ring-1 ring-orange-300/45"
                    : "border-orange-400/20 hover:border-orange-300/38"
                }`}
              >
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="aspect-[4/3] h-full w-full object-cover"
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
