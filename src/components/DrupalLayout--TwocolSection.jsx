import PropTypes from 'prop-types';
import { attributesToProps as p } from '@drupal-jsx/drupal-utils';
import clsx from 'clsx';

export default function DrupalLayout__TwocolSection({ attributes, content, regionAttributes }) {
  if (!content) {
    return <></>;
  }

  return(
    <div { ...p(attributes) } className="flex flex-row justify-between two-col__container" >
      { content.first &&
        <div { ...p(regionAttributes?.first) } className={ clsx(regionAttributes?.first?.class, 'w-1/2', 'two-col__one') }>
          { content.first }
        </div>
      }
      { content.second &&
        <div { ...p(regionAttributes?.second) } className={ clsx(regionAttributes?.second?.class, 'w-1/2', 'two-col__two') }>
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
