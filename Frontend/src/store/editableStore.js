import { create } from "zustand";

const useEditableStore = create((set) => ({
  editable: {
    title: "",
    description: "",
    price: 0,
    tags: [],
    imageUrl: "",
    clientId: "",
    guiltId: "",
    startDate: "",
    deliveryDate: "",
    purchaseDate: "",
    paymentMethod: "",
    products: [],
    totalPrice: 0,
  },
    updateEditable: (updatedEditable) => 
    set((state) => ({editable: updatedEditable})),
    clearEditable: () => set((state => state))
}));

export default useEditableStore;