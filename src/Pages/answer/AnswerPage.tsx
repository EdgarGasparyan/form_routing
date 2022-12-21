import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AnswerPage.module.css";
import { addAnswer } from "../../redux/questionSlice";

type RootState = {
  questions: IQuestion[];
};

interface IQuestion {
  id: string;
  question: string;
  answer: string[];
}

const AnswerPage: React.FC = () => {
  const [postsAnswer, setPostsAnswer] = useState<string[] | string>([]);
  const [question, setQuestion] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const data = useSelector((state: RootState) => state.questions);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const currentAnswers = data.filter((s) => s.id === id);
    setQuestion(currentAnswers[0].question);
    // console.log(currentAnswers[0].answer);
    if (currentAnswers.length) {
      setPostsAnswer(currentAnswers[0].answer);
    } else {
      setPostsAnswer("No Answers");
    }
  }, [data]);

  const onSubmit = () => {
    if (value.length === 0) {
      alert("Please Enter your Answer");
    } else {
      dispatch(addAnswer({ id: id, text: value }));
      setValue("");
    }
  };

  return (
    <>
      <div className={styles.answer_containner}>
        <div className={styles.answer_title}>
          <h1>{question}</h1>
        </div>
        <>
          {typeof postsAnswer == "string"
            ? { postsAnswer }
            : postsAnswer.map((item, index) => (
                <div key={index} className={styles.answerCart}>
                  {item}
                </div>
              ))}
        </>
        <div className={styles.answer_textbox}>
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Add Answer..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <button onClick={onSubmit}>Sumbmit</button>
        </div>
      </div>
    </>
  );
};

export default AnswerPage;
