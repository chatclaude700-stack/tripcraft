import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Package {
  id: string
  name: string
  destination: string
  duration: number
  price: number
  rating: number
  image: string
  hotel: string
  company: string
  availableSeats: number
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
}

export interface Booking {
  id: string
  packageId: string
  userId: string
  travelers: number
  totalPrice: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  bookingDate: string
}

interface AppStore {
  theme: 'light' | 'dark'
  language: 'en' | 'ru' | 'uz'
  favorites: string[]
  recentlyViewed: string[]
  searchHistory: any[]
  user: User | null
  bookings: Booking[]
  
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (lang: 'en' | 'ru' | 'uz') => void
  addToFavorites: (packageId: string) => void
  removeFromFavorites: (packageId: string) => void
  isFavorite: (packageId: string) => boolean
  addToRecentlyViewed: (packageId: string) => void
  setUser: (user: User | null) => void
  addBooking: (booking: Booking) => void
}

export const useStore = create<AppStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      language: 'en',
      favorites: [],
      recentlyViewed: [],
      searchHistory: [],
      user: null,
      bookings: [],

      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),

      addToFavorites: (packageId) =>
        set((state) => ({
          favorites: [...new Set([...state.favorites, packageId])],
        })),

      removeFromFavorites: (packageId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== packageId),
        })),

      isFavorite: (packageId) => get().favorites.includes(packageId),

      addToRecentlyViewed: (packageId) =>
        set((state) => ({
          recentlyViewed: [
            packageId,
            ...state.recentlyViewed.filter((id) => id !== packageId),
          ].slice(0, 10),
        })),

      setUser: (user) => set({ user }),

      addBooking: (booking) =>
        set((state) => ({
          bookings: [...state.bookings, booking],
        })),
    }),
    {
      name: 'tripcraft-store',
    }
  )
)
