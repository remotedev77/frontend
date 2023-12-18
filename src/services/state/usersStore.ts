import { DataWithPagination } from "@/common/types";
import { User } from "@/pages/users/models";
import { KeyedMutator } from "swr";
import { create } from "zustand";

type State = {
  userDetails: User | undefined;
  mutate: KeyedMutator<DataWithPagination<User>>;
  createDialogOpen: boolean;
  updateDialogOpen: boolean;
  uploadDialogOpen: boolean;
  detailsDialogOpen: boolean;
};

type Action = {
  setUserDetails: (newUserDetail: User) => void;
  setMutate: (newMutate: KeyedMutator<DataWithPagination<User>>) => void;
  setCreateDialogOpen: () => void;
  setUpdateDialogOpen: () => void;
  setUploadDialogOpen: () => void;
  setDetailsDialogOpen: () => void;
};

type UseUserStore = State & Action;

const useUserStore = create<UseUserStore>((set) => ({
  mutate: async () => undefined,
  userDetails: undefined,
  createDialogOpen: false,
  updateDialogOpen: false,
  uploadDialogOpen: false,
  detailsDialogOpen: false,
  setUserDetails: (newUserDetail) => set({ userDetails: newUserDetail }),
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setCreateDialogOpen: () => set((state) => ({ createDialogOpen: !state.createDialogOpen })),
  setUpdateDialogOpen: () => set((state) => ({ updateDialogOpen: !state.updateDialogOpen })),
  setUploadDialogOpen: () => set((state) => ({ uploadDialogOpen: !state.uploadDialogOpen })),
  setDetailsDialogOpen: () => set((state) => ({ detailsDialogOpen: !state.detailsDialogOpen })),
}));

export default useUserStore;
