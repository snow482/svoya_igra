import React, { useState } from "react";
import "./QuestionUpdate.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { updateQuestion } from "@/entities/question/model/questionThunk";

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
      if (!question) {
        return
      }
      if (answer === question.answer) {
        dispatch(updateUser(user.id));
        return
      }
    
      
      navigate('/questions')
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <section>
      <div className="question-update-item">
        <form onSubmit={handleAnswer}>
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
