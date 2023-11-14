import packageInfo from "../package.json";

const drupalThemeName = packageInfo.name.replaceAll('-', '_');

['info', 'libraries'].forEach(function(partialFileName) {
  const f = Bun.file(`scaffold/drupal/${partialFileName}.yml`);
  const scaffoldContent = await f.text();
  const content = scaffoldContent.replaceAll('NAME', drupalThemeName);
  await Bun.write(`${drupalThemeName}.${partialFileName}.yml`, content);  
})
