import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';
import clsx from 'clsx';

export default function DrupalComponent({ attributes }) {
  return(
    <div { ...props(attributes) } >
      REPLACE THIS WITH REAL CONTENT
    </div>
  );
}

DrupalComponent.propTypes = {
  attributes: PropTypes.object,
}
