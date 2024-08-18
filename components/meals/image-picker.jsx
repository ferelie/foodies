import classes from "./image-picker.module.css";

export default function imagePicker({ label, name }) {
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
      </div>
    </>
  );
}
