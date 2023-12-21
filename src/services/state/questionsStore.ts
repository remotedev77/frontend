import { DataWithPagination } from "@/common/types";
import { Question } from "@/pages/questions/models";
import { KeyedMutator } from "swr";
import { create } from "zustand";

type State = {
  questionDetails: Question | undefined;
  mutate: KeyedMutator<DataWithPagination<Question>>;
  createDialogOpen: boolean;
  uploadDialogOpen: boolean;
  detailsDialogOpen: boolean;
};

type Action = {
  setQuestionDetails: (newQuestionDetail: Question) => void;
  setMutate: (newMutate: KeyedMutator<DataWithPagination<Question>>) => void;
  setCreateDialogOpen: () => void;
  setUploadDialogOpen: () => void;
  setDetailsDialogOpen: () => void;
};

type UseQuestionStore = State & Action;

const useQuestionStore = create<UseQuestionStore>((set) => ({
  mutate: async () => undefined,
  questionDetails: undefined,
  createDialogOpen: false,
  uploadDialogOpen: false,
  detailsDialogOpen: false,
  setQuestionDetails: (newQuestionDetail) => set({ questionDetails: newQuestionDetail }),
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setCreateDialogOpen: () => set((state) => ({ createDialogOpen: !state.createDialogOpen })),
  setUploadDialogOpen: () => set((state) => ({ uploadDialogOpen: !state.uploadDialogOpen })),
  setDetailsDialogOpen: () => set((state) => ({ detailsDialogOpen: !state.detailsDialogOpen })),
}));

export default useQuestionStore;
