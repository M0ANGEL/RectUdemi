import { create } from "zustand";

interface BusquedaStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useBusquedaSotre = create<BusquedaStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
