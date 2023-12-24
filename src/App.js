import { useState } from "react";
import { PASSWORD } from "./const";
import WelcomePage from "./pages/welcome";
import MainPage from "./pages/main";

function App() {
  const [page, setPage] = useState(0);

  const onSubmitPassword = (value) => {
    if (value === PASSWORD) {
      setPage(1);
      return true;
    } else {
      return false;
    }
  };

  const pages = [
    <WelcomePage onSubmitPassword={onSubmitPassword} />,
    <MainPage />,
  ];

  return <div className="App">{pages[page]}</div>;
}

export default App;
