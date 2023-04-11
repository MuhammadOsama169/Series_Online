import React from 'react';
import googleLogo from '../assets/google-logo.jpg';
import facebookLogo from '../assets/facebook-logo.png';

const google = () => {
  window.open('http://localhost:5000/auth/google', '_self');
};
const github = () => {
  window.open('http://localhost:5000/auth/github', '_self');
};
export const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-screen w-full bg-gray-100">
      {/* Left side */}
      <div className="flex flex-col w-full sm:w-1/2 justify-center items-center sm:items-start sm:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none mb-6">
          Sign in to your account
        </h1>
        <p className="text-gray-600 mb-6">
          Enter your email and password to access your account
        </p>
        <form className="flex flex-col w-full">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-200 rounded-lg py-3 px-4 mb-4 w-full"
            placeholder="Email"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-200 rounded-lg py-3 px-4 mb-4 w-full"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg mb-4"
          >
            Sign In
          </button>
          <a href="#" className="text-gray-600">
            Forgot password?
          </a>
        </form>
      </div>
      {/* Right side */}
      <div className="flex w-full sm:w-1/2 justify-center items-center">
        <div className="max-w-md w-full">
          <img
            src="https://source.unsplash.com/random/800x600"
            alt="Login"
            className="rounded-lg shadow-lg"
          />
          <div className="mt-8 flex justify-center w-full">
            <div className="w-full sm:w-auto">
              <button
                onClick={google}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg border border-gray-400"
              >
                <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
                Sign in with Google
              </button>
            </div>
            <div className="w-full sm:w-auto">
              <button
                onClick={github}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg border border-gray-400"
              >
                <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
                Sign in with Github
              </button>
            </div>
            <div className="w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg">
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
