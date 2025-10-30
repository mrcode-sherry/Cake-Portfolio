const Hero = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
          Welcome to CakeCrumbs
        </h1>
        <p className="text-lg mb-8" style={{ color: 'var(--neutral)' }}>
          Delicious cakes and food, made with love.
        </p>
        <button className="px-8 py-3 rounded-md duration-300" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}>
          Explore Our Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;