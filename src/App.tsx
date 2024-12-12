import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import ApplicationPage from "./components/ApplicationPage/ApplicationPage";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signin" />;
};
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        <Route
          path="/application"
          element={
            <PrivateRoute>
              <ApplicationPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
