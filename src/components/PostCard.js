import React from 'react'

const PostCard = ({post,setIsModalOpen,IsModalOpen, setCurrentModal}) => {
    const date = new Date(post.date);
    const month = 'Jan';
    const postDate = date.getDate();
    const year = date.getFullYear();
    const handleClick = () => {
      setCurrentModal(post);
      setIsModalOpen(!IsModalOpen);
    }
  return (
      <div className='post'>
          <img src={post.thumbnail.small} alt="post" className='post-image'/>
          <div className='learn-more' onClick={handleClick}>Learn More</div>
          <div className='post-details'>
              <h2 className='post-title' onClick={handleClick}>{post.title}</h2>
              <p>{post.content}</p>
              <div className='post-author'>
                  <div>{post.author.name+" "+post.author.role}</div>
                  <div>{month+" "+postDate+", "+year}</div>
              </div>
          </div>
      </div>
  )
}

export default PostCard