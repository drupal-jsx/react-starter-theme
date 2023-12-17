import PropTypes from 'prop-types';
import { attributesToProps as p } from '@drupal-jsx/drupal-utils';

export default function DrupalBlock({ attributes, label, content, titlePrefix, titleAttributes, titleSuffix }) {
  return(
    <div { ...p(attributes) } className="block__container">
      { titlePrefix }
      { label &&
        <h2 { ...p(titleAttributes) }>{ label }</h2>
      }
      { titleSuffix }
      { content }
    </div>
  );
}

DrupalBlock.propTypes = {
  attributes: PropTypes.object,
  label: PropTypes.element,
  content: PropTypes.element,
  titlePrefix: PropTypes.element,
  titleAttributes: PropTypes.object,
  titleSuffix: PropTypes.element,
}
