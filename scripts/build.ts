// Converts the CV markdown files in source/ into PDFs inside build/.
// Usage: bun run build           -> every .md in source/ (except ignr.*)
//        bun run build cv-us.md  -> only the given files
import { mdToPdf } from 'md-to-pdf';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dir, '..');
const sourceDir = path.join(root, 'source');
const outDir = path.join(root, 'build');

const args = Bun.argv.slice(2);
const files = args.length
  ? args.map((f) => path.basename(f))
  : (await Array.fromAsync(new Bun.Glob('*.md').scan(sourceDir))).filter((f) => !f.startsWith('ignr.'));

await mkdir(outDir, { recursive: true });

for (const file of files) {
  const source = path.join(sourceDir, file);
  const dest = path.join(outDir, `${path.basename(file, '.md')}.pdf`);
  // The first "# Heading" becomes the PDF title shown by viewers.
  const title = (await Bun.file(source).text()).match(/^# (.+)$/m)?.[1] ?? '';

  await mdToPdf(
    { path: source },
    {
      dest,
      basedir: sourceDir,
      document_title: title,
      stylesheet: [path.join(sourceDir, 'cv.css')],
      // Page size and margins come from @page in cv.css.
      pdf_options: { preferCSSPageSize: true, printBackground: true, margin: {} },
      // GitHub's Ubuntu runners block Chromium's sandbox.
      launch_options: process.env.CI ? { args: ['--no-sandbox'] } : {},
    },
  );
  console.log(`${file} -> ${path.relative(root, dest)}`);
}
