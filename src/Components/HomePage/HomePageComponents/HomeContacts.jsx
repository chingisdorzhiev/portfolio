import React from "react";
import styles from "./HomeContactsStyles.module.css";
import MessageForm from "../../Minors/MessageForm/MessageForm";

function HomeContacts(props) {
  const darkStyles = props.darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={styles.undercover}>
      <div className={`${styles.homeContacts} ${darkStyles}`}>
        <div className={`${styles.contactBlock} ${styles.contactInfo}`}>
          <h1>CONTACT</h1>
          <h3>Got a problem to solve?</h3>
          <p>
            Get your space suit ready and tell me your ideas to develop your
            dream website. To contact me, you can use the form or email the
            address below:
          </p>
          <p className={styles.email}>dorzhievchingis@gmail.com</p>
        </div>
        <div className={styles.contactBlock}>
          <MessageForm btncolor="yellow" darkTheme={props.darkTheme} />
        </div>
      </div>
    </div>
  );
}

export default HomeContacts;
