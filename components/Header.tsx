"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        {/* <Image src="/logo.png" alt="Lattelink Logo" width={32} height={32} /> */}
        <span className="text-xl font-bold text-primary">Lattelink</span>
      </div>
      <nav className="flex items-center space-x-6">
        <Link
          href="#features"
          className="text-primary font-semibold hover:text-primaryLight"
        >
          Features
        </Link>
        <Link
          href="#events"
          className="text-primary font-semibold hover:text-primaryLight"
        >
          Events
        </Link>
        <Link
          href="/auth/signup"
          className="px-4 py-2 bg-secondary hover:bg-secondaryDark text-primary hover:text-primaryLight rounded-full font-semibold"
        >
          Join Now
        </Link>
        <Link
          href="/auth/login"
          className="px-4 py-2 bg-primary hover:bg-primaryLight text-white font-semibold rounded-full"
        >
          Log In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
