import { DataWithPagination } from "@/common/types";
import { Manager } from "@/pages/managers/models";
import { KeyedMutator } from "swr";
import { create } from "zustand";

type State = {
  managerDetails: Manager | undefined;
  mutate: KeyedMutator<DataWithPagination<Manager>>;
  createDialogOpen: boolean;
  uploadDialogOpen: boolean;
  detailsDialogOpen: boolean;
};

type Action = {
  setManagerDetails: (newManagerDetail: Manager) => void;
  setMutate: (newMutate: KeyedMutator<DataWithPagination<Manager>>) => void;
  setCreateDialogOpen: () => void;
  setUploadDialogOpen: () => void;
  setDetailsDialogOpen: () => void;
};

type UseManagerStore = State & Action;

const useManagerStore = create<UseManagerStore>((set) => ({
  mutate: async () => undefined,
  managerDetails: undefined,
  createDialogOpen: false,
  uploadDialogOpen: false,
  detailsDialogOpen: false,
  setManagerDetails: (newManagerDetail) => set({ managerDetails: newManagerDetail }),
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setCreateDialogOpen: () => set((state) => ({ createDialogOpen: !state.createDialogOpen })),
  setUploadDialogOpen: () => set((state) => ({ uploadDialogOpen: !state.uploadDialogOpen })),
  setDetailsDialogOpen: () => set((state) => ({ detailsDialogOpen: !state.detailsDialogOpen })),
}));

export default useManagerStore;
