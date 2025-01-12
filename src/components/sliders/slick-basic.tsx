import React from "react";

interface props {
  links: string[];
}

const SlickBasicSlider: React.FC<props> = ({ links }) => {
  return (
    <>
      <div>{links[0]}</div>
    </>
  );
};

export default SlickBasicSlider;
