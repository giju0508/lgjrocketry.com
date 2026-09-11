import { useState } from "react";
import { getImageSources } from "../../lib/imageSources";

const ImageWithPreview = ({
  source,
  alt,
  className = "",
  imageClassName = "",
  sizes,
  loading = "lazy",
  priority = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [useOriginal, setUseOriginal] = useState(false);

  return (
    <span className={`progressive-image ${className}`}>
      {source.placeholder ? (
        <img
          src={source.placeholder}
          alt=""
          aria-hidden="true"
          className={`progressive-image-preview ${loaded ? "is-loaded" : ""} ${imageClassName}`}
        />
      ) : null}
      <img
        src={useOriginal ? source.original : source.src}
        srcSet={useOriginal ? undefined : source.srcSet}
        sizes={sizes}
        width={source.width}
        height={source.height}
        alt={alt}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!useOriginal) setUseOriginal(true);
        }}
        className={`progressive-image-full ${loaded || !source.placeholder ? "is-loaded" : ""} ${imageClassName}`}
      />
    </span>
  );
};

const ProgressiveImage = ({ src, maxWidth, ...props }) => {
  const source = getImageSources(src, maxWidth);
  return <ImageWithPreview key={source.src} source={source} {...props} />;
};

export default ProgressiveImage;
