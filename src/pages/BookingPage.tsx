import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '@store/index'

export const BookingPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { user, setUser, addBooking } = useStore()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    travelers: 1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'travelers' ? parseInt(value) : value,
    }))
  }

  const handleNextStep = () => {
    if (step < 5) setStep(step + 1)
  }

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleCompleteBooking = () => {
    const newBooking = {
      id: Date.now().toString(),
      packageId: '1',
      userId: user?.id || Date.now().toString(),
      travelers: formData.travelers,
      totalPrice: 450 * formData.travelers,
      status: 'confirmed' as const,
      bookingDate: new Date().toISOString(),
    }
    
    addBooking(newBooking)
    setUser({
      id: user?.id || Date.now().toString(),
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    })
    
    setStep(5)
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-all ${
                    s <= step
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {s}
                </div>
                <span className="text-sm">{t(`booking.step${s}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg"
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('booking.step1')}</h2>
              <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-6">
                <p className="font-semibold">Golden Triangle Tour</p>
                <p className="text-slate-600 dark:text-slate-400">3 Days • $450 per person</p>
              </div>
              <button
                onClick={handleNextStep}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors"
              >
                {t('booking.continue')}
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('booking.step2')}</h2>
              <form className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">{t('booking.fullName')}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border dark:bg-slate-700 dark:border-slate-600 rounded-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t('booking.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border dark:bg-slate-700 dark:border-slate-600 rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{t('booking.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border dark:bg-slate-700 dark:border-slate-600 rounded-lg"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Number of Travelers</label>
                  <input
                    type="number"
                    name="travelers"
                    min="1"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full p-3 border dark:bg-slate-700 dark:border-slate-600 rounded-lg"
                  />
                </div>
              </form>
              <div className="flex gap-4">
                <button
                  onClick={handlePreviousStep}
                  className="flex-1 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 py-3 rounded-lg font-bold transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  {t('booking.continue')}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('booking.step3')}</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <span>Name:</span>
                  <span className="font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <span>Email:</span>
                  <span className="font-semibold">{formData.email}</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <span>Phone:</span>
                  <span className="font-semibold">{formData.phone}</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <span>Travelers:</span>
                  <span className="font-semibold">{formData.travelers}</span>
                </div>
                <div className="flex justify-between p-4 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <span className="font-bold">Total Price:</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400">${450 * formData.travelers}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePreviousStep}
                  className="flex-1 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 py-3 rounded-lg font-bold transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  {t('booking.confirm')}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('booking.step4')}</h2>
              <div className="bg-accent-100 dark:bg-accent-900/20 p-6 rounded-lg mb-6 text-center">
                <p className="text-lg font-semibold text-accent-600 dark:text-accent-400 mb-4">Payment Simulation</p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">This is a demo. In production, this would connect to a payment gateway.</p>
                <div className="text-3xl font-bold text-primary-600 mb-4">${450 * formData.travelers}</div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePreviousStep}
                  className="flex-1 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 py-3 rounded-lg font-bold transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleCompleteBooking}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors"
                >
                  {t('booking.payment')}
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold mb-4 text-green-600">{t('booking.bookingSuccess')}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Your booking has been confirmed. Check your email for details.
              </p>
              <button
                onClick={() => navigate('/')}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Back to Home
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
