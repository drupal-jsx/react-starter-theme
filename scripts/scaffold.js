import packageInfo from "../package.json";

const drupalThemeName = packageInfo.name.replaceAll('-', '_');

const files = ['info', 'libraries'];
for (const file of files) {
  const f = Bun.file(`scaffold/drupal/${file}.yml`);
  const scaffoldContent = await f.text();
  const content = scaffoldContent.replaceAll('NAME', drupalThemeName);
  await Bun.write(`${drupalThemeName}.${file}.yml`, content);  
}
