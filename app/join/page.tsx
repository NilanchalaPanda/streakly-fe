import { EmailInputAndSubmit } from '@/components';
import Image from 'next/image';
import React, { FC } from 'react';

const JoinPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 pb-4 text-center text-2xl">
        Sign up below to unlock the full <br /> potential of Perplexity
      </h1>

      <button className="flex w-[300px] items-center justify-center gap-x-2 rounded-lg bg-gray-100 py-2 font-medium text-zinc-800">
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
