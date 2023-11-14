import packageInfo from "./package.json";

const drupalThemeName = packageInfo.name.replaceAll('-', '_');

const f = Bun.file('scaffold/drupal/info.yml');
const scaffoldInfo = await f.text();
const info = scaffoldInfo.replaceAll('NAME', drupalThemeName);
await Bun.write(`${drupalThemeName}.info.yml`, info);
