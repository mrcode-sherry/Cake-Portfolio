import Link from 'next/link';

const FoodCard = ({ food }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--cakeWhite)' }}>
      <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>{food.name}</h3>
        <p className="text-gray-700 mb-2">Price: ${food.price}</p>
        <Link href={`/contact?type=food&item=${food.name}`} className="px-4 py-2 rounded-md duration-300 inline-block" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}>
          Buy Food
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;