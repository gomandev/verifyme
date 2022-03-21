import React from 'react';
import { Images } from '@teambit/community.entity.images';
export declare type LogoShowcaseProps = {
    /**
     * An object of images with src and alt attributes
     */
    images: Images[];
} & React.HTMLAttributes<HTMLDivElement>;
export declare function LogoShowcase({ images, className }: LogoShowcaseProps): JSX.Element;
