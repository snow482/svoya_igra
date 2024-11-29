import { Question } from "../../model";
// import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { Link } from "react-router-dom";

export function QuestionItem({ quetion }: { quetion: Question }) {
  return (
    <>
      Вопрос на {quetion.price}(
      <Link to={`/questions/${quetion.id}`}>Перейти к вопросу</Link>)
    </>
  );
}
