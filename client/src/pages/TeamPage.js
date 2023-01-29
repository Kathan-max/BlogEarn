import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TeamPage = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTeamClick = useCallback(() => {
    navigate("/team-page");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <main className="relative [background:linear-gradient(180deg,_#000_3.96%,_#042a53_90.66%)] w-full h-[1512px] overflow-hidden text-left text-xs text-violet font-jost">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(171.36deg,_#0396ff_99.82%)] w-[1528.3px] h-[107.94px] hidden" />
      <div className="absolute top-[1397.45px] left-[436.1px] leading-[128%] font-bold inline-block w-[329.47px] h-[53.22px]">
        <p className="[margin-block-start:0] [margin-block-end:51.53px]">
          Kishan Akhbari
        </p>
      </div>
      <div className="absolute top-[1395px] left-[808px] leading-[128%] font-bold inline-block w-[278.79px] h-[53.22px]">
        {" "}
        Jatin Parmar
      </div>
      <img
        className="absolute top-[485px] left-[409px] w-[228.94px] h-[228.94px] object-cover"
        alt=""
        src="../maulik-profile-1@2x.png"
      />
      <img
        className="absolute top-[485px] left-[775.65px] w-[228.94px] h-[228.94px] object-cover"
        alt=""
        src="../1672347162618modified-1@2x.png"
      />
      <img
        className="absolute top-[1146px] left-[416px] w-[228.94px] h-[228.94px] object-cover"
        alt=""
        src="../310073080-650922389980545-1141324544407100619-nmodified-1@2x.png"
      />
      <div className="absolute top-[1068.82px] left-[631.25px] leading-[128%] font-bold inline-block w-[168.96px] h-[53.22px]">
        <p className="[margin-block-start:0] [margin-block-end:51.53px]">
          Jeel Bhalodiya
        </p>
      </div>
      <img
        className="absolute top-[1146px] left-[776px] w-[228.94px] h-[228.94px] object-cover"
        alt=""
        src="../1662487782836modified-1@2x.png"
      />
      <div className="absolute top-[734px] left-[423px] leading-[128%] font-bold inline-block w-[214.58px] h-[53.22px]">
        Maulik Ranadive
      </div>
      <div className="absolute top-[734px] left-[794px] leading-[128%] font-bold inline-block w-[329.47px] h-[53.22px]">
        <p className="[margin-block-start:0] [margin-block-end:51.53px]">
          Kathan Bhavsar
        </p>
      </div>
      <div className="absolute top-[292px] left-[230px] text-[92.4px] leading-[123.95px] font-bold text-lightsalmon inline-block w-[979.23px] h-[117.19px]">
        MEET THE CREATORS
      </div>
      <img
        className="absolute top-[819.6px] left-[599.15px] w-[228.94px] h-[228.94px] object-cover"
        alt=""
        src="../whatsapp-image-20230128-at-253-1@2x.png"
      />
      <img
        className="absolute top-[97.39px] left-[82.5px] w-[42.73px] h-[46.71px] object-cover"
        alt=""
        src="../mask-group5@2x.png"
      />
      <div className="absolute top-[90px] left-[126px] w-[1229px] h-12">
        <div className="absolute top-[0px] left-[0px] w-[1229px] h-12">
          <div className="absolute top-[0px] left-[0px] w-[1229px] h-12">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-4xs font-bold font-jost text-white text-left inline-block w-[59.55px] h-[36.58px]">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Blog
              </p>
              <p className="m-0">Earn</p>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[179px] text-4xs font-bold font-jost text-white text-left inline-block w-[107px] h-6"
              onClick={onHomeClick}
            >
              Home
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[399px] text-4xs font-bold font-jost text-white text-left inline-block w-[108px] h-6">
              About
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[619px] text-4xs font-bold font-jost text-white text-left inline-block w-[108px] h-6"
              onClick={onTeamClick}
            >
              Team
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[835px] text-4xs font-bold font-jost text-white text-left inline-block w-[108px] h-6">
              Contact
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[14px] left-[1150px] w-[79px] h-[34px]"
              onClick={onLoginButtonClick}
            >
              <div className="absolute top-[0px] left-[0px] rounded-3xxs box-border w-[79px] h-[34px] border-[0.5px] border-solid border-white" />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4px] left-[14px] text-4xs font-bold font-jost text-white text-left inline-block w-[59px] h-4"
                onClick={onLoginClick}
              >
                Login
              </button>
            </button>
            <button className="cursor-pointer p-0 bg-[transparent] absolute top-[14px] left-[1059px] rounded-3xxs box-border w-[78px] h-[34px] border-[0.5px] border-solid border-white" />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[18px] left-[1062px] text-5xs font-bold font-jost text-white text-left inline-block w-[75px] h-4"
              onClick={onSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamPage;
