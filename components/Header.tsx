'use client';

import Link from 'next/link';
import React, { FC, useState } from 'react';

const Header: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <section className="mx-20 flex items-center justify-between p-4 text-white">
      <div className="text-xl font-bold text-blue-400">LOGO</div>
      <nav className="mt-2 flex space-x-4">
        {isLoggedIn ? (
          <Link href={'/join'} className="text-blue-300 hover:text-blue-500">
            Join
          </Link>
        ) : (
          <>
            <Link
              href={'/streaks'}
              className="text-blue-300 hover:text-blue-500"
            >
              Streaks
            </Link>
            <Link
              href={'/calendar'}
              className="text-blue-300 hover:text-blue-500"
            >
              Calendar
            </Link>
            <Link
              href={'/dashboard'}
              className="text-blue-300 hover:text-blue-500"
            >
              Dashboard
            </Link>
            <Link
              href={'/profile'}
              className="text-blue-300 hover:text-blue-500"
            >
              ProfileIcon
            </Link>
            <p className="text-blue-300 hover:text-blue-500">CircleHam</p>
          </>
        )}
      </nav>
    </section>
  );
};

export default Header;
