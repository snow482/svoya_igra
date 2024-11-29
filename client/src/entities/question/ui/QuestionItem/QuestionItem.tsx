import { Question } from "../../model";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/rtkHooks";
import "./Question.css";
import { QuestionUpdate } from "@/pages/QuestionUpdatePage/ui/QuestionUpdate";

export function QuestionItem({ quetion }: { quetion: Question }) {
  const { user } = useAppSelector((state) => state.user)

  return (
    <div>
      {user && 
        <Link to={`/questions/${quetion.id}`}>
          {quetion.price}
          <QuestionUpdate key={quetion.id} />
        </Link>
      }
    </div>
  );
}
