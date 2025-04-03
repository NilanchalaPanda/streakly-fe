import Link from 'next/link';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <section className="mx-20 flex items-center justify-between p-4 text-white">
      <div className="text-xl font-bold text-blue-400">LOGO</div>
      <nav className="mt-2 flex space-x-4">
        <Link href={'/'} className="text-blue-300 hover:text-blue-500">
          Home
        </Link>
        <Link href={'/login'} className="text-blue-300 hover:text-blue-500">
          Login
        </Link>
        <Link href={'/dashboard'} className="text-blue-300 hover:text-blue-500">
          Dash
        </Link>
      </nav>
    </section>
  );
};

export default Header;
