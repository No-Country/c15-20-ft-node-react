import { create } from "zustand";

const useServiceOrderStore = create((set) => ({
  serviceOrders: [],
  addServiceOrder: (serviceOrder) =>
    set((state) => ({ serviceOrders: [...state.serviceOrders, serviceOrder] })),
  removeServiceOrder: (serviceOrderId) =>
    set((state) => ({
      serviceOrders: state.serviceOrders.filter((order) => order.id !== serviceOrderId),
    })),
}));

export default useServiceOrderStore;
