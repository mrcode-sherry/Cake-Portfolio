import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>About Us</h2>
          <p className="mb-6" style={{ color: 'var(--neutral)' }}>
            We are passionate about creating delicious cakes and food using the finest ingredients. Our goal is to bring joy to your special occasions with our creations.
          </p>
          <Link href="/about" className="px-6 py-3 rounded-md duration-300 inline-block" style={{ backgroundColor: 'var(--primary)', color: 'var(--cakeWhite)' }}>
            Read More
          </Link>
        </div>
        <div>
          <img
            src="/about-image.jpg"  // Replace with an actual image path
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;