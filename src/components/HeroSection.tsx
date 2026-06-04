import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Search, MapPin, Calendar, DollarSign, Users } from 'lucide-react'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {t('hero.headline')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          {t('hero.subheadline')}
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {/* Destination */}
            <div className="flex items-center gap-3">
              <MapPin className="text-primary-600" size={20} />
              <input
                type="text"
                placeholder={t('search.destination')}
                className="w-full outline-none bg-transparent dark:text-white"
              />
            </div>

            {/* Budget */}
            <div className="flex items-center gap-3">
              <DollarSign className="text-primary-600" size={20} />
              <input
                type="number"
                placeholder={t('search.budget')}
                className="w-full outline-none bg-transparent dark:text-white"
              />
            </div>

            {/* Duration */}
            <div className="flex items-center gap-3">
              <Calendar className="text-primary-600" size={20} />
              <input
                type="number"
                placeholder={t('search.duration')}
                className="w-full outline-none bg-transparent dark:text-white"
              />
            </div>

            {/* Travelers */}
            <div className="flex items-center gap-3">
              <Users className="text-primary-600" size={20} />
              <input
                type="number"
                placeholder={t('search.travelers')}
                className="w-full outline-none bg-transparent dark:text-white"
              />
            </div>

            {/* Search Button */}
            <button className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
              <Search size={20} />
              {t('search.search')}
            </button>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors">
              {t('hero.searchTours')}
            </button>
            <button className="flex-1 bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-semibold transition-colors">
              {t('hero.explorePackages')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
