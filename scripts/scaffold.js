import packageInfo from "../package.json";
import { mkdir, rm } from 'node:fs/promises';

const drupalThemeName = packageInfo.name.replaceAll('-', '_');

// Copy files from the scaffold directory to the project root directory while
// replacing placeholders within the file contents.
const files = ['info', 'libraries'];
for (const file of files) {
  try {
    const f = Bun.file(`scaffold/drupal/${file}.yml`);
    const scaffoldContent = await f.text();
    const content = scaffoldContent.replaceAll('NAME', drupalThemeName);
    await Bun.write(`${drupalThemeName}.${file}.yml`, content);
  }
  catch (e) {}
}
// The scaffold directory is no longer needed, so remove it.
try { await rm('scaffold', {recursive: true}); } catch(e) {}

// Create the dist and dist/prop-types directories for the build script to
// generate files into.
await mkdir('dist/prop-types', { recursive: true });

// Remove files that are specific to the template repository but shouldn't be
// in the created project.
const filesToRemove = ['LICENSE', 'README.md', 'scripts/scaffold.js'];
for (const file of filesToRemove) {
  try { await rm(file); } catch(e) {}
}
