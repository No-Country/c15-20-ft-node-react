import { create } from "zustand";

// CHEQUEAR QUE OTROS ESTADOS SON NECESARIOS, QUIZAS PRECIO TOTAL, ETC Y QUE OTRAS ACCIONES TAMBIEN, INCLUSO VER SI LAS QUE ESTAN AHI ESTAN BIEN
const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
  clearCart: () => set((state) => ({ cart: [] })),
  getCartTotal: () =>
    get().cart.reduce((total, product) => total + product.price, 0),
}));

export default useCartStore;
