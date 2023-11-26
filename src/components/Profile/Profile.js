import React from "react";
import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

const Profile = ({
  onCreateModal,
  clothingItems,
  onSelectCard,
  onEditProfileModal,
  onLogout,
  onCardLike,
}) => {
  return (
    <section className="profile">
      <div className="profile__sidebar">
        <SideBar onEditProfileModal={onEditProfileModal} onLogout={onLogout} />
      </div>
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCardLike={onCardLike}
      />
    </section>
  );
};

export default Profile;
