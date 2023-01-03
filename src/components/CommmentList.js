import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  if (!comments) {
    return <div>Loading..</div>;
  }
  const renderComments = comments.map(comment => {
    return (
      <CommentItem
        key={comment.id}
        comment={comment} />
    );
  });
  
  return <div className="ui relaxed divided list">{renderComments}</div>
};

export default CommentList;
