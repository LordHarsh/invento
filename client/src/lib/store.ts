// stores/authStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cookies from 'js-cookie'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  setAuth: (user: User) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setAuth: (user) => {
        // Update both store and cookies
        set({ isAuthenticated: true, user })
        Cookies.set('user-data', JSON.stringify(user), { secure: true, sameSite: 'strict' })
      },
      clearAuth: () => {
        set({ isAuthenticated: false, user: null })
        Cookies.remove('user-data')
        Cookies.remove('invento-session')
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
)