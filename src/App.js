import { createContext, useState } from "react";
import InputForm from "./components/InputForm";

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
      <InputForm />
    </InputContext.Provider>
  );
}

export default App;
