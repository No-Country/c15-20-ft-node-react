import { create } from "zustand";

const useServiceStore = create((set) => ({
  services: [],
  fetchServices: async () => {
    const response = await fetch('https://web-production-2ea0.up.railway.app/services/')
    set({ services: await response.json() })
  },
  addService: (service) =>
    set((state) => ({ services: [...state.services, service] })),
  removeService: (serviceId) =>
    set((state) => ({
      services: state.services.filter((service) => service._id !== serviceId),
    })),
    updateService: (serviceId, updatedService) => 
    set((state) => ({services: state.services.map((service) => service._id !== serviceId ? service : updatedService )})),
}));

export default useServiceStore;