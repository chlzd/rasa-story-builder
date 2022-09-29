import create from 'zustand';

type Step = Intent | Action;

type Intent = {
  name: string;
  examples: string[];
};

type Action = {
  name: string;
};

type Store = {
  steps: Step[];
  addStep: (step: Step) => void;
};

export const useStoryStore = create<Store>((set) => ({
  steps: [ { name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },{ name: 'action1' },],
  addStep: (step: Step) =>
    set((state) => ({ steps: [...state.steps, { name: 'action1' }] })),
}));
