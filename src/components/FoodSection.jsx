import FoodCard from './FoodCard.jsx';
import Link from 'next/link';
import foodData from '../data/foodData.js'; // Import food data

const FoodSection = () => {
  const displayedFoods = foodData.slice(0, 3); // Display only the first 3 food items

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary)' }}>
          Our Food
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/food" className="px-6 py-3 rounded-md duration-300 inline-block" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}>
            See All Food
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;