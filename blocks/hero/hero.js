/**
 * Hero block: renders the authored content as-is.
 * The picture is positioned behind the text by CSS; no copy is hardcoded here.
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  block.querySelectorAll(':scope > div').forEach((row) => {
    row.classList.add('hero-row');
    row.querySelectorAll(':scope > div').forEach((cell) => {
      cell.classList.add('hero-content');
    });
  });
}
