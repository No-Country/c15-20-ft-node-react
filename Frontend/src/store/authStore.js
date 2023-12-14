import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      isAuthenticated: false,
      role: "admin",
      login: (token) => set({ token: token, isAuthenticated: true }),
      logout: () => set({ token: null, isAuthenticated: false }),
      setRole: (role) => set({ role: role }),
      // una accion asincrona que mande los datos a la api
    }),
    {
      name: "auth-storage", // nombre del elemento en el almacenamiento (debe ser único)
      getStorage: () => localStorage, // almacenamiento que deseas utilizar
    }
  )
);

export default useAuthStore;
