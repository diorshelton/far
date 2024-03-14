import React from "react"
import spaceBanner from '../assets/ssd_banner.png'
import styled from "styled-components";

const StyledBanner = styled.banner `
  .banner-container {
    background-image: url(spaceBanner);
    background-color: red;
  }
`

const Banner = () => {
  return (
    <StyledBanner>
      <img src={spaceBanner} alt="space graphic"/>
      <div className="banner-container">
        <h1>Hi</h1>
      </div>
    </StyledBanner>
	);
};

export default Banner;