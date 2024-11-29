import React, { useState } from "react";
import "./QuestionUpdate.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { userPointsUpdate } from "@/entities/user/model/userThunk";


export function QuestionUpdate() {
  const dispatch = useAppDispatch()
  const { questions } = useAppSelector((state) => state.questions)
  const { user } = useAppSelector((state) => state.user)
  
  const { id } = useParams()
  const navigate = useNavigate()

  const question = questions.find((el) => el.id === Number(id))
  const [answer, setAnswer] = useState<string>(question?.answer || '');

  const handleAnswer = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!question || !user) {
        return
      }
      if (answer === question.answer) {
        dispatch(userPointsUpdate({id: user.id, points: question.price}))
        navigate('/questions')
        return
      }
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <section>
      <div className="question-update-item">
        <form onSubmit={handleAnswer}>
          <p>{question?.description}</p>
          <p>Ответ: </p>
          <input
            type="text"
            onChange={({ target }) => setAnswer(target.value)}
            required
            placeholder="Question title"
          />
          <button>Answer</button>
        </form>
      </div>
    </section>
  );
}
