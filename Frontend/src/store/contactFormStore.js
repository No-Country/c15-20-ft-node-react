import { create } from "zustand";
const useContactFormStore = create((set) => ({
  name: "",
  lastName: "",
  email: "",
  message: "",
  setName: (name) => set({ name: name }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  setMessage: (message) => set({ message }),
  // una accion asincrona que mande los datos a la api
}));
export default useContactFormStore;
