import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Star, MessageCircle } from 'lucide-react'

export const CustomerReviews = () => {
  const { t } = useTranslation()

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Amazing experience! The entire booking process was smooth and the trip exceeded my expectations.',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Ahmed Hassan',
      rating: 5,
      text: 'Professional service and excellent customer support. Highly recommended for anyone planning travels.',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Maria Garcia',
      rating: 4.5,
      text: 'Great packages and competitive prices. Had a wonderful time exploring new destinations.',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'David Chen',
      rating: 5,
      text: 'Best travel platform I\'ve used. The 24/7 support was incredibly helpful throughout my journey.',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
  ]

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Read testimonials from thousands of satisfied travelers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(review.rating)
                            ? 'fill-accent-500 text-accent-500'
                            : 'text-slate-300'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
