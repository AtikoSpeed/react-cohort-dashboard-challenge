import "./Post.css";
import Propic from "./Propic";
// import Comments from "./Comments";
import AddComment from "./AddComment";

export default function Post() {
  return (
    <div className="post">
      <Propic initials={"SF"} bgColor={"#5ABEDC"} />
      <div className="name-and-title">
        <h3>Sam Fletcher</h3>
        <h4>Ea molestias quasi exercitationem repellat qui ipsa sit aut</h4>
      </div>
      <div className="post-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          aspernatur sapiente dicta quo consectetur atque, architecto id debitis
          delectus excepturi ullam deleniti cupiditate consequuntur laudantium
          doloremque? Quaerat voluptatem facilis iusto!
        </p>
      </div>
      <AddComment />
    </div>
  );
}
