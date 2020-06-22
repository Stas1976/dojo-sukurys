import React from "react";
import UserIcon from "../../../assets/user.png";

const PhotoInput = ({ files, userPhotoLink }) => {
  return (
    <div>
      {files.length > 0 ? (
        <img
          src={files[0].preview}
          className="photo-input__user-icon"
          alt="user"
        />
      ) : userPhotoLink ? (
        <img
          src={userPhotoLink}
          className="photo-input__user-icon"
          alt="user"
        />
      ) : (
        <img src={UserIcon} className="photo-input__user-icon" alt="user" />
      )}
    </div>
  );
};

export default PhotoInput;
