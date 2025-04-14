'use client';

import { EmailInputAndSubmit } from '@/components';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

const JoinPage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div
        onClick={() => router.push('/')}
        className="absolute right-6 top-6 flex h-12 w-12 flex-col items-center justify-center rounded-full p-2 text-gray-500 transition-all duration-200 hover:cursor-pointer hover:bg-zinc-800 hover:text-gray-300"
      >
        <X />
        <span className="text-sm">ESC</span>
      </div>

      <h1 className="mb-4 pb-4 text-center text-2xl">
        Sign up below to unlock the full <br /> potential of Perplexity
      </h1>

      <button className="flex h-12 w-[300px] items-center justify-center gap-x-2 rounded-lg bg-gray-100 py-2 font-semibold text-zinc-800">
        <span>
          <Image
            src="/svgs/googleIcon.svg"
            width={20}
            height={20}
            alt="Google Icon"
          />
        </span>
        Continue with Google
      </button>

      <div className="my-3">or</div>

      <EmailInputAndSubmit />
    </div>
  );
};

export default JoinPage;
