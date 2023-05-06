import { globalCss } from './stitches';

export const globalStyles = globalCss({
  '*': { boxSizing: 'inherit' },
  html: { boxSizing: 'border-box' },
  body: { margin: 0 },
});
