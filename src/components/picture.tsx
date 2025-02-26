import Image from "next/image";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "velite";

type PictureProps = {
  image:
  | string
  | { src: string; blurDataURL?: string; width?: number; height?: number };
  imageDark?:
  | string
  | { src: string; blurDataURL?: string; width?: number; height?: number };
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
  const imageSrc = typeof image === "string" ? image : image.src;
  const imageDarkSrc =
    imageDark && typeof imageDark === "string" ? imageDark : imageDark?.src;

  return (
    <>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={alt}
          width={
            width ||
            (typeof image !== "string" ? image.width : undefined) ||
            1000
          } // Default width
          height={
            height ||
            (typeof image !== "string" ? image.height : undefined) ||
            500
          } // Default height
          className={cn(imageDark && "block dark:hidden", className)}
          priority
          quality={quality || 100}
          {...(typeof image !== "string" && image.blurDataURL
            ? { blurDataURL: image.blurDataURL, placeholder: "blur" }
            : { placeholder: "empty" })}
        />
      )}

      {imageDarkSrc && (
        <Image
          src={imageDarkSrc}
          alt={alt}
          width={
            width ||
            (typeof imageDark !== "string" ? imageDark.width : undefined) ||
            1000
          }
          height={
            height ||
            (typeof imageDark !== "string" ? imageDark.height : undefined) ||
            500
          }
          className={cn("hidden dark:block", className)}
          priority
          quality={quality || 100}
          {...(typeof imageDark !== "string" && imageDark.blurDataURL
            ? { blurDataURL: imageDark.blurDataURL, placeholder: "blur" }
            : { placeholder: "empty" })}
        />
      )}
    </>
  );
}
