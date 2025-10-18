import { AppDataProvider } from "./context/AppDataContext";
import GlobalLoader from "./components/GlobalLoader";
import { Balance } from "./screens/Balance";

const App = () => {
  return (
    <AppDataProvider>
      <GlobalLoader />
      <Balance />
    </AppDataProvider>
  );
};

export default App;
