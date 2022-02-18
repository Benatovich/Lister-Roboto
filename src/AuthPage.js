import React, { useState } from 'react';
import { signInUser, signUpUser } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  function clearForms() {
    setSignInEmail('');
    setSignInPassword('');
    setSignUpEmail('');
    setSignUpPassword('');
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
    clearForms();
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
    clearForms();
  }

  return (
    <div className='auth-page' >
      <form onSubmit={handleSignUp}>
        <input placeholder='email' value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} />
        <input placeholder='password' value={signUpPassword} type='password' onChange={e => setSignUpPassword(e.target.value)} />
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <input placeholder='email' value={signInEmail} onChange={e => setSignInEmail(e.target.value)} />
        <input placeholder='password' type='password' value={signInPassword} onChange={e => setSignInPassword(e.target.value)} />
        <button>Sign In</button>
      </form>
    </div>
  );
}