import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onMaskGroupImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='emailInput']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLoginBtnClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onSendOtpClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden text-center text-[46.43px] font-jost">
      <img
        className="absolute top-[75px] left-[581.44px] w-[276px] h-[276px] object-cover cursor-pointer"
        alt=""
        src="../mask-group2@2x.png"
        onClick={onMaskGroupImageClick}
      />
      <div
        className="absolute top-[389.84px] left-[435px] leading-[56.33px] font-bold [background:linear-gradient(90deg,_#ae67fa,_#f49867)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[569.52px] h-[70.09px]"
        id="title_tag"
        data-scroll-to="emailInput"
      >
        Be a part of Blog-Earn
      </div>
      <div className="absolute top-[499.66px] left-[491.95px] w-[454.15px] h-[68.63px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xxl box-border w-[454.15px] h-[68.63px] border-[1.5px] border-solid border-white" />
        <input
          className="[border:none] inline-block font-montserrat text-3xs bg-[transparent] absolute top-[18.98px] left-[59.87px] leading-[30.28px] uppercase font-bold text-white text-center w-[341.71px]"
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div className="absolute top-[607.72px] left-[491.95px] w-[454.15px] h-[68.63px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xxl box-border w-[454.15px] h-[68.63px] border-[1.5px] border-solid border-white" />
        <input
          className="[border:none] inline-block font-montserrat text-3xs bg-[transparent] absolute top-[20.44px] left-[67.17px] leading-[30.28px] uppercase font-bold text-white text-center w-[347.55px]"
          type="text"
          placeholder="Email Address"
        />
        <img
          className="absolute top-[14.6px] left-[23.36px] w-[43.81px] h-[43.81px] object-cover"
          alt=""
          src="../mask-group3@2x.png"
        />
      </div>
      <img
        className="absolute top-[511.34px] left-[515.32px] w-[43.81px] h-[43.81px]"
        alt=""
        src="../user-icon.svg"
      />
      <div className="absolute top-[715.79px] left-[491.95px] rounded-[30.89px] box-border w-[454.15px] h-[68.63px] border-[1.2px] border-solid border-white" />
      <input
        className="[border:none] inline-block font-montserrat text-[21.22px] bg-[transparent] absolute top-[736.23px] left-[559.13px] leading-[30.32px] uppercase font-bold text-white text-center w-[338.79px] h-[30.67px]"
        type="text"
        placeholder="password"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[842.83px] left-[435px] w-[569.52px] h-[68.22px]"
        onClick={onLoginBtnClick}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[56.95px] rounded-[30.67px] [background:linear-gradient(135deg,_#eead92,_#6018dc)] shadow-[0px_6.0635786056518555px_6.06px_rgba(0,_0,_0,_0.3)] w-[454.77px] h-[68.22px]"
          onClick={onRectangle3Click}
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[18.56px] left-[0px] text-[24.25px] leading-[30.32px] uppercase font-semibold font-montserrat text-white text-center inline-block w-[569.52px]"
          onClick={onSendOtpClick}
        >
          send otp
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[934.83px] left-[435px] text-[16.79px] leading-[14.6px] uppercase font-bold font-montserrat text-white text-center inline-block w-[569.52px] h-[14.6px]"
        onClick={onHaveAnAccountClick}
      >
        Have An Account? log IN
      </button>
      <img
        className="absolute h-[3.58%] w-[2.64%] top-[71.44%] right-[61.56%] bottom-[24.99%] left-[35.8%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../password-icon.svg"
      />
    </div>
  );
};

export default SignUpPage;
