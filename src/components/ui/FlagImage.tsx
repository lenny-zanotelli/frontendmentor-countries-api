interface Props {
  src: string;
  alt: string;
}

function FlagImage({ src, alt }: Props) {
  return (
    <>
      <link rel="preload" href={src} as="image" />
      <img
        src={src}
        alt={alt}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        loading="lazy"
      />
    </>
  );
}

export default FlagImage;
