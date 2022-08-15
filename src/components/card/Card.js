import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${url}`);
  };
  return (
    <div className="box" onClick={handleClick}>
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;
