'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';

const EmailInputAndSubmit: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setError('');
      setIsValid(false);
    } else if (!validateEmail(value)) {
      setError('Please enter a valid email.');
      setIsValid(false);
    } else {
      setError('');
      setIsValid(true);
    }
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Email:', email);
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-y-2"
      onSubmit={onSubmitHandler}
    >
      {error && <p className="text-left text-[11px] text-red-500">{error}</p>}
      <input
        className="w-[300px] rounded-lg bg-zinc-800 px-4 py-2 text-white outline-none placeholder:font-normal"
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        id="email"
        onChange={onChangeHandler}
      />

      <button
        className="w-[300px] gap-x-2 rounded-lg bg-zinc-800 px-4 py-2 font-medium outline-none placeholder:font-normal disabled:text-zinc-500"
        type="submit"
        disabled={!isValid}
      >
        Continue with email
      </button>
    </form>
  );
};

export default EmailInputAndSubmit;
