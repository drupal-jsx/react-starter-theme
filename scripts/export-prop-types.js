import PropTypes from 'prop-types';

// Monkey patch PropTypes so that component prop types can be serialized to
// JSON for Drupal to read.
PropTypes.bool.toJSON = PropTypes.bool.isRequired.toJSON = () => 'boolean';
PropTypes.number.toJSON = PropTypes.number.isRequired.toJSON = () => 'number';
PropTypes.string.toJSON = PropTypes.string.isRequired.toJSON = () => 'string';
PropTypes.object.toJSON = PropTypes.object.isRequired.toJSON = () => 'object';
PropTypes.element.toJSON = PropTypes.element.isRequired.toJSON = () => 'JSX.Element';
PropTypes.shape = new Proxy(PropTypes.shape, {
  apply: function (target, thisArg, argumentsList) {
    const result = target(...argumentsList);
    result.toJSON = result.isRequired.toJSON = () => argumentsList[0];
    return result;
  }
})
PropTypes.arrayOf = new Proxy(PropTypes.arrayOf, {
  apply: function (target, thisArg, argumentsList) {
    const result = target(...argumentsList);
    result.toJSON = result.isRequired.toJSON = () => [argumentsList[0]];
    return result;
  }
})

// Dynamic import so that it happens after the above changes to PropTypes.
const {default: components} = await import('../src/components');

// Generate the *.template-info.json files for Drupal. For logging, match
// esbuild's formatting of indenting each generated file and adding an initial
// and final newline around the group of files.
console.log();
for (const tagName in components) {
  if (tagName.startsWith('drupal-') && components[tagName].propTypes) {
    const templateName = tagName.substring(7);
    const templateFileName = `dist/prop-types/${templateName}.template-info.json`;
    await Bun.write(templateFileName, JSON.stringify({props: components[tagName].propTypes}));
    console.log('  ' + templateFileName);
  }
}
console.log();
