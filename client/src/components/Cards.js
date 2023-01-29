import { useMemo } from "react";

const Cards = ({
  rectangle13BorderRadius,
  rectangle13Background,
  rectangle13Width,
  rectangle13Height,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      borderRadius: rectangle13BorderRadius,
      background: rectangle13Background,
      width: rectangle13Width,
      height: rectangle13Height,
    };
  }, [
    rectangle13BorderRadius,
    rectangle13Background,
    rectangle13Width,
    rectangle13Height,
  ]);

  return (
    <div
      className="absolute top-[0px] left-[0px] rounded-large [background:linear-gradient(135deg,_#52e5e7,_#130cb7)] w-[392px] h-[460px]"
      style={rectangleDivStyle}
    />
  );
};

export default Cards;
