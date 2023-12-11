import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';
import clsx from 'clsx';

export default function DrupalLayout__TwocolSection({ attributes, content, regionAttributes }) {
  if (!content) {
    return <></>;
  }

  return(
    <div { ...props(attributes) } className="flex flex-row justify-between" >
      { content.first &&
        <div { ...props(regionAttributes?.first) } className={ clsx(regionAttributes?.first?.class, 'w-1/2') }>
          { content.first }
        </div>
      }
      { content.second &&
        <div { ...props(regionAttributes?.second) } className={ clsx(regionAttributes?.second?.class, 'w-1/2') }>
          { content.second }
        </div>
      }
    </div>
  );
}

DrupalLayout__TwocolSection.propTypes = {
  attributes: PropTypes.object,
  content: PropTypes.shape({
    first: PropTypes.element,
    second: PropTypes.element,
  }),
  regionAttributes: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }),
}
