# LGJ Rocketry

## Projects soundtrack

Add an audio file you have permission to publish at `src/assets/projects-soundtrack.mp3` (OGG, WAV and M4A are also supported), then rebuild. Clicking a Projects link opens the audio player and requests playback. Playback continues during page navigation; the native controls pause playback, and closing the player stops it. Modified clicks that open another tab do not start music in the current tab.

The player stays disabled when no soundtrack file is present. Browsers that block automatic playback can use the player's play button.

## Image optimization

Run `npm install`, then `npm run dev` or `npm run build`. Both commands generate responsive WebP images with Sharp before Vite starts. Use Node.js 20.19+ or 22.12+.

Keep original photos in `public/images` and reference their original paths in the project data. The generator creates 320, 640, 1024, 1600 and 2048 px variants without upscaling, preserves orientation, and embeds tiny previews in `src/content/imageManifest.json`. Originals remain available as a fallback. Cards and thumbnails load lazily; the hero loads immediately. Images fade from the preview into the selected responsive variant.

After replacing or adding images while the dev server is running, run `npm run optimize:images` again. Content hashes prevent stale cached images, and unchanged variants are reused. Generated files in `public/optimized` and the manifest are ignored by Git and recreated automatically for deployment. To remove obsolete generated variants, delete only `public/optimized` and regenerate.

## Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
