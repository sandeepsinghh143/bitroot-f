import { useEffect, useState } from 'react';
import './App.css';
import './App.scss';
import { API_URL } from './utils/constants';
import PostCard from './components/PostCard';
import PostModal from './components/PostModal';

function App() {
  const [posts,setPosts] = useState("");
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [currentModal,setCurrentModal] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }
  const getPosts = async () => {
    const res = await fetch(API_URL);
    const posts = await res.json();
    setPosts(posts);
}
useEffect(() => {
    getPosts();
}, [])

  return (
    <div className='App'>
    <div className='flex-container'>
      {posts && posts.map((post)=>{
        return <PostCard key={post.id} post={post} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} setCurrentModal={setCurrentModal}/>
      })}
    </div>
    {(posts && isModalOpen) &&<PostModal post={currentModal} handleModalOpen={handleModalOpen}/>}
    </div>
  );
}

export default App;
