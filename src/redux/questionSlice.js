import { createSlice, nanoid } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    question: "What is your name ?",
    answer: ["Edgar", "Jhone", "Nik"],
  },
  {
    id: nanoid(),
    question: "loram loram loram loram ???",
    answer: ["Jane", "Smit", "Helen"],
  },
];

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const newQuestion = {
        id: nanoid(),
        question: action.payload,
        answer: [],
      };
      state.push(newQuestion);
    },
    deleteQuestion: (state, action) => {
      const newQuestion = state.filter((item) => item.id !== action.payload);

      return newQuestion;
    },
    addAnswer: (state, action) => {
      const { id, text } = action.payload;

      const carrentQuestionIndx = current(state).findIndex(
        (question) => question.id === id
      );

      const carrentQuestion = current(state)[carrentQuestionIndx];

      const carrentQuestionAnswer = carrentQuestion.answer;

      const newText = [...carrentQuestionAnswer, text];

      const newAnswer = {
        ...carrentQuestion,
        answer: newText,
      };

      const changeState = current(state).filter(
        (item, index) => carrentQuestionIndx !== index
      );
      changeState.splice(carrentQuestionIndx, 0, newAnswer);
      const newState = [...changeState];

      return newState;
    },
  },
});

export const { addQuestion, deleteQuestion, addAnswer } = questionSlice.actions;

export default questionSlice.reducer;
