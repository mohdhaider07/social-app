import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import PublicPost from "../components/cards/publicPost";
import Head from "next/head";
import io from "socket.io-client";

const socket = io("http://localhost:8000",{path:"/socket.io"}, {
  reconnection: true,
});

const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);
  const [newsFeed, setNewsFeed] = useState([]);
  useEffect(() => {
    // console.log("SOCKET ON JOIN",socket);
    socket.on("receive-post", (newPost) => {
      // alert(newPost.postedBy.name);
      setNewsFeed([newPost, ...posts])
    });
  }, [])

  const head = () => {
    <Head>
      <title>Social haider123 Network</title>
      <meta
        name="description"
        content="A social network for developer"
      />
      <meta
        property="og:description"
        content="A social network for developer"
      />
      <meta property="og:tye" content="website" />
      <meta property="og:site_name" content="merncamp" />
      <meta property="og:url" content="http://merncamp.com" />
      <meta property="og:image:secure_url" content="http://merncamp.com/images/parrot.jpg" />

    </Head>
  }
  const collections = newsFeed.length > 0 ? newsFeed : posts
  return (
    <>
      {head()}
      <div className="text-center">
      <div className="flex justify-center items-center h-48 bg-parrot-img">
                    <div className="">
                        <h1 className="font-bold text-black text-4xl ">Public Post</h1>
                    </div>
                </div>
        <br />
        <div className="flex justify-center">
        <div className=" mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PublicPost
            posts={collections}
          />
        </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { data } = await axios.get('http://localhost:8000/api/posts')
  // console.log(data);
  return {
    props: { posts: data, }, // will be passed to the page component as props
  }
}
export default Home;