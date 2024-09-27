import React from "react";

const UserQuestions = ({ questions }) => {
  return (
    <div style={questionsStyle}>
      <h2>Perguntas dos Usuários</h2>
      {questions.map((question, index) => (
        <div key={index} style={questionStyle}>
          <p>
            <strong>{question.user}</strong> (Data:{" "}
            {new Date(question.date).toLocaleDateString()})
          </p>
          <p>Pergunta: {question.question}</p>
          <p>Resposta: {question.answer}</p>
        </div>
      ))}
    </div>
  );
};

const questionsStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  marginTop: "20px",
};

const questionStyle = {
  borderBottom: "1px solid #eee",
  paddingBottom: "10px",
  marginBottom: "10px",
};

export default UserQuestions;
