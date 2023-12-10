import PropTypes from 'prop-types';
import DrupalBlock from './DrupalBlock';

export default function DrupalBlock__SystemBrandingBlock({ siteLogo, siteName, siteSlogan, content, ...rest }) {
  content =
    <>
      { siteLogo &&
        <a href={ Drupal.url('') } rel="home">
          <img src={ siteLogo } alt={ Drupal.t('Home') } />
        </a>
      }
      { siteName &&
        <a href={ Drupal.url('') } rel="home">{ siteName }</a>
      }
      { siteSlogan }
    </>

  return(<DrupalBlock content={ content } { ...rest }></DrupalBlock>);
}

DrupalBlock__SystemBrandingBlock.propTypes = {
  ...DrupalBlock.propTypes,
  siteLogo: PropTypes.string,
  siteName: PropTypes.element,
  siteSlogan: PropTypes.element,
};
