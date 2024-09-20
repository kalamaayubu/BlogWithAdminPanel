import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from './components/Routing/Router.jsx'; // Import the router configuration
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import { useState } from "react";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null); // Manage authToken state

  return (
    // <ErrorBoundary>
      <div className="dark:bg-gray-900 relative text-black dark:text-white transition-all duration-[800ms]">
        <Header />
          <AppRouter authToken={authToken} setAuthToken={setAuthToken} />
        <Footer />
      </div>
    // </ErrorBoundary>
  );
}

export default App;
