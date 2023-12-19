import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      isAuthenticated: false,
      email: null,
      name: null,
      lastName: null,
      role: null,
      productsPurchased: [],
      servicesPurchased: [],
      login: (token) => set({ token: token, isAuthenticated: true }),
      logout: () => set({ token: null, isAuthenticated: false }),
      setRole: (role) => set({ role: role }),
      setPersonalInfo: (name, lastName, email) =>
        set({ name: name, lastName: lastName, email: email }),
      setProductsPurchased: (products) => set({ productsPurchased: products }),
      setServicesPurchased: (services) => set({ servicesPurchased: services }),
      // una accion asincrona que mande los datos a la api
    }),
    {
      name: "auth-storage", // nombre del elemento en el almacenamiento (debe ser único)
      getStorage: () => localStorage, // almacenamiento que deseas utilizar
    }
  )
);

export default useAuthStore;
