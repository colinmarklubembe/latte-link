import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Lattelink Logo" width={32} height={32} />
        <span className="text-xl font-bold text-gray-800">Lattelink</span>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="#features" className="text-gray-700 hover:text-blue-600">
          Features
        </Link>
        <Link href="#events" className="text-gray-700 hover:text-blue-600">
          Events
        </Link>
        <Link
          href="/join"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Join Now
        </Link>
        <Link
          href="/login"
          className="px-4 py-2 border border-gray-400 rounded-lg"
        >
          Log In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
