import { useEffect, useId, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiMaximize2,
  FiMinimize2,
  FiX,
  FiZoomIn,
} from "react-icons/fi";
import ProgressiveImage from "../../components/ui/ProgressiveImage";
import { getImageSources } from "../../lib/imageSources";

const iconButtonClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-slate-100 transition hover:border-white/35 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b10]";

const ProjectGallery = ({ title, images, captions = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const dialogRef = useRef(null);
  const imageViewportRef = useRef(null);
  const dialogTitleId = useId();
  const dialogCaptionId = useId();

  useEffect(() => {
    if (!isExpanded) return;

    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [isExpanded]);

  useEffect(() => {
    const viewport = imageViewportRef.current;
    if (!viewport) return;
    viewport.scrollTop = isZoomed ? (viewport.scrollHeight - viewport.clientHeight) / 2 : 0;
    viewport.scrollLeft = isZoomed ? (viewport.scrollWidth - viewport.clientWidth) / 2 : 0;
  }, [currentIndex, isExpanded, isZoomed]);

  if (images.length === 0) return null;

  const currentImage = getImageSources(images[currentIndex]);
  const customCaption = captions[currentIndex]?.trim();
  const figureCaption = customCaption
    ? `Fig ${currentIndex + 1}. ${customCaption}`
    : `Fig ${currentIndex + 1}`;
  const imageAlt = customCaption
    ? `${title}: ${customCaption}`
    : `${title} image ${currentIndex + 1}`;

  const nextImage = () => {
    setIsZoomed(false);
    setCurrentIndex((previous) => (previous + 1) % images.length);
  };

  const previousImage = () => {
    setIsZoomed(false);
    setCurrentIndex((previous) => (previous - 1 + images.length) % images.length);
  };

  const handleDialogKeyDown = (event) => {
    if (event.key === "Tab") {
      const controls = event.currentTarget.querySelectorAll("button, a[href]");
      const firstControl = controls[0];
      const lastControl = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault();
        lastControl.focus();
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault();
        firstControl.focus();
      }
      return;
    }
    if (isZoomed && event.target === imageViewportRef.current) return;
    if (images.length < 2) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previousImage();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      nextImage();
    }
  };

  return (
    <section aria-label={`${title} image gallery`} className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden p-3 sm:aspect-video sm:p-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <img
              src={currentImage.placeholder || getImageSources(images[currentIndex], 320).src}
              alt=""
              className="h-full w-full scale-110 object-cover opacity-20 blur-3xl"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <ProgressiveImage
            src={images[currentIndex]}
            alt={imageAlt}
            className="relative h-full w-full rounded-lg"
            imageClassName="object-contain"
            sizes="(min-width: 1080px) 950px, (min-width: 640px) calc(100vw - 96px), calc(100vw - 48px)"
            loading="eager"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-t border-white/10 px-4 py-3 sm:px-5">
          <p aria-live="polite" aria-atomic="true" className="min-w-0 flex-[1_1_240px] text-sm leading-6 text-slate-200">
            {figureCaption}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              aria-haspopup="dialog"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-orange-200 transition hover:bg-white/5 hover:text-orange-100 focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              <FiMaximize2 aria-hidden="true" />
              Expand image
            </button>
            {images.length > 1 ? (
              <div className="flex items-center gap-2">
                <button type="button" onClick={previousImage} aria-label="Previous image" className={iconButtonClass}>
                  <FiChevronLeft aria-hidden="true" />
                </button>
                <span className="min-w-10 text-center text-sm tabular-nums text-slate-300">
                  {currentIndex + 1} / {images.length}
                </span>
                <button type="button" onClick={nextImage} aria-label="Next image" className={iconButtonClass}>
                  <FiChevronRight aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show image ${index + 1}${captions[index]?.trim() ? `: ${captions[index].trim()}` : ""}`}
              aria-pressed={index === currentIndex}
              className={`overflow-hidden rounded-lg border transition focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b10] ${
                index === currentIndex
                  ? "border-orange-300 ring-1 ring-orange-300/45"
                  : "border-white/10 opacity-65 hover:border-white/30 hover:opacity-100"
              }`}
            >
              <ProgressiveImage
                src={image}
                alt=""
                className="aspect-[4/3] h-full w-full"
                imageClassName="object-cover"
                maxWidth={320}
                sizes="(min-width: 768px) 160px, (min-width: 640px) calc((100vw - 96px) / 6), calc((100vw - 56px) / 4)"
              />
            </button>
          ))}
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        aria-describedby={dialogCaptionId}
        onClose={() => {
          setIsExpanded(false);
          setIsZoomed(false);
        }}
        onKeyDown={handleDialogKeyDown}
        className="m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-7xl overflow-y-auto rounded-2xl border border-white/15 bg-[#080b10] p-0 text-white shadow-2xl backdrop:bg-black/90 backdrop:backdrop-blur-md"
      >
        {isExpanded ? (
          <>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#080b10] px-4 py-3 sm:px-6">
              <h2 id={dialogTitleId} className="text-base font-semibold sm:text-lg">{title}</h2>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="Close expanded image"
                autoFocus
                className={iconButtonClass}
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <div
              ref={imageViewportRef}
              tabIndex={isZoomed ? 0 : -1}
              role="region"
              aria-label={isZoomed ? "Zoomed image; scroll to inspect details" : "Expanded image"}
              className="h-[55dvh] min-h-40 overflow-auto overscroll-contain bg-black/40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-300 sm:h-[65dvh]"
            >
              <div className={`p-2 sm:p-4 ${isZoomed ? "h-[200%] w-[200%]" : "h-full w-full"}`}>
                <ProgressiveImage
                  src={images[currentIndex]}
                  alt={imageAlt}
                  className="h-full w-full"
                  imageClassName="object-contain"
                  maxWidth={2048}
                  sizes={isZoomed ? "(min-width: 1280px) 2496px, calc((100vw - 48px) * 2)" : "(min-width: 1280px) 1248px, calc(100vw - 48px)"}
                  loading="eager"
                />
              </div>
            </div>
            <div className="space-y-3 border-t border-white/10 px-4 py-4 sm:px-6">
              <p id={dialogCaptionId} aria-live="polite" aria-atomic="true" className="text-sm leading-6 text-slate-200">
                {figureCaption}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <button
                    type="button"
                    onClick={() => setIsZoomed((previous) => !previous)}
                    aria-pressed={isZoomed}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-slate-100 transition hover:text-orange-100 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10]"
                  >
                    {isZoomed ? <FiMinimize2 aria-hidden="true" /> : <FiZoomIn aria-hidden="true" />}
                    {isZoomed ? "Reset zoom" : "Zoom in"}
                  </button>
                  <a
                    href={currentImage.original}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm text-orange-200 transition hover:text-orange-100 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10]"
                  >
                    Open original
                    <FiExternalLink aria-hidden="true" />
                  </a>
                </div>
                {images.length > 1 ? (
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={previousImage} aria-label="Previous expanded image" className={iconButtonClass}>
                      <FiChevronLeft aria-hidden="true" />
                    </button>
                    <span className="min-w-10 text-center text-sm tabular-nums text-slate-300">{currentIndex + 1} / {images.length}</span>
                    <button type="button" onClick={nextImage} aria-label="Next expanded image" className={iconButtonClass}>
                      <FiChevronRight aria-hidden="true" />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </dialog>
    </section>
  );
};

export default ProjectGallery;
