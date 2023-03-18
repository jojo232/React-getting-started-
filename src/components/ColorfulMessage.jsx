import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入　何回もprops.color,props.children、prppsがダブっているから分割代入で省力する
  const { color, children } = props;
  const contentStyle = {
    // javascrioutはオブジェクト名とプロパティが同じ値のときは省力できる
    color,
    fontSize: `18px`
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
