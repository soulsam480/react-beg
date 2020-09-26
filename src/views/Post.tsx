import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{ _slug: string }> {}
interface PostData {
  title?: string;
  body?: string;
  userId?: number;
  id?: number;
}

const Post: React.FC<Props> = ({ match }) => {
  const [post, setPost] = useState<PostData>({});

  useEffect(() => {
    const abc = new AbortController();
    const signal = abc.signal;
    const addData = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${match.params._slug}`,
        { signal: signal }
      ).then((res) => res.json());
      setPost(data);
    };
    addData();

    return function cleanup() {
      abc.abort();
    };
  }, [match.params._slug]);

  return (
    <div>
      <h3> {post.id} </h3>
      <p> {post.body} </p>
    </div>
  );
};

export default Post;
