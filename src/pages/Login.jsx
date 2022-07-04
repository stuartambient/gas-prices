import { useEffect, useState } from 'react';

const Login = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const [key, value] of formData) {
      console.log(key, value);
    }
  };
  return (
    <>
      <h3>Admin</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='name'></input>
        <input type='password' name='password' placeholder='password'></input>
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
