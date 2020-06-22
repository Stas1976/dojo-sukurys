import React from "react";

import PhotoInput from "./PhotoInput";
import DropZone from "./DropZone";

const index = ({ files, setFile, userPhotoLink }) => {
  return (
    <div className="photo-input">
      Foto
      <div className="photo-input__component">
        <PhotoInput userPhotoLink={userPhotoLink} files={files} />
        <DropZone setFile={setFile} />
      </div>
    </div>
  );
};

export default index;
