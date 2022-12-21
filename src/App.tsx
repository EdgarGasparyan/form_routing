import "./App.css";
import Navbar from "../src/Pages/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homepage/HomePage";
import ForumPage from "./Pages/forumpage/ForumPage";
import AnswerPage from "./Pages/answer/AnswerPage";

const App: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forumPage" element={<ForumPage />} />
        <Route path="/forumPage/:id" element={<AnswerPage />} />
      </Routes>
    </>
  );
};

export default App;
