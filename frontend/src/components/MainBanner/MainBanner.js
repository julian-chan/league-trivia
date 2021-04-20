import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MainBanner.css';

function MainBanner(props) {
  const [bannerText, setBannerText] = useState(props.bannerText);

  useEffect(() => {
    setBannerText(props.bannerText);
  }, [props.bannerText]);

  return (
    <div className="MainBanner">
      {bannerText}
    </div>
  )
}

MainBanner.propTypes = {
  // Text to render in the banner
  bannerText: PropTypes.string.isRequired
}

export default MainBanner;