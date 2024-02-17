import { KeyedMutator } from "swr";
import { create } from "zustand";

import { DataWithPagination } from "@/common/types";
import { User } from "@/pages/users/models";

type State = {
  userDetails: User | undefined;
  mutate: KeyedMutator<DataWithPagination<User>>;
  createDialogOpen: boolean;
  uploadDialogOpen: boolean;
  detailsDialogOpen: boolean;
};

type Action = {
  setUserDetails: (newUserDetail: User) => void;
  setMutate: (newMutate: KeyedMutator<DataWithPagination<User>>) => void;
  setCreateDialogOpen: () => void;
  setUploadDialogOpen: () => void;
  setDetailsDialogOpen: () => void;
};

type UseUserStore = State & Action;

const useUserStore = create<UseUserStore>((set) => ({
  mutate: async () => undefined,
  userDetails: undefined,
  createDialogOpen: false,
  uploadDialogOpen: false,
  detailsDialogOpen: false,
  setUserDetails: (newUserDetail) => set({ userDetails: newUserDetail }),
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setCreateDialogOpen: () => set((state) => ({ createDialogOpen: !state.createDialogOpen })),
  setUploadDialogOpen: () => set((state) => ({ uploadDialogOpen: !state.uploadDialogOpen })),
  setDetailsDialogOpen: () => set((state) => ({ detailsDialogOpen: !state.detailsDialogOpen })),
}));

export default useUserStore;
