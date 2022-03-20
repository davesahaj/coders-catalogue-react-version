import "./App.css";
import Header from "./components/Header";
import Contests from "./components/Contests";
import Settings from "./components/Settings";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncContests,
  isLoading as loading,
} from "./features/contests/contestSlice";
import Spinner from "./components/Spinner";

function App() {
  const isLoading = useSelector(loading);
  const [settings, setSettings] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncContests());

    if (!localStorage.getItem("enabledSites")) {
      localStorage.setItem("enabledSites", JSON.stringify([]));
    }
  }, [dispatch]);

  return (
    <>
      <Header
        toggleSettings={() => setSettings((prevSetting) => !prevSetting)}
      />
      {isLoading ? <Spinner /> : settings ? <Settings /> : <Contests />}
    </>
  );
}

export default App;
