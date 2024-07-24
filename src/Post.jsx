import "./Post.css";
import Propic from "./Propic";
// import Comments from "./Comments";
import AddComment from "./AddComment";
import Comments from "./Comments";

export default function Post({ posterName, postTitle, postText, comments }) {
  const colors = ["#5ABEDC", "#46DCD2", "#A0E6AA", "#46C8FA", "#82E6E6"];

  let initialOne = posterName.charAt(0);
  let initialTwo = posterName.charAt(posterName.search(" ") + 1);
  let initials = initialOne.concat(initialTwo);
  return (
    <div className="post">
      <Propic
        initials={initials}
        bgColor={colors[Math.floor(Math.random() * 5)]}
      />
      <div className="name-and-title">
        <h3>{posterName}</h3>
        <h4>{postTitle}</h4>
      </div>
      <div className="post-text">
        <p>{postText}</p>
      </div>
      {comments ? <Comments comments={comments} /> : ""}
      <AddComment />
    </div>
  );
}
