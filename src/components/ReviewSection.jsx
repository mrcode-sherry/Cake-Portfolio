const ReviewSection = () => {
  // Dummy Review Data (Replace with your actual review data)
  const reviews = [
    {
      id: 1,
      name: 'Laila Smith',
      review: 'The cake was absolutely delicious! It was the perfect centerpiece for our celebration.',
      image: '/review-image-1.jpg', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Marco Smith',
      review: 'I ordered food for a party, and everyone loved it. The quality and taste were outstanding.',
      image: '/review-image-2.jpg', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Miranda Smith',
      review: 'The best bakery in town! I highly recommend their cakes and food for any occasion.',
      image: '/review-image-3.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary)' }}>
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-lg shadow-md p-6" style={{ backgroundColor: 'var(--cakeWhite)' }}>
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: 'var(--primary)' }}>
                {review.name}
              </h3>
              <p className="text-center" style={{ color: 'var(--neutral)' }}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;