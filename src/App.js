import { useEffect, useState } from "react";
import { PASSWORD } from "./const";
import WelcomePage from "./pages/welcome";
import MainPage from "./pages/main";
import MusicPlayer from "./components/music-player";

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

  return (
    <>
      <MusicPlayer
        url={process.env.PUBLIC_URL + "/audios/jingle-bell-rock.mp3"}
      />
      <div className="App">{pages[page]}</div>
    </>
  );
}

export default App;
