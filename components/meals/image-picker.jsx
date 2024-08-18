"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();
  const handlePicker = (event) => {
    imageInput.current.click();
  };

  const handleImagePicked = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    setPickedImage(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      setPickedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview} onClick={handlePicker}>
            {!pickedImage && <p>Click here to add an image</p>}
            {pickedImage && <Image src={pickedImage} alt="Picked image" fill />}
          </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg, image/jpg"
            ref={imageInput}
            onChange={handleImagePicked}
            required
          />
          
        </div>
      </div>
    </>
  );
}
