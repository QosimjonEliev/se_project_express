import React, { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "./ItemCard.css";
import heart_button_inactive from "../../../images/heart_button_inactive.svg";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some((_id) => _id === currentUser._id);

  const itemLikeButtonClassName = `card__likeButton ${
    isLiked ? "card__likeButton-active" : "card__likeButton-inactive"
  }`;

  const handleCardLikeClick = (item) => {
    onCardLike(item, isLiked, currentUser);
  };

  return (
    <div className="card__element">
      <img
        src={item.imageUrl}
        className="card__image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <div className="card__title">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={itemLikeButtonClassName}
          type="button"
          onClick={() => handleCardLikeClick(item)}
        ></button>
      </div>
    </div>
  );
};

export default ItemCard;
