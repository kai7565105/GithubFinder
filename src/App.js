import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
