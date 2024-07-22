import MainPropic from "./MainPropic";
import "./CreatePost.css";

export default function CreatePost() {
  return (
    <div className="post-box">
      <MainPropic />
      <input type="text" placeholder="What's on your mind?" />
      <button>Post</button>
    </div>
  );
}
