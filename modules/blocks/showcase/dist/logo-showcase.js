import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import styles from './logo-showcase.module.scss';
export function LogoShowcase({ images, className }) {
    return (React.createElement("div", { className: classNames(styles.logoShowcase, className) }, images.map((image, index) => (React.createElement(Image, { key: index, alt: image.alt, src: image.src, loading: (image.loading = 'lazy') })))));
}
//# sourceMappingURL=logo-showcase.js.map