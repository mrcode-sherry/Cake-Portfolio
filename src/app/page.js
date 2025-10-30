import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import CakeSection from '../components/CakeSection.jsx';
import FoodSection from '../components/FoodSection.jsx';
import ReviewSection from '../components/ReviewSection.jsx';
import ContactForm from '../components/ContactForm.jsx';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <CakeSection />
      <FoodSection />
      <ReviewSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;