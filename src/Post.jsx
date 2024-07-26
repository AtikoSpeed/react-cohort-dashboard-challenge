import { useContext } from "react";
import "./Post.css";
import Propic from "./Propic";
import AddComment from "./AddComment";
import Comments from "./Comments";
import { Context } from "./App";

export default function Post({ posterId, postTitle, postText, postId }) {
  const [currentUser, contacts] = useContext(Context);
  let currentContact = {};

  if (posterId == 0) {
    currentContact = currentUser;
  } else {
    currentContact = contacts.find((target) => target.id === posterId);
  }

  return (
    <div className="post">
      <Propic contact={currentContact} />
      <div className="name-and-title">
        <h3>
          {currentContact.firstName} {currentContact.lastName}
        </h3>
        <h4>{postTitle}</h4>
      </div>
      <div className="post-text">
        <p>{postText}</p>
      </div>
      <Comments postId={postId} />
      <AddComment />
    </div>
  );
}
