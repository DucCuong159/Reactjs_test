import { store } from "../store";
import { clearAuth, setAuthUser } from "../store/slices/authSlice";
import { supabase } from "./supabaseClient";

export const setupAuthListener = () => {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    switch (event) {
      case "SIGNED_IN":
      case "TOKEN_REFRESHED":
      case "USER_UPDATED":
        if (session) {
          store.dispatch(setAuthUser({ user: session.user, session }));
        }
        break;

      case "SIGNED_OUT":
        store.dispatch(clearAuth());
        break;
    }
  });

  return data.subscription;
};
