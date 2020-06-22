import React from "react";
import { useDropzone } from "react-dropzone";

const DropeZone = ({ setFile }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      setFile(
        acceptedFile.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    multiple: false,
  });

  return (
    <div>
      <div
        className={
          "photo-input__dropzone " +
          (isDragActive && "photo-input__dropzone--isActive")
        }
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p style={{ color: "white" }}>
            Paleskitė foto
            <br />
            <i className="fas fa-upload fa-2x"></i>
          </p>
        ) : (
          <p style={{ color: "white" }}>
            Užvilkitė foto čia
            <br />
            <i className="fas fa-upload fa-2x"></i>
          </p>
        )}
      </div>
    </div>
  );
};

export default DropeZone;
