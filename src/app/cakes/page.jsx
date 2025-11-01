import CakeCard from '../../components/CakeCard.jsx';
import cakeData from '../../data/cakeData.js'; // Import cake data


const CakesPage = () => {
    return (
        <div className='bg-white' style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <h1 style={{ color: 'var(--primary)' }}>Our Cakes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cakeData.map((cake) => (
                    <CakeCard key={cake.id} cake={cake} />
                ))}
            </div>
        </div>
    );
};

export default CakesPage;