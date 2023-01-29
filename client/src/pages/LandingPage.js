import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Cards from "../components/Cards";
import Footers from "../components/Footers";

const LandingPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <main className="relative [background:linear-gradient(180deg,_#000_3.96%,_#042a53_90.66%)] w-full h-[2162px] overflow-hidden text-left text-[54px] text-gray-100 font-jost">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(171.36deg,_#0396ff_99.82%)] w-[1600px] h-[113px] hidden" />
      <div className="absolute top-[90px] left-[126px] w-[1229px] h-12">
        <div className="absolute top-[0px] left-[0px] w-[1229px] h-12">
          <Navbar />
        </div>
      </div>
      <div className="absolute top-[323px] left-[195px] leading-[128%] font-bold whitespace-pre-wrap inline-block w-[490px] h-[270px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span>{`Don’t Just `}</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <span className="text-violet">write</span>
          <span>{` blogs, start `}</span>
        </p>
        <p className="m-0">
          <span className="text-lightsalmon">earning</span>
          <span>{` from them. `}</span>
          <span className="text-white">{` `}</span>
        </p>
      </div>
      <img
        className="absolute top-[98px] left-[83px] w-[43px] h-[47px] object-cover"
        alt=""
        src="../mask-group@2x.png"
      />
      <Card />
      <div
        className="absolute top-[774px] left-[790px] w-[392px] h-[460px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-sm text-white"
        data-animate-on-scroll
      >
        <Cards />
        <div className="absolute top-[9.64px] left-[39.01px] font-bold inline-block w-[314.75px] h-[188.21px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px] text-xl">
            <span>{`Target the `}</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>Audience</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            <span>&nbsp;</span>
          </p>
          <p className="m-0">
            <span>&nbsp;</span>
          </p>
        </div>
        <img
          className="absolute top-[186px] left-[79px] w-[222.79px] h-[222.79px] object-cover"
          alt=""
          src="../image-4@2x.png"
        />
      </div>
      <div
        className="absolute top-[1322px] left-[255px] w-[930px] h-[307.49px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-[50px]"
        data-animate-on-scroll
      >
        <Cards
          rectangle13BorderRadius="25px"
          rectangle13Background="linear-gradient(135deg, #8169e2, #319cff)"
          rectangle13Width="930px"
          rectangle13Height="307px"
        />
        <div className="absolute top-[65px] left-[56px] leading-[128%] font-bold inline-block w-[479px] h-[106px]">
          <span>Earn Money</span>
          <span className="text-white">{` `}</span>
        </div>
        <img
          className="absolute top-[34px] left-[611px] rounded-xxl w-[313.26px] h-[273.49px] object-cover"
          alt=""
          src="../image-2@2x.png"
        />
      </div>
      <Footers />
      <img
        className="absolute top-[193px] left-[786px] w-[349px] h-[379px]"
        alt=""
        src="../ellipse-1.svg"
      />
      <img
        className="absolute top-[445px] left-[1009px] w-[311px] h-[306px]"
        alt=""
        src="../ellipse-2.svg"
      />
      <img
        className="absolute top-[232px] left-[869px] w-[426px] h-[426px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="../mask-group1@2x.png"
        data-animate-on-scroll
      />
      <div className="absolute top-[1467px] left-[311px] text-lg leading-[128%] text-gray-200 inline-block w-[500px] h-[132px]">{`Write beautiful blogs and get paid for your hard work. `}</div>
    </main>
  );
};

export default LandingPage;
