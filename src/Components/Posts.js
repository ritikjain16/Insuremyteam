import React, { useEffect, useRef, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Post from "./Post";
import Loading from "./Loading";
import Navbar from "./Navbar";
const Posts = () => {
  const [posts, setposts] = useState([]);
  const [page, setPage] = useState(1);
  const [currentSearch, setcurrentSearch] = useState("");
  const [filterallposts, setfilterallposts] = useState([]);
  const mysearch = useRef(null);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const getPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setposts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
    setfilterallposts(
      posts.filter((search) => {
        return search.title.toLowerCase().includes(currentSearch.toLowerCase());
      })
    );
  }, [currentSearch, posts]);

  return (
    <div className="flexc">
      {/* Search Box */}

      <Navbar
        mysearch={mysearch}
        currentSearch={currentSearch}
        setcurrentSearch={setcurrentSearch}
      />

      {/* Posts */}
      {posts.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="allposts">
            {filterallposts
              .slice(page - 1 + "0", page + "0")
              .map((item, index) => (
                <Post item={item} key={item.id} />
              ))}
          </div>
          {/* // Pagination */}
          <div className="flex page">
            <Stack spacing={2}>
              <Pagination
                count={posts.length / 10}
                onChange={handleChange}
                variant="outlined"
              />
            </Stack>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
