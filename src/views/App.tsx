import { Layout } from "antd";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { PATHS } from "../constants/paths";
import { useAppDispatch } from "../store/hooks";
import { setAuthLoading, setAuthUser } from "../store/slices/authSlice";
import { setupAuthListener } from "../utils/authListener";
import { supabase } from "../utils/supabaseClient";
import "./App.scss";
import Header from "./common/Header/Header";
import { ScrollToTop } from "./common/ScrollToTop";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import TarotAR from "./Page/Tarot/TarotAR";
import TodoDetail from "./Page/TodoDetail/TodoDetail";
import TodoList from "./Page/TodoList/TodoList";

const { Content } = Layout;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        dispatch(setAuthUser({ user: session.user, session }));
      } else {
        dispatch(setAuthLoading(false));
      }
    });

    const subscription = setupAuthListener();

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);

  return (
    <Layout className="app-layout">
      <ScrollToTop />
      <Header />
      <Content className="app-content">
        <Switch>
          <Route path={PATHS.HOME} component={Home} exact />
          <ProtectedRoute path={PATHS.TODO} component={TodoList} exact />
          <ProtectedRoute
            path={PATHS.TODO_CREATE}
            component={TodoDetail}
            exact
          />
          <ProtectedRoute path={PATHS.TODO_EDIT} component={TodoDetail} exact />
          <ProtectedRoute
            path={PATHS.TODO_DETAIL}
            component={TodoDetail}
            exact
          />
          <ProtectedRoute path={PATHS.TAROT} component={TarotAR} exact />
          <Route path={PATHS.LOGIN} component={Login} exact />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
