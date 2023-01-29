import { useEffect } from "react";

const Card = () => {
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
    <div
      className="absolute top-[774px] left-[255px] w-[380px] h-[460px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-left text-base text-white font-jost"
      data-animate-on-scroll
    >
      <div className="absolute top-[0px] left-[0px] rounded-base [background:linear-gradient(135deg,_#ee82ee,_#572ff9_63.54%,_#0000ff)] w-[380px] h-[460px]" />
      <div
        className="absolute top-[9.15px] left-[21.84px] inline-block w-[348.67px] h-[243.91px]"
        data-scroll-to="chooseThePerfect"
      >
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px] text-lg">
          <b>
            <span>{`Choose the `}</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>perfect design</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="m-0">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
      </div>
      <img
        className="absolute top-[194px] left-[76px] w-[222.79px] h-[206.93px] object-cover"
        alt=""
        src="../image-3@2x.png"
      />
    </div>
  );
};

export default Card;
