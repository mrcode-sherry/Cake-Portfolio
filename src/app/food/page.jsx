import FoodCard from '../../components/FoodCard.jsx';
import foodData from '../../data/foodData.js';

const FoodPage = () => {
    return (
        <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <h1 style={{ color: 'var(--primary)' }}>Our Food</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {foodData.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default FoodPage;