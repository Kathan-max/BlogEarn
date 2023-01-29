const OTP = () => {
  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden text-center text-[69.76px] text-white font-jost">
      <img
        className="absolute top-[168px] left-[548.74px] w-[351.73px] h-[351.73px] object-cover"
        alt=""
        src="../mask-group4@2x.png"
      />
      <div
        className="absolute top-[566.23px] left-[455.72px] leading-[53.14px] font-bold [background:linear-gradient(90deg,_#ae67fa,_#f49867)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[537.28px] h-[66.13px]"
        id="title_tag"
      >
        Verify OTP
      </div>
      <div className="absolute top-[679.6px] left-[502.11px] w-[428.45px] h-[64.75px]">
        <input
          className="bg-[transparent] absolute top-[0px] left-[0px] rounded-[29.11px] box-border w-[428.45px] h-[64.75px] border-[1.4px] border-solid border-white"
          type="text"
        />
        <input
          className="[border:none] inline-block font-montserrat text-[19.99px] bg-[transparent] absolute top-[17.91px] left-[61.99px] leading-[28.56px] uppercase font-bold text-white text-center w-[316.86px]"
          type="text"
          placeholder="ENter your otp"
        />
      </div>
      <div className="absolute top-[759.5px] left-[447px] text-[15.84px] leading-[13.78px] uppercase font-bold font-montserrat inline-block w-[537.28px] h-[13.78px]">
        enter 6 digit code sent through Email
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[798.78px] left-[478.98px] w-[476.72px] h-[57.1px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[47.67px] rounded-[25.67px] [background:linear-gradient(135deg,_#eead92,_#6018dc)] shadow-[0px_5.075554370880127px_5.08px_rgba(0,_0,_0,_0.3)] w-[380.67px] h-[57.1px]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[15.54px] left-[0px] text-[20.3px] leading-[25.38px] uppercase font-semibold font-montserrat text-white text-center inline-block w-[476.72px]">
          <a href="#" className="text-white no-underline">Submit</a>
        </button>
      </button>
      <img
        className="absolute top-[131.32px] left-[527px] w-[357.74px] h-[354.68px]"
        alt=""
        src="../ellipse-3.svg"
      />
    </div>
  );
};

export default OTP;
