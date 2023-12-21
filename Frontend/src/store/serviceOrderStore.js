import { create } from "zustand";

const useServiceOrderStore = create((set) => ({
  serviceOrders: [],
  fetchServiceOrders: async () => {
    const response = await fetch('https://backend-c1520-8eb3ff14ed9d.herokuapp.com/service-orders/')
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
