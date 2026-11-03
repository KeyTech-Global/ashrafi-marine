import Image, { type ImageProps } from "next/image";
import { images, type ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

type Props = Omit<ImageProps, "src" | "alt"> & {
  imageKey: ImageKey;
  alt?: string;
};

export function SiteImage({ imageKey, alt, className, ...rest }: Props) {
  const image = images[imageKey];
  return (
    <Image
      src={image.src}
      alt={alt ?? image.alt}
      placeholder="blur"
      blurDataURL={image.blurDataURL}
      className={cn("object-cover", className)}
      {...rest}
    />
  );
}
