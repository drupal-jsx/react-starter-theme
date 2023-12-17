import PropTypes from 'prop-types';
import { attributesToProps as p } from '@drupal-jsx/drupal-utils';
import clsx from 'clsx';

export default function DrupalLayout__ThreecolSection({ attributes, content, regionAttributes }) {
  if (!content) {
    return <></>;
  }

  return(
    <div { ...p(attributes) } className="flex flex-row flex-wrap justify-between three-col__container" >
      { content.first &&
        <div { ...p(regionAttributes?.first) } className={ clsx(regionAttributes?.first?.class, 'w-1/3 three-col__col') }>
          { content.first }
        </div>
      }
      { content.second &&
        <div { ...p(regionAttributes?.second) } className={ clsx(regionAttributes?.second?.class, 'w-1/3 three-col__col') }>
          { content.second }
        </div>
      }
      { content.third &&
        <div { ...p(regionAttributes?.third) } className={ clsx(regionAttributes?.third?.class, 'w-1/3 three-col__col') }>
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
