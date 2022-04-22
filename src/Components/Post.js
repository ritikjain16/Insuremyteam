import React from "react";

const Post = ({ item }) => {
  return (
    <div key={item.id} className="post-con">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Post;
