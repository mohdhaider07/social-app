import { useState, useContext } from 'react';
import { Avatar, List } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { UserContext } from '../../context';
import Link from 'next/link'
const SearchResult = ({ people, handleFollow, handleUnfollow }) => {
    const [state] = useContext(UserContext);
    return (
        <>
            {<List
                itemLayout="horizontal"
                dataSource={people}
                renderItem={(user) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<div className='items-center'>
                                {user.image ? (<Avatar src={user.image.url} />) : (<Avatar icon={<UserOutlined />} />)}
                            </div>}

                            title={<div className='flex items-center justify-between '><span style={{ cursor: "pointer" }} >

                                <Link href={`/user/${user._id}`}>
                                    <a>{user.name}</a>
                                </Link>

                            </span>
                                {state && state.user && state.user.following.includes(user._id) ? (<span style={{ cursor: "pointer" }} onClick={() => handleUnfollow(user)} className='text-blue-600' href='#'>Unfollow</span>) : (<span style={{ cursor: "pointer" }} onClick={() => handleFollow(user)} className='text-blue-600' href='#'>follow</span>)}
                            </div>}
                        />
                    </List.Item>
                )}
            />}
        </>
    );
}
export default SearchResult;