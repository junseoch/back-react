import React, { useContext } from 'react';
import { PostsContext } from '../../../context/PostsContext';
import { Link } from 'react-router-dom';

const PostContextList = () => {
  console.log(useContext(PostsContext))
  const {state, actions, error, loading, refetching} = useContext(PostsContext)

  const postList = state.posts && state.posts.map(({title, id}, i) => (
    <li key={i}>
      <Link to={`/community/read/${id}`}>{title}</Link>
    </li>
  ))

  return (
    <div>
      {postList}
    </div>
  );
};

export default PostContextList;