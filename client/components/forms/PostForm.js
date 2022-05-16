import { CameraTwoTone ,LoadingOutlined} from '@ant-design/icons'
import {Avatar} from 'antd';

import dynamic from "next/dynamic";

const ReactQuill = dynamic(()=>import('react-quill'),{ssr:false});

import 'react-quill/dist/quill.snow.css';

const PostForm = (props) => {
    const{handlePost, content, setContent,handleImage,uploading,image}=props
//    {image&&console.log(image.url)}
    return (

        <>
            <form className="" onSubmit={handlePost}>
                <div className="mx-2  mt-2">
                    <ReactQuill theme="snow" value={content??""} onChange={(e)=>setContent(e)} className=" w-full"/>
                </div>

                <div className=" flex justify-between items-center m-2 ">
                <button disabled={!content} className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg   p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">POST</button>
                <label >
               {image && image.url ? (<Avatar style={{cursor: "pointer"}} shape="square" size="large" src={image.url} />) : (uploading?<LoadingOutlined className="  text-red-500 " />:<CameraTwoTone style={{cursor: "pointer"}} className="  text-red-500 "/>)}
                    <input onChange={handleImage} type="file" accept="images/*" hidden />
                </label>
                </div>
            </form>

        </>

    )
}

export default PostForm;