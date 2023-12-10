import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';

export default function DrupalBlock({ attributes, label, content, titlePrefix, titleAttributes, titleSuffix }) {
  return(
    <div { ...props(attributes) }>
      { titlePrefix }
      { label &&
        <h2 { ...props(titleAttributes) }>{ label }</h2>
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
