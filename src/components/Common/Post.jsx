import React from 'react';

const Post = ({title,body}) => {
  return (
    <div className='border-2 p-2 m-2 border-richblack-5 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-2 uppercase'>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;