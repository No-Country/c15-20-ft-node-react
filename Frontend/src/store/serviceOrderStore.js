import { create } from "zustand";

const useServiceOrderStore = create((set) => ({
  serviceOrders: [],
  fetchServiceOrders: async () => {
    const response = await fetch('https://web-production-2ea0.up.railway.app/service-orders/')
    set({ serviceOrders: await response.json() })
  },
  addServiceOrder: (serviceOrder) =>
    set((state) => ({ serviceOrders: [...state.serviceOrders, serviceOrder] })),
  removeServiceOrder: (serviceOrderId) =>
    set((state) => ({
      serviceOrders: state.serviceOrders.filter((order) => order._id !== serviceOrderId),
    })),
    updateServiceOrder: (serviceOrderId, serviceOrder) => 
    set((state) => ({serviceOrders: state.serviceOrders.map((order) => order._id !== serviceOrderId ? order : serviceOrder )})),
}));

export default useServiceOrderStore;
