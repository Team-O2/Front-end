import lottie from 'lottie-web';
import o2lottie from 'public/assets/lottie/o2lottie.json';
import React from 'react';

const LandingLottie = () => {
  React.useEffect(() => {
    const component = document.querySelector('#lottie-img');
    component &&
      lottie.loadAnimation({
        container: component,
        animationData: o2lottie,
        renderer: 'svg', // "canvas", "html"
        loop: false, // boolean
        autoplay: true, // boolean
      });
  }, []);

  return <div id="lottie-img" style={{ width: '1000px', height: '666px' }} />;
};

export default LandingLottie;
