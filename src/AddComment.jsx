import "./AddComment.css";
import MainPropic from "./MainPropic";

export default function AddComment() {
  return (
    <div className="add-comment">
      <MainPropic />
      <div className="comment-field">
        <input type="text" placeholder="Add a comment..." />
        <div className="comment-button-container">
          <img
            src="src/assets/send.svg"
            alt="Send"
            className="comment-button"
          />
        </div>
      </div>
    </div>
  );
}
