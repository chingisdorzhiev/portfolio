import { useState } from "react";
import styles from "./ToggleStyles.module.css";
import darkImg from "././../../../Images/Icons/dark-mode.png";
import lightImg from "././../../../Images/Icons/light-mode.png";

const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className={styles.toggle}>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span>
        <img src={lightImg} alt="" />
        <img src={darkImg} alt="" />
      </span>
      {/* <strong>{label}</strong> */}
    </label>
  );
};

export default Toggle;
