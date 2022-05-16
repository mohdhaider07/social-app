import { useContext } from "react";
import { Avatar } from "antd";
import renderHTML from 'react-render-html';
import moment from "moment";
import { HeartOutlined, HeartFilled, CommentOutlined, EditOutlined, DeleteOutlined, LoadingOutlined,UserOutlined } from "@ant-design/icons"
import UserRoute from "../routes/UserRoute";
import { UserContext } from "../../context";
import { useRouter } from "next/router";

import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
const PublicPost = ({ posts, handleDelete, deleteLoading, handleLike, handleUnlike, handleComment }) => {
    const [state] = useContext(UserContext);
    const router = useRouter();
    return (
        <>
            {posts && posts.map((post) =>
                <div key={post._id} className=" mb-4 max-w-sm w-full  ">
                    <div className="relative h-48 lg:h-auto  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >

                        {post.image && post.image.url ? (<img src={post.image.url} alt="woman holding mug" />) : (<img src="../images/parrot.jpg" alt="Avatar of Jonathan Reinink" />)}
                    </div>
                    <div className="border-r border-b border-l border-gray-400  bg-white rounded-b  p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-4 text-gray-700 text-base">
                            {renderHTML(post.content)}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                               {post.postedBy.image&&post.postedBy.image.url?(<Avatar src={post.postedBy.image.url} className="w-10 h-10  mr-4"></Avatar>):(<Avatar className="w-10 h-10  mr-4">{post.postedBy.name[0]}</Avatar>)}
                                <div className="text-sm">
                                    <Link href={`/user/${post.postedBy._id}`}>
                                    <a className="text-gray-900 leading-none">{post.postedBy.name}</a>

                                    </Link>
                                    <p className="text-gray-600">{moment(post.createdAt).fromNow()}</p>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                
                                {state && state.user && post && post.likes && post.likes.includes(state.user._id) ? (<div className="flex items-center" ><HeartFilled  className="text-red-500 p-1" />{post.likes.length} Likes</div>) :
                                    (<div className="flex items-center" ><HeartOutlined  className="text-red-500 p-1" />{post.likes.length} Likes</div>)}
                                <div className="flex items-center " ><CommentOutlined  className=" text-red-500 p-1" />{post.comments.length}  Comments</div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            )}
        </>);
}
export default PublicPost;