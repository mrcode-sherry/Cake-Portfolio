import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="shadow-md py-4" style={{ backgroundColor: 'var(--cakeWhite)' }}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
          CakeCrumbs  {/*  Placeholder logo text */}
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" style={{ color: 'var(--neutral)' }} className="text-gray-700 hover:text-primary">Home</Link>
          <Link href="/about" style={{ color: 'var(--neutral)' }} className="text-gray-700 hover:text-primary">About</Link>
          <Link href="/cakes" style={{ color: 'var(--neutral)' }} className="text-gray-700 hover:text-primary">Cakes</Link>
          <Link href="/food" style={{ color: 'var(--neutral)' }} className="text-gray-700 hover:text-primary">Food</Link>
          <Link href="/contact" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }} className="px-4 py-2 rounded duration-300">
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;