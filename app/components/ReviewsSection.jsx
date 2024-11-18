import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "James Wilson",
      role: "IT Manager",
      company: "Tech Solutions Ltd",
      content: "DBV Enterprises has been instrumental in keeping our infrastructure up-to-date. Their product quality and customer service are unmatched.",
      rating: 5,
      image: "/api/placeholder/32/32"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Operations Director",
      company: "Global Systems",
      content: "Finding reliable electronics suppliers is crucial for our business. DBV has consistently delivered quality products on time.",
      rating: 5,
      image: "/api/placeholder/32/32"
    },
    {
      id: 3,
      name: "Michael Omondi",
      role: "Project Manager",
      company: "Innovation Hub",
      content: "The quotation process is straightforward and their team is always ready to help. Excellent service all around!",
      rating: 5,
      image: "/api/placeholder/32/32"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with DBV Enterprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{review.content}</p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <p className="text-sm text-sky-600">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;