import { create } from 'zustand';

type State = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const useStore = create<State>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
