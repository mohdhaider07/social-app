import { useRouter } from "next/router";
import axios from 'axios'
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const UserProfile = () => {
    const [user, setUser] = useState();

    const router = useRouter();

    useEffect(() => {
        if (router.query._id) fetchUser();
    }, [router.query._id])

const fetchUser=async()=>{
    try{
        const{data}=await axios.get(`http://localhost:8000/api/user/${router.query._id}`);
        console.log("user data",data);
        setUser(data);
    }catch(err){
        console.log(err)
    }
}


    return (<>
        <div className="ml-auto mr-auto">
        <div>
            {user&& user.image ? (<Avatar src={user.image.url} />) : (<Avatar icon={<UserOutlined />} />)} {user&&user.name}
        </div>
        <div>
        {user&& user.username&&user.username}
        </div>
        <div>
        {user&& user.about&&user.about}
        </div>
        </div>
    </>)
}
export default UserProfile;