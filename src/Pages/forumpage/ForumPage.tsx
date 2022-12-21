import React from "react";
import styles from "./ForumPage.module.css";
import QuestionPage from "../question/QuestionPage";

const ForumPage: React.FC = () => {
  return (
    <div className={styles.forumPage_container}>
      {/*<h1>ForumPage</h1>*/}
      <QuestionPage />
    </div>
  );
};

export default ForumPage;
