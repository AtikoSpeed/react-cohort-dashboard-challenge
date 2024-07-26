import "./Posts.css";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/AtikoSpeed/post")
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            posterId={post.contactId}
            postTitle={post.title}
            postText={post.content}
            postId={post.id}
          />
        );
      })}
    </div>
  );
}
