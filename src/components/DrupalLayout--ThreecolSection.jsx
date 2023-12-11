import PropTypes from 'prop-types';
import { props } from '@drupal-jsx/drupal-utils';
import clsx from 'clsx';

export default function DrupalLayout__ThreecolSection({ attributes, content, regionAttributes }) {
  if (!content) {
    return <></>;
  }

  return(
    <div { ...props(attributes) } className="flex flex-row justify-between" >
      { content.first &&
        <div { ...props(regionAttributes?.first) } className={ clsx(regionAttributes?.first?.class, 'basis-1/3') }>
          { content.first }
        </div>
      }
      { content.second &&
        <div { ...props(regionAttributes?.second) } className={ clsx(regionAttributes?.second?.class, 'basis-1/3') }>
          { content.second }
        </div>
      }
      { content.third &&
        <div { ...props(regionAttributes?.third) } className={ clsx(regionAttributes?.third?.class, 'basis-1/3') }>
          { content.third }
        </div>
      }
    </div>
  );
}

DrupalLayout__ThreecolSection.propTypes = {
  attributes: PropTypes.object,
  content: PropTypes.shape({
    first: PropTypes.element,
    second: PropTypes.element,
    third: PropTypes.element,
  }),
  regionAttributes: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
    third: PropTypes.object,
  }),
}
