import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';

export default function DrupalRegion({ attributes, content }) {
  if (!content) { return <></>; }

  return(
    <div { ...props(attributes) } >
      { content }
    </div>
  );
}

DrupalRegion.propTypes = {
  attributes: PropTypes.object,
  content: PropTypes.element,
}
