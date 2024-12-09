import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import ApplicationPage from "./components/ApplicationPage/ApplicationPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/application" element={<ApplicationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
