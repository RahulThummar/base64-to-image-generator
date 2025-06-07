import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

// Pages
import Convert from "../src/pages/Convert";
import Examples from "../src/pages/Examples";
import About from "../src/pages/About";

// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getQrCode = async () => {
    try {
      setLoading(true);
      setResponse({ text: inputValue.url, color: inputValue.color });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
  };

  return (
    <InputContext.Provider value={value}>
      <Router>
  <div className="min-h-screen flex flex-col">
    <Header />

    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Convert />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/support" element={<Support />} /> */}
      </Routes>
    </main>

    {/* <Footer /> */}
  </div>
</Router>

    </InputContext.Provider>
  );
}

export default App;
