import { QuestionItem } from "@/entities/question";
import { loadQuestions } from "@/entities/question/model/questionThunk";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { useEffect } from "react";

export function QuestionsList() {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state) => state.questions);

  useEffect(() => {
    dispatch(loadQuestions());
  }, []);

  return (
    <>
      {questions.length > 0 ? (
        questions.map((question) => {
          return <QuestionItem key={question.id} question={question} />;
        })
      ) : (
        <h2>No data</h2>
      )}
    </>
  );
}
