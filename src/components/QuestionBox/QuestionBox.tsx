import { useState } from "react";
import style from "./QuestionBox.module.scss";
import "./QuestionBox.module.scss";
import { questions as QuestionType } from "./QuestionBox.types";

const Questions: Array<QuestionType> = [
  {
    question: "Which one is not a Javscript variable?",
    options: [
      { value: "var a=5", isCorrect: false },
      { value: "let a=6", isCorrect: false },
      { value: "const a=9", isCorrect: false },
      { value: "int a=5", isCorrect: true },
    ],
  },
];

const QuestionBox = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h2>Questions</h2>
      <span>Read the question and choose the most correct option.</span>

      {Questions ? (
        <div>
          <h4 className={style["question-title"]}>
            {` ${count + 1}. ${Questions[count].question}`}
          </h4>

          {Questions[count].options.map((item) => (
            <p key={item.value}>{item.value}</p>
          ))}
        </div>
      ) : (
        <h3>No Questions available</h3>
      )}
    </main>
  );
};

export default QuestionBox;
