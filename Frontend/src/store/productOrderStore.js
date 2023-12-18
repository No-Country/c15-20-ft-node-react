import { create } from "zustand";

const useProductOrderStore = create((set) => ({
  productOrders: [],
  addProductOrder: (productOrder) =>
    set((state) => ({ productOrders: [...state.productOrders, productOrder] })),
  removeProductOrder: (productOrderId) =>
    set((state) => ({
      productOrders: state.productOrders.filter((order) => order.id !== productOrderId),
    })),
}));

export default useProductOrderStore;