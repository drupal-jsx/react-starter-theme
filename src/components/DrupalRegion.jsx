import PropTypes from 'prop-types';
import { attributesToProps as p } from '@drupal-jsx/drupal-utils';

export default function DrupalRegion({ attributes, content }) {
  if (!content) { return <></>; }

  return(
    <div { ...p(attributes) } >
      { content }
    </div>
  );
}

DrupalRegion.propTypes = {
  attributes: PropTypes.object,
  content: PropTypes.element,
}
