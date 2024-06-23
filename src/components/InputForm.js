import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";

const InputForm = () => {
  const { getQrCode, inputValue, setInputValue } = useContext(InputContext);
  const [userInput, setUserInput] = useState("");
  const [isValidBase64, setIsValidBase64] = useState(false);

  useEffect(() => {
    if (inputValue.url) {
      const prefixRegex = /^data:image\/(jpeg|png|jpg);base64,/;
      const newInputValue = inputValue.url.replace(prefixRegex, "");
      setUserInput(newInputValue);
      setIsValidBase64(inputValue.url.startsWith("data:image"));
    }
  }, [inputValue.url]);

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    let value = userInput.trim();

    // Check if the input already has a valid base64 prefix
    if (!value.startsWith("data:image")) {
      // Add prefix if it's missing
      value = "data:image/jpeg;base64," + value; // Default to JPEG prefix
    }

    setInputValue({ ...inputValue, url: value });
    getQrCode();
  };

  const handleDownloadImage = () => {
    if (!inputValue.url) return;

    const link = document.createElement("a");
    link.href = inputValue.url;
    link.download = "downloaded_image.png"; // Change the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    handleSubmit();
  }, [userInput]);

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <h2 className="mt-5">Base64 to Image Generator</h2>
        <div className="input-container mt-3">
          <textarea
            autoFocus
            rows={7}
            type="url"
            className="w-full text-area"
            placeholder="Enter base64 string here..."
            value={userInput}
            onChange={handleOnChange}
          />
        </div>
        <div className="container mt-5">
          <div className="main-content relative bg-gray-900 p-5">
            {isValidBase64 && (
              <div className="image-container relative group">
                {inputValue.url.includes("/9j" || "iVBORw0KGgo" || "/9j") && (
                  <img
                    src={inputValue.url}
                    alt="Preview"
                    className="preview-image"
                  />
                )}
                <button
                  onClick={handleDownloadImage}
                  className="download-button absolute top-0 right-0 bg-blue-400 px-4 py-2 text-white rounded-sm hover:bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
