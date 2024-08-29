import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/Json.css"

const JsonPlaceholder = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [postId, setPostId] = useState(1);
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
    userId: 1,
  });

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const result = await response.json();
      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setData(null);
        setError('Error fetching post');
      }
    } catch (error) {
      setData(null);
      setError('Error fetching post');
    }
  };

  const axiosGetPost = async () => {
    try {
      const response = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching post');
    }
  };

  const axiosCreatePost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError('Error creating post');
    }
  };

  const axiosUpdatePost = async () => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, newPost);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError('Error updating post');
    }
  };

  const axiosDeletePost = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setData(`Post ${postId} deleted`);
      setError(null);
    } catch (error) {
      setError('Error deleting post');
    }
  };

  const handleInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='fondo'>
      <h1>JSONPlaceholder API</h1>


      <div className='centrar'>
        <input className='input'
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="Enter Post ID"
        />
        <div className='buttons'>
        <button  onClick={fetchPost}>Fetch Post with Fetch</button>
        <button onClick={axiosGetPost}>Fetch Post with Axios</button>
        </div>
      </div>

      <h2>Create or Update Post</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axiosCreatePost();
        }}
      >
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
          placeholder="Body"
        />
        <button type="submit">Create Post with Axios</button>
      </form>

      <button onClick={axiosUpdatePost}>Update Post with Axios</button>
      <button onClick={axiosDeletePost}>Delete Post with Axios</button>

      {error && <p>{error}</p>}

      <div className='text'>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>

      <Link to="/"><button>Ir a ApiWeather</button></Link>
     <Link to="/chat"> <button>Ir a Chat</button></Link>
    </div>
  );
};

export default JsonPlaceholder;
