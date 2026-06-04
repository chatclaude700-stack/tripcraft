import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { PackageCard } from './PackageCard'
import { packagesData } from '@db/mockData'
import { useNavigate } from 'react-router-dom'

export const PopularTours = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleViewDetails = (id: string) => {
    navigate(`/package/${id}`)
  }

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Popular Tours
        </motion.h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Discover our most booked and highly-rated travel packages
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.slice(0, 4).map((pkg) => (
            <PackageCard
              key={pkg.id}
              {...pkg}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
