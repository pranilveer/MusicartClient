import React from "react";
import style from "./SkeletonGridCard.module.css";

const SkeletonGridCard = () => {
  return (
    <div className={style.skeletonCard}>
      <div className={style.skeletonImage} />
      <div className={style.skeletonText} />
      <div className={style.skeletonTextSmall} />
    </div>
  );
};

export default SkeletonGridCard;