import { useCallback, useEffect, useState } from "react";
import style from "./QuestionBox.module.scss";
import "./QuestionBox.module.scss";
import {
  questions as QuestionType,
  option as OptionType,
} from "./QuestionBox.types";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

let Questions: Array<QuestionType> = [
  {
    question: "Which one is not a Javascript variable?",
    options: [
      { value: "var a=5", isCorrect: false, isSelected: false },
      { value: "let a=6", isCorrect: false, isSelected: false },
      { value: "const a=9", isCorrect: false, isSelected: false },
      { value: "int a=5", isCorrect: true, isSelected: false },
    ],
  },
  {
    question: "Nigeria is in what continent?",
    options: [
      { value: "Malaysia", isCorrect: false, isSelected: false },
      { value: "North Africa", isCorrect: false, isSelected: false },
      { value: "Africa", isCorrect: true, isSelected: false },
      { value: "Europe", isCorrect: false, isSelected: false },
    ],
  },
  {
    question: "In computing, ML stands for what?",
    options: [
      { value: "Machine Learner", isCorrect: false, isSelected: false },
      { value: "Mother Land", isCorrect: false, isSelected: false },
      { value: "Machine Learning", isCorrect: true, isSelected: false },
      { value: "Motherboard Link", isCorrect: false, isSelected: false },
    ],
  },
  {
    question: "UIUX designers uses which of these tools for design purposes?",
    options: [
      { value: "Powerpoint", isCorrect: false, isSelected: false },
      { value: "Figma", isCorrect: true, isSelected: false },
      { value: "Medito", isCorrect: false, isSelected: false },
      { value: "Zoom app", isCorrect: false, isSelected: false },
    ],
  },
];

//mark selected option
//collect users selected option
//make next button clickable
//check if selectd option is correct
//increase and record score accordingly
//display grand score in the end

const QuestionBox = () => {
  const [allQuestions, setAllQuestions] = useState(Questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [selected, setSelected] = useState<OptionType>({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // const PickAnswer = (data: OptionType, index: number) => {
  //   if (data.isCorrect) {
  //     setScore(score + 1);
  //     allQuestions[currentQuestion].options.map((prop, i) => {
  //       if (index === i) {
  //         prop.isSelected = true;
  //       } else {
  //         prop.isSelected = false;
  //       }
  //     });
  //     // console.log(allQuestions[currentQuestion]);
  //     allQuestions.splice(currentQuestion, 1, allQuestions[currentQuestion]);
  //     setAllQuestions(allQuestions);
  //     console.log("all", allQuestions);

  //     // return alert("Correct answer");
  //   } else {
  //     return;
  //   }
  // };

  const PickAnswer = (data: OptionType, index: number) => {
    if (data.isCorrect) {
      console.log("Initial", score);

      return setScore(score + 1);

      // return alert("Correct answer");
    } else {
      console.log("wrong answer", score);

      // return alert("wrong answer");
    }
  };

  const GoToPrevQuestion = useCallback(() => {
    if (currentQuestion === 0) {
      return setCurrentQuestion(0);
    } else {
      let prevQuestion = currentQuestion - 1;
      return setCurrentQuestion(prevQuestion);
    }
  }, [currentQuestion]);

  const GoToNextQuestion = useCallback(() => {
    if (currentQuestion === Questions.length - 1) {
      alert("YOu've reached the end of the questions");

      return setShowScore(true);
    } else {
      let nextQuestion = currentQuestion + 1;
      return setCurrentQuestion(nextQuestion);
    }
  }, [currentQuestion]);

  // useEffect(() => {
  //   return console.log(allQuestions);
  // }, []);
  return (
    <main>
      {showScore ? (
        <h1>
          You scored {score} out of {Questions.length}
        </h1>
      ) : (
        <>
          <div className={style["inner-box"]}>
            <h2>Questions</h2>
            <span>Read the question and choose the most correct option.</span>

            {Questions ? (
              <div>
                <h4 className={style["question-title"]}>
                  {` ${currentQuestion + 1}. ${
                    Questions[currentQuestion].question
                  }`}
                </h4>
                {/* {Questions[currentQuestion].options.map((item, index) =>
                  item.isSelected ? (
                    <div
                      key={item.value}
                      className={style["option"]}
                      onClick={() => PickAnswer(item, index)}
                    >
                      <FaCheckCircle
                        // color="#f0f2f7"
                        color="green"
                        size="25px"
                        stroke="0"
                        style={{
                          // backgroundColor: "green",
                          borderRadius: "100%",
                          marginRight: 15,
                        }}
                      />
                      {/* <input
                    type="radio"
                    id={item.value}
                    style={{
                      marginRight: "15px",
                      border: "1px solid #f0f2f7",
                    }}
                  />

                  <label htmlFor={item.value}>{item.value}</label> }
                      <span>{item.value}</span>
                    </div>
                  ) : (
                    <div
                      key={item.value}
                      className={style["option"]}
                      onClick={() => PickAnswer(item, index)}
                    >
                      <FiCircle
                        color="#f0f2f7"
                        size="25px"
                        stroke="0"
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "100%",
                          marginRight: 15,
                        }}
                      />

                      <span>{item.value}</span>
                    </div>
                  )
                )} */}

                {Questions[currentQuestion].options.map((item, index) => (
                  <div key={item.value} className={style["option"]}>
                    <input
                      type="radio"
                      id={item.value}
                      style={{
                        marginRight: "15px",
                        border: "1px solid #f0f2f7",
                      }}
                      onClick={() => PickAnswer(item, index)}
                    />

                    <label htmlFor={item.value}>{item.value}</label>
                  </div>
                ))}
              </div>
            ) : (
              <h3>No Questions available</h3>
            )}
          </div>
          <div className={style["btn-hold"]}>
            <Button bg="red" disable={false} onClick={GoToPrevQuestion}>
              <MdKeyboardArrowLeft size="25px" />
              Prev
            </Button>

            {currentQuestion === Questions.length - 1 ? (
              <Button bg="limegreen" disable={false} onClick={GoToNextQuestion}>
                Finish
                <MdKeyboardArrowRight size="25px" />
              </Button>
            ) : (
              <Button bg="limegreen" disable={false} onClick={GoToNextQuestion}>
                Next
                <MdKeyboardArrowRight size="25px" />
              </Button>
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default QuestionBox;
