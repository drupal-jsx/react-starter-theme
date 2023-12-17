import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';
import clsx from 'clsx';

// Step 2: After step 1, also add each prop as a destructured variable to the
// below function signature.
export default function DrupalComponent({ attributes }) {
  return(
    <div { ...props(attributes) } >
      {/* Step 3: Use the variables added in step 2 as needed. */}
      REPLACE THIS WITH REAL CONTENT
    </div>
  );
}

// Step 1: Declare each prop that the component wants to use by adding it to
// the below propTypes object.
DrupalComponent.propTypes = {
  attributes: PropTypes.object,
}
