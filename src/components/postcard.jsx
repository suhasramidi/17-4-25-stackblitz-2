import React from 'react';
import LikeButton from './LikeButton';

const PostCard = ({ profilePic, username }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '300px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={profilePic}
          alt={`${username}'s profile`}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '10px',
          }}
        />
        <h3>{username}</h3>
      </div>
      <LikeButton />
    </div>
  );
};

export default PostCard;