import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "velite";


type PictureProps = {
  image: string;
  imageDark?: string;
  quality?: number;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

export default function Picture({
  image,
  imageDark,
  quality,
  width,
  height,
  alt,
  className,
}: PictureProps) {
  const imageSrc = typeof image === "string" ? image : image;
  const imageDarkSrc =
    imageDark && typeof imageDark !== "string" ? imageDark : imageDark;

  return (
    <>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={alt}
          width={width || 1000} // Default width
          height={height || 500} // Default height
          className={cn(imageDark && "block dark:hidden", className)}
          priority
          quality={quality || 100}
        />
      )}

      {imageDarkSrc && (
        <Image
          src={ imageDarkSrc}
          alt={alt}
          width={1000}
          height={500}
          className={cn("hidden dark:block", className)}
          priority
          quality={quality || 100}
        />
      )}
    </>
  );
}
