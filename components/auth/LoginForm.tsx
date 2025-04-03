'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register, // Connect input fields to the form.
    handleSubmit, // Is a function to handle form submission.
    formState: { errors, isSubmitting }, // Contains validation errors for the form
  } = useForm<FormData>();

  const onSubmitHandler: SubmitHandler<FormData> = data => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="rounded-lg p-6 text-white shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-bold text-blue-500">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register('name', { required: 'Name is required' })}
          className="w-full rounded border border-blue-500 bg-black p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors && errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors?.name?.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-bold text-blue-500">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid Email address',
            },
          })}
          className="w-full rounded border border-blue-500 bg-black p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors && errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors?.email?.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block font-bold text-blue-500"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required' })}
          className="w-full rounded border border-blue-500 bg-black p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors && errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors?.password?.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </form>
  );
};

export default LoginForm;
