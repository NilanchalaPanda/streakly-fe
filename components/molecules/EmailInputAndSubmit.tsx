'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';

const EmailInputAndSubmit: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setError('');
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setError('');
    console.log('Submitted Email:', email);
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-y-2"
      onSubmit={onSubmitHandler}
    >
      {error && <p className="text-left text-[11px] text-red-500">{error}</p>}
      <input
        className="h-12 w-[300px] rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white outline-none placeholder:font-normal"
        type="text"
        name="email"
        value={email}
        placeholder="Enter your email"
        // id="email"
        onChange={onChangeHandler}
      />

      <button
        className="h-10 w-[300px] gap-x-2 rounded-lg bg-zinc-800 px-4 py-2 font-medium outline-none placeholder:font-normal disabled:text-zinc-500"
        type="submit"
        disabled={email === ''}
      >
        Continue with email
      </button>
    </form>
  );
};

export default EmailInputAndSubmit;
