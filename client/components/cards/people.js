import { useState } from 'react';
import { Avatar ,List } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import Link from 'next/link';
const People = ({people,handleFollow}) => {
    const [showPeople,setShowPeople]=useState(false);
    return (
      <>
      <div className="my-1 mb-2 p-2 shadow-md "  style={{cursor: "pointer"}} onClick={()=>{
        setShowPeople(!showPeople)
        }}>People My You Know</div>
       {showPeople && <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Link href={`/user/${user._id}`}>
          <div className='items-center'>
             { user.image?(<Avatar src={user.image.url}/>):(<Avatar icon={<UserOutlined /> }/>)}
          </div></Link>
          }
          title={<div className='flex items-center justify-between '>
             <Link href={`/user/${user._id}`}>
            <span style={{cursor: "pointer"}} >{user.name}</span></Link>
             <span style={{cursor: "pointer"}} onClick={()=>handleFollow(user)} className='text-blue-600' href='#'>follow</span></div>}
         
        />
      </List.Item>
    )}
        />}
       </>
    );
}
export default People;