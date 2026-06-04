import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CheckCircle, Lock, TrendingDown, Headphones } from 'lucide-react'

export const WhyChooseTripCraft = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <CheckCircle size={40} className="text-primary-600" />,
      title: 'Verified Travel Companies',
      description: 'All our travel partners are carefully vetted and verified',
    },
    {
      icon: <Lock size={40} className="text-primary-600" />,
      title: 'Secure Booking',
      description: 'Your data is protected with industry-leading security',
    },
    {
      icon: <TrendingDown size={40} className="text-primary-600" />,
      title: 'Best Price Guarantee',
      description: 'Get the lowest prices on all our travel packages',
    },
    {
      icon: <Headphones size={40} className="text-primary-600" />,
      title: '24/7 Support',
      description: 'Our team is always ready to help you',
    },
  ]

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Why Choose TripCraft
        </motion.h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Discover what makes us the leading travel marketplace
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-slate-900 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
