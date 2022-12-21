import React, { useState } from "react";
import styles from "./QuestionPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, deleteQuestion } from "../../redux/questionSlice";
import { Link } from "react-router-dom";

type RootState = {
  questions: IQuestion[];
};

interface IQuestion {
  id: string;
  question: string;
  answer: string[];
}

const QuestionPage: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const data = useSelector((state: RootState) => state.questions);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (value.length === 0) {
      alert("Please Enter your Question");
    } else {
      dispatch(addQuestion(value));
      setValue("");
    }
  };

  console.log(data);

  const handleTrash = (id: string) => {
    dispatch(deleteQuestion(id));
  };

  return (
    <>
      <div className={styles.question_container}>
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          placeholder="Add Question.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button onClick={onSubmit}>Sumbmit</button>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id} className={styles.questioncart}>
            <Link to={`/forumPage/${item.id}`}>
              <h2>{item.question}</h2>
            </Link>
            <button onClick={() => handleTrash(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionPage;
