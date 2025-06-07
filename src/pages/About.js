import React from "react";

const About = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="container mt-3">
          <div className="main-content relative bg-gray-900 p-5">
            <section id="about" className="py-8 px-4">
              <h2 className="text-2xl font-bold mb-4">About This Tool</h2>

              <p className="text-gray-700 mb-4">
                This tool helps you convert Base64-encoded image data into
                viewable images directly in your browser. It's designed for
                developers, designers, and testers who frequently deal with
                encoded images in APIs, databases, or frontend applications.
              </p>

              <p className="text-gray-700 mb-4">
                Just paste your Base64 string into the input field and preview
                the image instantly. You don’t need to worry about formatting —
                the tool is smart enough to clean up common input mistakes
                automatically.
              </p>

              {/* <p className="text-gray-700 mb-4">
    One of the standout features is the ability to <strong>download the generated image</strong> with a single click. After your image is previewed, simply hit the <em>"Download Image"</em> button to save it locally in its correct format.
  </p> */}

              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>✅ Instant Base64-to-image rendering in the browser</li>
                <li>
                  ✅ One-click <strong> Download Image </strong> button to save
                  the generated image
                </li>
                <li>
                  ✅ No file uploads — works entirely on your device for privacy
                </li>
                <li>
                  ✅ Automatically removes surrounding <code>"quotes"</code>{" "}
                  from pasted strings
                </li>
                <li>
                  ✅ Automatically adds missing{" "}
                  <code>data:image/jpeg;base64,</code> prefix
                </li>
                <li>✅ Supports JPEG, PNG and JPG formats</li>
              </ul>

              <p className="text-gray-700">
                Whether you're working with embedded images in APIs, decoding
                image data from a CMS, or testing frontend input — this tool
                ensures fast, flexible, and user-friendly image previews.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
