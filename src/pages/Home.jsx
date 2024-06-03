import { useEffect, useState } from "react";
import { postEndpoints } from "../services/apis";
import Post from "../components/Common/Post";

const {
  GET_POST
} = postEndpoints

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(GET_POST);
    const result = await response.json();
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="text-richblack-5 flex w-full h-full justify-center">
      <div className="flex flex-col w-3/4 items-center pt-6">
        <h1 className="text-6xl pb-4">Posts</h1>
        <p>
          <ul>
            {data.map(post => (
              <li key={post._id}>
                <Post title={post.title} body={post.body} />
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Home
