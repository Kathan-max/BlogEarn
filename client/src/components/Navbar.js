import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='chooseThePerfect']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onTeamClick = useCallback(() => {
    navigate("/team-page");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

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
    <div className="absolute top-[0px] left-[0px] w-[1229px] h-12 text-left text-4xs text-white font-jost">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-4xs font-bold font-jost text-white text-left inline-block w-[59.55px] h-[36.58px]">
        <p className="[margin-block-start:0] [margin-block-end:0px]">Blog</p>
        <p className="m-0">Earn</p>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[179px] text-4xs font-bold font-jost text-white text-left inline-block w-[107px] h-6">
        Home
      </button>
      <a
        className="[text-decoration:none] absolute top-[19px] left-[399px] font-bold text-[inherit] inline-block w-[108px] h-6 cursor-pointer"
        onClick={onAboutClick}
      >
        About
      </a>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[619px] text-4xs font-bold font-jost text-white text-left inline-block w-[108px] h-6"
        onClick={onTeamClick}
      >
        Team
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[835px] text-4xs font-bold font-jost text-white text-left inline-block w-[108px] h-6"
        onClick={onContactClick}
      >
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
  );
};

export default Navbar;
