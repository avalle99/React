import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";

import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header></Header>
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}

      <Counter />
    </Fragment>
  );
}

export default App;
