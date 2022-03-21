import React from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "./logo-showcase.module.scss";

export type LogoShowcaseProps = {
  /**
   * An object of images with src and alt attributes
   */
  images: Array<{
    src: string;
    alt: string;
  }>;
} & React.HTMLAttributes<HTMLDivElement>;

export function LogoShowcase({ images, className }: LogoShowcaseProps) {
  return (
    <div
      style={{ marginTop: "100px" }}
      className={classNames(styles.logoShowcase, className)}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          alt={image.alt}
          src={image.src}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
}
