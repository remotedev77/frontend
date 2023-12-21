import { DataWithPagination } from "@/common/types";
import { Company } from "@/pages/companies/models";
import { KeyedMutator } from "swr";
import { create } from "zustand";

type State = {
  companyDetails: Company | undefined;
  mutate: KeyedMutator<DataWithPagination<Company>>;
  createDialogOpen: boolean;
  uploadDialogOpen: boolean;
  detailsDialogOpen: boolean;
};

type Action = {
  setCompanyDetails: (newUserDetail: Company) => void;
  setMutate: (newMutate: KeyedMutator<DataWithPagination<Company>>) => void;
  setCreateDialogOpen: () => void;
  setUploadDialogOpen: () => void;
  setDetailsDialogOpen: () => void;
};

type useCompanyStore = State & Action;

const useCompanyStore = create<useCompanyStore>((set) => ({
  mutate: async () => undefined,
  companyDetails: undefined,
  createDialogOpen: false,
  uploadDialogOpen: false,
  detailsDialogOpen: false,
  setCompanyDetails: (newCompanyDetail) => set({ companyDetails: newCompanyDetail }),
  setMutate: (newMutate) => set({ mutate: newMutate }),
  setCreateDialogOpen: () => set((state) => ({ createDialogOpen: !state.createDialogOpen })),
  setUploadDialogOpen: () => set((state) => ({ uploadDialogOpen: !state.uploadDialogOpen })),
  setDetailsDialogOpen: () => set((state) => ({ detailsDialogOpen: !state.detailsDialogOpen })),
}));

export default useCompanyStore;
