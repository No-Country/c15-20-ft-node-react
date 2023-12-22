import { create } from "zustand";

const useProductOrderStore = create((set) => ({
  productOrders: [],
  fetchProductOrders: async () => {
    const response = await fetch('https://web-production-2ea0.up.railway.app/product-orders/')
    set({ productOrders: await response.json() })
  },
  addProductOrder: (productOrder) =>
    set((state) => ({ productOrders: [...state.productOrders, productOrder] })),
  removeProductOrder: (productOrderId) =>
    set((state) => ({
      productOrders: state.productOrders.filter((order) => order.id !== productOrderId),
    })),
    updateProductOrder: (productOrderId, productOrder) => 
    set((state) => ({productOrders: state.productOrders.map((order) => order._id !== productOrderId ? order : productOrder )})),
}));

export default useProductOrderStore;