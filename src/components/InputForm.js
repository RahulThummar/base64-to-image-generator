import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";

const InputForm = () => {
  const { getQrCode, inputValue, setInputValue } = useContext(InputContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setInputValue({ ...inputValue });
  }, []);

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, url: e.target.value });
  };

  const handleSubmit = () => getQrCode();

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
  }, [inputValue.url, inputValue.color]);

  useEffect(() => {
    setImageUrl(inputValue.url);
  }, [inputValue.url]);

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <h2 className="mt-5">Base64 to Image converter</h2>
        <div className="input-container mt-3">
          <textarea
            rows={7}
            type="url"
            className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm text-area"
            placeholder="Enter base64 url here..."
            value={inputValue.url}
            onChange={handleOnChange}
          />
        </div>
        <div className="container mt-5">
          <div className="main-content relative">
            {imageUrl && (
              <div className="image-container relative group">
                <img src={imageUrl} alt="Preview" className="preview-image" />
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
