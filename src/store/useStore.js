import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      selectedUser: null,
      customNote: '',
      setSelectedUser: (user) => set({ selectedUser: user }),
      setCustomNote: (note) => set({ customNote: note }),
      reset: () => set({ selectedUser: null, customNote: '' }),
    }),
    {
      name: 'form-storage',
    }
  )
);