import CakeCard from './CakeCard.jsx';
import Link from 'next/link';
import cakeData from '../data/cakeData.js'; // Import cake data

const CakeSection = () => {
  const displayedCakes = cakeData.slice(0, 3); // Display only the first 3 cakes

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary)' }}>
          Our Cakes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/cakes" className="px-6 py-3 rounded-md duration-300 inline-block" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}>
            See All Cakes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CakeSection;