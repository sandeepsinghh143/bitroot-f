import React from 'react'

const PostModal = ({post,handleModalOpen}) => {
  return (
    <div className='modal-container'>
        <div className='post'>
            <div className='close-btn'>
                <span></span>
                <span className='close' onClick={()=>handleModalOpen(post)}>X</span>
            </div>
            <img src={post.thumbnail.large} alt="post" className='post-image-modal'/>
            <div className='post-details'>
                <h2 className='post-title'>{post.title}</h2>
                <p>{post.content}</p>
                <div className='post-author-modal'>
                    <div className='author-image'>
                        <img src={post.author.avatar} alt='author'/>
                    </div>
                    <div>{post.author.name+" "+post.author.role}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostModal