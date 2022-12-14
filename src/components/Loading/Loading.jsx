import { useEffect, useRef } from "react";
import "./loading.scss";
import lottie from "lottie-web";

export const Loading = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loadingAnimation2.json"),
    });
  });

  return (
    <div className="loading">
      <img src="/images/hrdkLogo.svg" alt="Logo" className="logo" />
      <div className="lottie-container" ref={container}></div>
      <div className="loading-container">
        <h1 className="title">Loading...</h1>
      </div>
      <div className="alert-container">
        <div className="desc">
          For the best experience please use latest version of respective
          browsers,
          <br />
          <div className="flex">
            <div className="flex-inner">
              <img
                className="browser-logo"
                src="/images/safariLogo.png"
                alt="chrome-logo"
              />
              Safari 15+
            </div>
            <div className="flex-inner">
              <img
                className="browser-logo"
                src="/images/chromeLogo.png"
                alt="chrome-logo"
              />
              Google Chrome
            </div>
            <div className="flex-inner">
              <img
                className="browser-logo"
                src="/images/firefoxLogo.png"
                alt=""
              />
              FireFox
            </div>
            <div className="flex-inner">
              <img className="browser-logo" src="/images/edgeLogo.png" alt="" />
              Microsoft Edge
            </div>
            <div className="flex-inner">
              <img
                className="browser-logo"
                src="/images/braveLogo.png"
                alt="brave-logo"
              />
              Brave
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
