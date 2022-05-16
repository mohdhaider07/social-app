import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import PostForm from "../../components/forms/PostForm";
import UserRoute from "../../components/routes/UserRoute";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import PostList from '../../components/cards/PostList';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Modal, Pagination } from 'antd';
import People from "../../components/cards/people";
import FollowingPeople from "../../components/cards/followingPeople";
import FollowerPeople from "../../components/cards/followerPeople";
import CommentForm from "../../components/forms/CommentForm";
import AllComments from "../../components/cards/allComments";
import Search from "../../components/search";
import io from "socket.io-client";

const socket = io("http://localhost:8000", {
    reconnection: true,
});
// this page user can render if user is logedin

const DashBoard = () => {
    const [state, setState] = useContext(UserContext);

    // state
    const [content, setContent] = useState();
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    //posts
    const [posts, setPosts] = useState([]);
    const [people, setpeople] = useState([]);
    const [followingPeople, setFollowingPeople] = useState([]);
    const [followerPeople, setFollowerPeople] = useState([]);
    // comments
    const [comment, setComment] = useState("");
    const [visible, setVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    //pagination
    const [totalPosts, setTotalPosts] = useState(0);
    const [page, setPage] = useState(1);
    // router
    const router = useRouter();


    // console.log(state);
    useEffect(() => {
        if (state && state.token) {
            newsFeed();
            fetchFindPeople();
            fetchFollowingPeople();
            fetchFollowerPeople();
        }
    }, [state && state.token && page])

    useEffect(() => {
        try {
            axios.get("http://localhost:8000/api/total-post").then(({ data }) => setTotalPosts(data));
        } catch (err) {
            console.log(err)
        }
    }, [])

    const newsFeed = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/news-feed/${page}`);
            // console.log("users posts",data);
            // console.log(data);
            setPosts(data);
        } catch (err) {
            console.log(err)
        }
    }

    const fetchFindPeople = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/find-people");
            // console.log(data);

            { data && setpeople(data) }

        } catch (err) {
            console.log(err)
        }
    }

    const handlePost = async (e) => {
        e.preventDefault();
        // console.log("post submited",content)
        try {

            const { data } = await axios.post("http://localhost:8000/api/create-post", { content, image })

            // console.log("post craeted response=>",data);

            if (data.error) {
                toast.error(data.error)
            } else {

                toast.success("Poast created");
                setContent("");
                setImage({});
                setPage(1);
                newsFeed();
                // socket
                socket.emit("new-post", data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleImage = async (e) => {
        // console.log("form submites")
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);

        // console.log("images=====>",[...formData]);
        try {
            setUploading(true);
            const { data } = await axios.post("http://localhost:8000/api/upload-image", formData);
            // console.log("server side data",data);
            setImage({
                url: data.url,
                public_id: data.public_id,
            });
            setUploading(false);
        } catch (err) {
            setUploading(false);
            console.log(err);
        }
    }

    //************** Deleting the Post */

    const handleDelete = async (_id) => {
        // console.log("delete this post", _id);
        try {
            setDeleteLoading(true);
            const ans = window.confirm("Are you Sure you Want to Delete")
            if (!ans) return;
            const { data } = await axios.delete(`http://localhost:8000/api/delete-post/${_id}`)
            //    console.log(data);
            if (data.ok) {
                toast.error("Post Deleted");
                setDeleteLoading(false);
                newsFeed();
            }
        } catch (err) {
            setDeleteLoading(false);
            console.log(err)
        }
    }

    const handleFollow = async (user) => {
        // console.log("follow this user=>",user);
        try {
            const { data } = await axios.put("http://localhost:8000/api/user-follow", { _id: user._id });
            // console.log("follow response", data);
            let auth = JSON.parse(localStorage.getItem("auth"));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            // update context
            setState({ ...state, user: data });
            // people
            let filterdPeople = people.filter((p) => p._id !== user._id);
            // console.log("filter people", filterdPeople)
            setpeople(filterdPeople);
            fetchFollowingPeople();

            // render post of Followed people
            newsFeed();
            toast.success(`you started following ${user.name}`)

        } catch (err) {
            console.log(err)
        }
    }

    // following 
    const fetchFollowingPeople = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/following-people");
            // console.log(data);

            { data && setFollowingPeople(data) }

        } catch (err) {
            console.log(err)
        }
    }

    const handleUnfollow = async (user) => {
        // console.log("unfollow this user",user);
        try {
            const { data } = await axios.put("http://localhost:8000/api/user-unfollow", { _id: user._id });
            // console.log("follow response", data);
            let auth = JSON.parse(localStorage.getItem("auth"));
            auth.user = data;
            localStorage.setItem("auth", JSON.stringify(auth));
            // update context
            setState({ ...state, user: data });
            // people
            let filterdFollowing = followingPeople.filter((p) => p._id !== user._id);
            // console.log("filter people", filterdPeople)
            setFollowingPeople(filterdFollowing);
            fetchFindPeople();

            // render post of Followed people
            newsFeed();
            toast.error(`Unfollowed ${user.name}`)

        } catch (err) {
            console.log(err)
        }
    }

    const fetchFollowerPeople = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/follower-people");
            // console.log(data);

            { data && setFollowerPeople(data) }
        } catch (err) {
            console.log(err)
        }
    }

    // Like and comment
    const handleLike = async (_id) => {
        try {
            const { data } = await axios.put("http://localhost:8000/api/like-post", { _id });
            // console.log("liked",data);
            newsFeed();
        } catch (err) {

        }
    }

    const handleUnlike = async (_id) => {
        try {
            const { data } = await axios.put("http://localhost:8000/api/unlike-post", { _id });
            // console.log("unliked",data);
            newsFeed();
        } catch (err) {

        }
    }
    // comment

    const handleComment = (post) => {
        setCurrentPost(post);
        setVisible(true);
    }

    const addComment = async (e) => {
        e.preventDefault();
        // console.log("comment",comment);
        // console.log("current post",currentPost);
        try {
            const { data } = await axios.put("http://localhost:8000/api/add-comment", {
                postId: currentPost._id,
                comment,
            });
            // console.log("add comment",data);
            setComment("");
            setVisible(false);
            newsFeed();
        } catch (err) {
            console.log(err)
        }
    }
    const removeComment = async (postId, comment) => {
        let ans = window.confirm("Do you want to delete this comment?")
        if (!ans) return
        try {
            const { data } = await axios.put("http://localhost:8000/api/remove-comment", {
                postId,
                comment,
            });
            // console.log("removed comment", data);
            setVisible(false);
            newsFeed();
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <UserRoute>
                <div className="flex justify-center items-center h-48 bg-parrot-img">
                    <div className="">
                        <h1 className="font-bold text-black text-4xl ">Dash Board</h1>
                    </div>
                </div>

                <div className="md:flex self-start  m-2">
                    <div className="md:grow  ">

                        <div>
                            <PostForm
                                handleImage={handleImage}
                                handlePost={handlePost}

                                content={content}
                                setContent={setContent}
                                uploading={uploading}
                                image={image}
                            />
                            <br />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-col  justify-center" >

                                <PostList
                                    posts={posts}
                                    handleDelete={handleDelete}
                                    deleteLoading={deleteLoading}
                                    //like
                                    handleLike={handleLike}
                                    handleUnlike={handleUnlike}
                                    //comment 

                                    handleComment={handleComment}


                                />
                                <br />
                                <Pagination
                                    current={page}
                                    total={(totalPosts / 2) * 10}
                                    onChange={(value) => setPage(value)}
                                />
                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col  md:w-1/3 my-2 self-start ">
                        <br />
                        <Search
                            handleFollow={handleFollow}
                            handleUnfollow={handleUnfollow} />
                        <br />
                        <FollowingPeople
                            people={followingPeople}
                            handleUnfollow={handleUnfollow}
                        />
                        <FollowerPeople
                            people={followerPeople}
                            handleFollow={handleFollow}
                            handleUnfollow={handleUnfollow}
                        />
                        <People
                            people={people}
                            handleFollow={handleFollow}
                        />
                    </div>

                </div>
                <Modal
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    title="Comment"
                    footer={null}
                >
                    <AllComments
                        currentPost={currentPost}
                        removeComment={removeComment}
                    />
                    <CommentForm
                        comment={comment}
                        setComment={setComment}
                        addComment={addComment}
                    />


                </Modal>

            </UserRoute>
        </>
    )
}
export default DashBoard;