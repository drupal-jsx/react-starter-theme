import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';

export default function DrupalMenu({ attributes, items }) {
  if (!items) { return <></>; }

  return(
    <ul { ...props(attributes) } >
      { Object.keys(items).map((key) =>
        <li key={ key } { ...props(items[key].attributes) }>
          <a href={ items[key].url }>{ items[key].title }</a>
          <DrupalMenu items={ items[key].below }></DrupalMenu>
        </li>
      )}
    </ul>
  );
}

DrupalMenu.propTypes = {
  attributes: PropTypes.object,
  items: PropTypes.object,
}
