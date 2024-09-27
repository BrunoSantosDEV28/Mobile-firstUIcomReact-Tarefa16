import React from "react";

const UserComments = ({ comments }) => {
  return (
    <div style={commentsStyle}>
      <h2>Comentários dos Usuários</h2>
      {comments.map((comment, index) => (
        <div key={index} style={commentStyle}>
          <p>
            <strong>{comment.user}</strong> (Data:{" "}
            {new Date(comment.date).toLocaleDateString()})
          </p>
          <p>{comment.message}</p>
          <h4>Nota: {comment.rating}/5</h4>
        </div>
      ))}
    </div>
  );
};

const commentsStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  marginTop: "20px",
};

const commentStyle = {
  borderBottom: "1px solid #eee",
  paddingBottom: "10px",
  marginBottom: "10px",
};

export default UserComments;
