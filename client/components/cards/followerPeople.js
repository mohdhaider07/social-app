import { useState,useContext } from 'react';
import { Avatar ,List } from 'antd';
import {UserOutlined} from '@ant-design/icons'
import { UserContext } from '../../context';
import Link from 'next/link';
const FollowerPeople = ({people,handleFollow,handleUnfollow}) => {
    const [showPeople,setShowPeople]=useState(false);
    const[state]=useContext(UserContext);
    
    return (
      <>

      <div className="my-1 p-2 shadow-md "  style={{cursor: "pointer"}} onClick={()=>{
        setShowPeople(!showPeople)
        
        }}>{people.length} Followers</div>
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
 { state &&state.user && state.user.following.includes(user._id)?( <span style={{cursor: "pointer"}} onClick={()=>handleUnfollow(user)} className='text-blue-600' href='#'>Unfollow</span>):( <span style={{cursor: "pointer"}} onClick={()=>handleFollow(user)} className='text-blue-600' href='#'>Followback</span>)}
          
          
          </div>}
         
        />
      </List.Item>
    )}
        />}
       </>
    );
}
export default FollowerPeople;