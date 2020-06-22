import React from "react";
import avatar from "../../assets/user.png";

const PhotoPreview = ({ cardState = true, member }) => {
  return (
    <>
      {member.userPhoto ? (
        <div className="photo">
          <img
            className={cardState ? " photo__small" : " photo__big"}
            src={member.userPhoto}
            alt="storageImg"
          />
        </div>
      ) : (
        <div className="photo">
          <img
            className={cardState ? " photo__small" : " photo__big"}
            src={avatar}
            alt="storageImg"
          />
        </div>
      )}
    </>
  );
};

export default PhotoPreview;
