import "./Comments.css";
import { useEffect, useState } from "react";

import Comment from "./Comment";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/AtikoSpeed/post/${postId}/comment`
    )
      .then((response) => response.json())
      .then(setComments);
  }, [postId]);

  console.log(comments);

  if (comments.length > 1) {
    return (
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              commentText={comment.content}
              commenterId={comment.contactId}
            />
          );
        })}
      </div>
    );
  }
}
