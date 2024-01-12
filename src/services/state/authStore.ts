import { create } from "zustand";
import { getData, postData } from "../api/requests";
import { SignIn, SignInResponse } from "@/pages/sign-in/models";
import { authEndpoints } from "../api/endpoints";
import { toast } from "@/common/components/ui/use-toast";
import { toastMessages } from "@/common/lib/utils";
import { User } from "@/pages/users/models";

type State = {
  user: User | null;
  isAuth: boolean | undefined;
  isSignInLoading: boolean;
  isUserLoading: boolean;
};

type Action = {
  setIsAuth: (isAuth: boolean) => void;
  currentUser: () => void;
  signIn: (data: SignIn) => void;
  signOut: () => void;
  getNewAccessToken: () => Promise<string>;
};

type UseAuthStore = State & Action;

const useAuthStore = create<UseAuthStore>((set, get) => ({
  user: null,
  isAuth: undefined,
  isSignInLoading: false,
  isUserLoading: false,
  setIsAuth: (isAuth) => set({ isAuth }),
  currentUser: async () => {
    set({ isUserLoading: true });
    try {
      const currentUser = await getData(authEndpoints.currentUser);
      console.log(currentUser);
      set({ user: currentUser });
      set({ isAuth: true });
    } catch (error) {
      set({ user: null });
      set({ isAuth: false });
    }
    set({ isUserLoading: false });
  },

  signIn: async (data) => {
    set({ isSignInLoading: true });

    try {
      const { access, refresh } = (await postData(authEndpoints.signIn, { arg: data })) as unknown as SignInResponse;
      localStorage.setItem("accessToken", `Bearer ${access}`);
      localStorage.setItem("refreshToken", `Bearer ${refresh}`);
      get().currentUser();
    } catch (error) {
      toast(toastMessages.error);
    }

    set({ isSignInLoading: false });
  },
  signOut: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ isAuth: false });
    set({ user: null });
  },
  getNewAccessToken: async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    const { access } = (await postData(authEndpoints.refreshToken, {
      arg: { refresh: refreshToken?.replace("Bearer", "") },
    })) as unknown as SignInResponse;
    localStorage.setItem("accessToken", `Bearer ${access}`);
    set({ isAuth: true });

    return access;
  },
}));

export default useAuthStore;
