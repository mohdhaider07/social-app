import { useContext } from "react";
import { Avatar } from "antd";
import renderHTML from 'react-render-html';
import moment from "moment";
import { HeartOutlined, HeartFilled, CommentOutlined, EditOutlined, DeleteOutlined, LoadingOutlined,UserOutlined } from "@ant-design/icons"
import UserRoute from "../routes/UserRoute";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
const PostList = ({ posts, handleDelete, deleteLoading, handleLike, handleUnlike, handleComment }) => {
    const [state] = useContext(UserContext);
    const router = useRouter();





    return (
        <>
            {posts && posts.map((post) =>
                <div key={post._id} className=" mb-4 max-w-sm w-full  ">
                    <div className="relative h-48 lg:h-auto  flex-none bg-cover rounded-t text-center overflow-hidden" >

                        {state && state.user && state.user._id === post.postedBy._id && (<div className="bg-white flex flex-col m-1 p-1 absolute right-0 rounded">
                            <EditOutlined onClick={() => router.push(`/user/post/${post._id}`)} className="  text-red-500 p-1" />
                            {deleteLoading ? (<LoadingOutlined className="  text-red-500  p-1 " />) : (<DeleteOutlined onClick={() => handleDelete(post._id)} className="  text-red-500  p-1" />)}
                        </div>
                        )}

                        {post.image && post.image.url ? (<img src={post.image.url} alt="woman holding mug" />) : (<img src="../images/parrot.jpg" alt="Avatar of Jonathan Reinink" />)}
                    </div>
                    <div className="border-r border-b border-l border-gray-400  bg-white rounded-b  p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8 text-gray-700 text-base">
                            {renderHTML(post.content)}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            <Link href={`/user/${post.postedBy._id}`}>
                            {post && post.postedBy && post.postedBy.image&&post.postedBy.image.url?(<Avatar className="mr-2" src={post.postedBy.image.url}/>):(<Avatar className="mr-2" icon={<UserOutlined /> }/>)}
                            </Link>
                                <div className="text-sm">
                                <Link href={`/user/${post.postedBy._id}`}>
                                    <p className="text-gray-900 leading-none">{post.postedBy.name}</p>
                                    </Link>
                                    <p className="text-gray-600">{moment(post.createdAt).fromNow()}</p>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                
                                {state && state.user && post && post.likes && post.likes.includes(state.user._id) ? (<div className="flex items-center" ><HeartFilled onClick={() => handleUnlike(post._id)} style={{ cursor: "pointer" }} className="text-red-500 p-1" />{post.likes.length} Likes</div>) :
                                    (<div className="flex items-center" ><HeartOutlined onClick={() => handleLike(post._id)} style={{ cursor: "pointer" }} className="text-red-500 p-1" />{post.likes.length} Likes</div>)}
                                <div onClick={() => handleComment(post)} style={{ cursor: "pointer" }} className="flex items-center " ><CommentOutlined  className=" text-red-500 p-1" />{post.comments.length}  Comments</div>
                            </div>
                        </div>
                    </div>
                    {post&&post.comments && post.comments.length > 0 && (<div className=" bg-white rounded-lg shadow">
                        <ul  className="divide-y-2 divide-gray-100">
                        {post.comments.slice(0,2).map((c)=>(
                                <li key={c.created} className="p-3">
                                <div className="flex justify-between">
                                    <div>
                                    <Link href={`/user/${c.postedBy._id}`}>
                                    <span>
                                        <span className="mr-1">{c.postedBy.image&&c.postedBy.image.url?(<Avatar size={20} src={c.postedBy.image.url}/>):(<Avatar size={20} icon={<UserOutlined/>}/>)}</span>
                                     {c.postedBy.name}
                                        </span>
                                        </Link>
                                    <br/>
                                    <span >
                                        <i>{c.text}</i>
                                    </span>
                                    </div>
                                    <div >{moment(c.created).fromNow()}</div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>)}
                </div>
            )}
        </>);
}
export default PostList;