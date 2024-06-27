import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Ranking from './pages/RankingPage';
import Home from './pages/Home';
import { users as initialUsers } from './utlis/users';



function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ranking" element={<Ranking initialUsers={initialUsers} />} />

    </Routes>
  );
}

export default App;

