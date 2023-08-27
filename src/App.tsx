

import React, { FormEvent, useState } from 'react';
import './App.css';
import PostsCards from './components/PostsCards';
import { useGetPostsQuery, useNewPostMutation } from './redux/api';

const App: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [newPost] = useNewPostMutation();
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery('');

  const submitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post:Post={
      title,
      body,
      userId:Math.random()*1000,
      id:Math.random()*1000
    }
    newPost(post); // Pass the title and body to the newPost mutation
    setTitle(''); // Clear the title input after submitting
    setBody(''); // Clear the body input after submitting
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((i) => <PostsCards key={i.id} post={i} />) // Add a unique key to each PostsCards component
      )}
    </div>
  );
};

export default App;

