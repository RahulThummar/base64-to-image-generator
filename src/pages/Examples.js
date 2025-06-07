import React from "react";
import testImg from "../assets/testImg.jpg";

const Examples = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="container mt-3">
          <div className="main-content relative bg-gray-900 p-5">
            <section id="examples" className="py-10 px-6 bg-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
                  Example Base64 Images
                </h2>

                <p className="text-gray-700 mb-4">
                  Below is an example of a valid Base64 image string. You can
                  copy and paste this into the input field on the Home page to
                  test the tool. Once the image is rendered, you’ll also see a{" "}
                  <strong>"Download Image"</strong> button that allows you to
                  save the image to your device directly — no extra steps
                  needed!
                </p>

                <label className="block font-medium text-gray-600 mb-2">
                  Example Base64 String:
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded text-sm font-mono bg-gray-50"
                  rows="6"
                  readOnly
                  value={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE...  OR  /9j/4AAQSkZJRgABAQE...`}
                />

                <div className="mt-6">
                  <label className="block font-medium text-gray-600 mb-2">
                    Rendered Image:
                  </label>
                  <img
                    src={testImg}
                    alt="Example Preview"
                    className="rounded shadow-md border max-w-xs"
                  />
                </div>

                <p className="text-gray-600 text-sm mt-4">
                  💡 Tip: You don’t have to include the full prefix
                  <code className="mx-1 px-1 bg-gray-200 rounded text-sm">
                    data:image/jpeg;base64,
                  </code>{" "}
                  — the tool will add it automatically if needed.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
