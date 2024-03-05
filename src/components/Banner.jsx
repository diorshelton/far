import React from "react"
import spaceBanner from '../assets/ssd_banner.png'
import styled from "styled-components";

const StyledBanner = styled.banner `
  .banner {
    background-image: url(spaceBanner);
    background-color: green;
  }
`

const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner">
      </div>
    </StyledBanner>
	);
};

export default Banner;