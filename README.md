# South Nashville Greenways

An advocacy website promoting protected greenway infrastructure in South Nashville. The site highlights the shortcomings of painted bike lanes and makes the case for physically separated, multi-use paths that are safe for families, cyclists, and pedestrians.

Built with React, TypeScript, Vite, and [Lucide](https://lucide.dev/) icons.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Icons

This project uses [Lucide](https://lucide.dev/) for icons. Browse available icons at [lucide.dev/icons](https://lucide.dev/icons/).

```tsx
import { ArrowRight } from 'lucide-react';

<ArrowRight size={20} />
```

## Images

This project uses [Git LFS](https://git-lfs.com/) to store image files. Install Git LFS before cloning:

```bash
git lfs install
```

New `.png`, `.jpg`, `.jpeg`, and `.JPG` files will automatically be tracked by LFS.

## Deployment

The site is deployed via GitHub Pages. Pushing to the `main` branch triggers an automatic build and deploy through CI/CD.
