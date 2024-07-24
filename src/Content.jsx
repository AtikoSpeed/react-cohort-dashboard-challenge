import "./Content.css";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Content() {
  return (
    <main>
      <CreatePost />
      <Post
        posterName={"Sam Fletcher"}
        postTitle={
          "Ea molestias quasi exercitationem repellat qui ipsa sit aut"
        }
        postText={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur sapiente dicta quo consectetur atque, architecto id debitis delectus excepturi ullam deleniti cupiditate consequuntur laudantium doloremque? Quaerat voluptatem facilis iusto!"
        }
      />
      <Post
        posterName={"Dolor Lobortis"}
        postTitle={"Eum et est occaecati"}
        postText={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque modi omnis unde repellendus! Blanditiis?"
        }
        comments={["hi", "bye"]}
      />
    </main>
  );
}
