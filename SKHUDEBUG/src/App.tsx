import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import JobOfferPage from "./pages/JobOfferPage";
<<<<<<< HEAD
import Ranking from './pages/RankingPage';
=======
import HunterPage from "./pages/HunterPage";
>>>>>>> 62c1f187affd96cc9b218d9450e0da2e7b4ebab2

function App() {
  return (
    <Routes>
      <Route path="/hunter" element={<HunterPage />} />
      <Route path="/joboffer" element={<JobOfferPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/ranking" element={<Ranking />} />

    </Routes>
  );
}

export default App;




