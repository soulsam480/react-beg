import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

interface Post {
  title?: string;
  body?: string;
  userId?: number;
  id?: number;
}
const Home: React.FC<Props> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const main = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());
      setPosts(data);
    };
    main();
  });
  return (
    <div>
      {posts.map((el, index) => {
        return (
          <div key={index}>
            <Link to={{ pathname: `/post/${el.id}` }}>
              <h4>
                {" "}
                {el.title} <span>// {el.id} //</span>{" "}
              </h4>
            </Link>
            <p> {el.body} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
