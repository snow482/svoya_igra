import { QuestionItem } from "@/entities/question";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { loadQuestions } from "@/entities/question/model/questionThunk";
import "./Question.css"

export function QuestionList() {
  const dispatch = useAppDispatch()
  const { questions } = useAppSelector((state) => state.questions)
  

  useEffect(() => {
    dispatch(loadQuestions());
  }, [dispatch]);

  return (
    <>
      <div className="questions">
      {questions.length > 0 ? (
       questions.map((question) => {

          const objQuestion = {
            id: question.id,
            category: question.Category.name,
            description: question.description,
            
          };

          return <QuestionItem key={question.id} question={objQuestion} />;
        })
      ) : (
        <h2>No data</h2>
      )}
      </div>
    </>
  );
}
