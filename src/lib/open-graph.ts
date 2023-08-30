import type { OGImageOptions } from "astro-og-canvas/dist/types";

export const baseImageOptions: OGImageOptions = {
    title: '',
    dir: 'ltr',
    logo: {
        path: './public/avatar-transparent.png',
        size: [200, 200]
    },
    bgGradient: [[134, 239, 172], [5, 150, 105]],
    border: {
        color: [255, 255, 255],
        width: 10,
        side: 'inline-start',
    }
};