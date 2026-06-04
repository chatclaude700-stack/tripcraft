import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">TripCraft</h3>
            <p className="text-slate-400 mb-4">
              Your trusted travel marketplace for discovering, comparing, and booking amazing travel packages.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="hover:text-primary-400 cursor-pointer" />
              <Twitter size={20} className="hover:text-primary-400 cursor-pointer" />
              <Instagram size={20} className="hover:text-primary-400 cursor-pointer" />
              <Linkedin size={20} className="hover:text-primary-400 cursor-pointer" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/" className="hover:text-primary-400">{t('nav.home')}</a></li>
              <li><a href="/domestic" className="hover:text-primary-400">{t('nav.domesticTours')}</a></li>
              <li><a href="/international" className="hover:text-primary-400">{t('nav.internationalTours')}</a></li>
              <li><a href="/destinations" className="hover:text-primary-400">{t('nav.destinations')}</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-primary-400">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-primary-400">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-primary-400">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary-400">{t('footer.terms')}</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@tripcraft.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                123 Travel St, World City
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
