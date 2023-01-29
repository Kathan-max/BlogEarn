import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onGoogleButtonClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onRectangle1Click = useCallback(() => {
    window.open(
      "https://www.locofy.ai/builder/63d4c4b35ad275954cebdcb5?screen=1%3A2"
    );
  }, []);

  const onContinueWithGoogleClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onRectangle3Click = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onLoginClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onNewToBlogClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden text-center text-[29.36px] text-white font-jost">
      <div
        className="absolute top-[102px] left-[430.61px] w-[555.55px] h-[348.12px]"
        id="logo_main"
      >
        <img
          className="absolute top-[0px] left-[149.81px] w-[278.22px] h-[272.59px] object-cover"
          alt=""
          src="../image-7@2x.png"
        />
        <div
          className="absolute top-[284.17px] left-[0px] leading-[35.61px] font-bold [background:linear-gradient(90deg,_#ae67fa,_#f49867)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[555.55px] h-[63.95px]"
          id="title_tag"
        >
          Write, Mention, Earn
        </div>
      </div>
      <div className="absolute top-[448.85px] left-[374.06px] w-[689.05px] h-[430.17px]">
        <div
          className="absolute top-[0px] left-[73.3px] w-[540.02px] h-[229.9px]"
          id="uname"
        >
          <div className="absolute top-[151.61px] left-[0px] rounded-[26.19px] box-border w-[537.03px] h-[78.29px] border-[1.3px] border-solid border-white" />
          <input
            className="[border:none] inline-block font-montserrat text-6xs bg-[transparent] absolute top-[180.93px] left-[73.3px] leading-[25.49px] uppercase font-bold text-white text-center w-[414.49px] h-[34.7px]"
            type="text"
            placeholder="USERNAME"
          />
          <img
            className="absolute top-[176.74px] left-[27.23px] w-[37.06px] h-[35.75px]"
            alt=""
            src="../user-icon1.svg"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[2.99px] w-[537.03px] h-[78.29px]"
            onClick={onGoogleButtonClick}
          >
            <div className="absolute top-[0px] left-[0px] w-[537.03px] h-[78.29px]">
              <button
                className="cursor-pointer p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-[26.15px] box-border w-[537.03px] h-[78.29px] border-[1.3px] border-solid border-white"
                onClick={onRectangle1Click}
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[23.32px] left-[79.43px] text-[17.97px] leading-[25.67px] uppercase font-bold font-montserrat text-white text-center inline-block w-[410.97px] h-[36.64px]"
                onClick={onContinueWithGoogleClick}
              >
                {" "}
                Continue with google
              </button>
            </div>
            <img
              className="absolute top-[23.23px] left-[27px] w-[35.8px] h-[34.54px] object-cover"
              alt=""
              src="../google-icon@3x.png"
            />
          </button>
        </div>
        <div
          className="absolute top-[260.52px] left-[75.4px] w-[533.4px] h-[77.18px]"
          id="pword"
        >
          <div className="absolute top-[0px] left-[0px] w-[533.4px] h-[77.18px]">
            <div className="absolute top-[0px] left-[0px] rounded-[25.98px] box-border w-[533.4px] h-[77.18px] border-[1px] border-solid border-white" />
            <input
              className="[border:none] inline-block font-montserrat text-6xs bg-[transparent] absolute top-[25.13px] left-[71.21px] leading-[25.49px] uppercase font-bold text-white text-center w-[414.49px] h-[34.7px]"
              type="text"
              placeholder="password"
            />
            <img
              className="absolute h-[40.7%] w-[5.89%] top-[29.85%] right-[89.4%] bottom-[29.45%] left-[4.71%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../password-icon1.svg"
            />
          </div>
        </div>
        <div
          className="absolute top-[367.33px] left-[0px] w-[689.05px] h-[62.83px]"
          id="lgin"
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[68.91px] rounded-[33.62px] [background:linear-gradient(135deg,_#eead92,_#6018dc)] shadow-[0px_6.646754264831543px_6.65px_rgba(0,_0,_0,_0.3)] w-[550.22px] h-[62.83px]"
            onClick={onRectangle3Click}
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17.1px] left-[0px] text-[26.59px] leading-[33.23px] uppercase font-semibold font-montserrat text-white text-center inline-block w-[689.05px] h-[28.16px]"
            onClick={onLoginClick}
          >
            login
          </button>
        </div>
      </div>
      <div
        className="absolute top-[546.01px] left-[284px] text-[20.81px] leading-[40.84px] uppercase font-bold font-montserrat inline-block w-[871.27px] h-[58.64px]"
        id="or"
      >
        OR
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[902.06px] left-[284px] text-[18.41px] leading-[16.01px] uppercase font-bold font-montserrat text-center inline-block w-[871.27px] h-[20.94px]"
        onClick={onNewToBlogClick}
      >
        <span className="text-white">{`New to blog earn? `}</span>
        <span className="[text-decoration:underline] text-slateblue">
          Sign UP
        </span>
      </button>
    </div>
  );
};

export default Login;
