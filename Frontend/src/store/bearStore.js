import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 0,
  bearsName: [],
  bearName: "",
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  addBearName: (name) =>
    set((state) => ({ bearsName: [...state.bearsName, name] })),
  removeAllBears: () => set({ bears: 0 }),
}));
