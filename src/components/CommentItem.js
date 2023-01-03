import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div>
      <div className="comment">
        <div className="content">
          <div className="header">{comment.snippet.topLevelComment.snippet.textOriginal}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
