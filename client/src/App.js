import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios.get("http://ctfjmg01:4000/api/posts").then(res => {
        setPosts(res.data);
        //axios.get(`http://ctfjmg01:4000/api/posts/${id}/comments`).then(res => {
        //  setComments(res.data);
        // });
      });
    };
    getPosts();
  }, []);
  const addPost = (title, contents) => {
    const values = {
      title: title,
      contents: contents
    };
    axios.post("http://ctfjmg01:4000/api/posts", values);
  };
  const deletepost = id => {
    axios.delete(`http://ctfjmg01:4000/api/posts/${id}`).then(res => {
      axios.get("http://ctfjmg01:4000/api/posts").then(res => {
        setPosts(res.data);
      });
    });
  };
  const handleChange = () => {};
  return (
    <div className="App">
      <h1>Add Post:</h1>
      <div className="addPost">
        <p> Title: </p>
        <input
          type="text"
          id="posttitle"
          name="posttitle"
          onChange={() => handleChange()}
        ></input>
        <p> Contents: </p>
        <input
          type="text"
          id="postcontents"
          name="postcontents"
          onChange={() => handleChange()}
        ></input>
        <button onClick={() => addPost()}> Add </button>
      </div>
      <h1> Current Posts: </h1>
      <div className="postBox">
        {posts.map(post => (
          <div className="postCard" key={post.id}>
            <h3> {post.title} </h3> <p> {post.contents} </p>
            {comments.map(comment => (
              <div className="commentCard">
                <h3>Comment:</h3>
                <p>{comment.text}</p>
              </div>
            ))}
            <button onClick={() => deletepost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
