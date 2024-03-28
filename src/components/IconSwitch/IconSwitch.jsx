import styles from "./IconSwitch.module.css";
export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div onClick={onSwitch} className={`material-icons ${styles.icon}`}>
      {`view_${icon}`}
    </div>
  );
};
