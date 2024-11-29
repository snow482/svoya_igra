import { Question } from "../../model";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/rtkHooks";
import "./Question.css";
import { QuestionUpdate } from "@/pages/QuestionUpdatePage/ui/QuestionUpdate";
import { useState } from "react";

export function QuestionItem({ question }: { question: Question }) {
  const { user } = useAppSelector((state) => state.user)
  const [show] = useState<boolean>(false);

  return (
    
    <div>
      {user && 
        <Link to={`/questions/${question.id}`}>
          <div>
            <div>
              {question.Category.name} <br />
            </div>
            {question.price} <br />
          </div>
          
          <>
          {show && <QuestionUpdate key={question.id} />}
          </>
        </Link>
      }
    </div>
  );
}
