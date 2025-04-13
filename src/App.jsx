import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/profile.png"
              alt="Rishabh Gupta"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Personal Profile
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Rishabh Gupta
            </h1>
            <div className="mt-2 text-gray-600">
              <p className="text-base mb-4">
                Computer Science student at University of Lucknow with a passion
                for web development, design, and technology. Experienced in
                React, JavaScript, and Java.
              </p>

              <h2 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                My Hobbies
              </h2>
              <ul className="list-disc pl-5">
                <li>Web Development</li>
                <li>Designing using Canva</li>
                <li>Coding Challenges</li>
              </ul>

              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Contact
                </h2>
                <p className="text-sm">📧 inspiredrishabh@gmail.com</p>
                <p className="text-sm">📱 +91 6392526545</p>
                <p className="text-sm">
                  💼
                  <a
                    href="https://linkedin.com/in/inspiredrishabh"
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn: inspiredrishabh
                  </a>
                </p>
                <p className="text-sm">
                  ⚙️
                  <a
                    href="https://github.com/inspiredrishabh"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub: inspiredrishabh
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
