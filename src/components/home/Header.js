import React from "react";
import Hero from "../global/Hero";
import home from "../../images/home.jpg";
import Banner from "../global/Banner";
import {PrimaryButton} from '../global/Button'

function Header() {
  return (
    <Hero img={home} color="rgba(0, 0, 0, 0.2)">
      <Banner greeting="Welcome to" title="Sheraton Danang Hotel" 
      text="Perched along tranquil Non Nuoc Beach, Sheraton Grand Danang Resort offers a truly transformative experience. Our hotel is just a short drive from Danang International Airport, near legendary attractions including Hoi An Old Town and the Marble Mountains. Whatever your reason for joining us at Sheraton Grand Danang Resort, we look forward to exceeding your expectations. "
      > 
        <PrimaryButton t="1rem">view details</PrimaryButton>
      </Banner>
    </Hero>
  );
}

export default Header;
