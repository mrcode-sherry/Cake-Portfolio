import Link from 'next/link';

const CakeCard = ({ cake }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--cakeWhite)' }}>
      <img src={cake.image} alt={cake.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>{cake.name}</h3>
        <p className="text-gray-700 mb-2">Price: ${cake.price}</p>
        <Link href={`/contact?type=cake&item=${cake.name}`} className="px-4 py-2 rounded-md duration-300 inline-block" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}>
          Buy Cake
        </Link>
      </div>
    </div>
  );
};

export default CakeCard;