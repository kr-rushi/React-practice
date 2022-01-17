import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingHooks() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [buttonid, setButtonId] = useState(1);
  useEffect(() => {
    console.log("called");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonid]);
  const handleoutput = () => {
    setButtonId(id);
  };
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handleoutput}>
        change
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      {posts.title}
    </div>
  );
}

export default DataFetchingHooks;
