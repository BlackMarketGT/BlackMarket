"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Console } from "console";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


    const firebaseConfig = {
      apiKey: "AIzaSyCAsJ4r-EPM3eTKduDOnGFJlj1vq6378EU",
      authDomain: "auth-demo-5219c.firebaseapp.com",
      projectId: "auth-demo-5219c",
      storageBucket: "auth-demo-5219c.firebasestorage.app",
      messagingSenderId: "275727416717",
      appId: "1:275727416717:web:4a5b61f47c60683bd991c4"
    };
    // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const auth = getAuth(app);
     const analytics = getAnalytics(app);


interface LoginState {
  email: string;
  password: string;
  isNewUser: boolean;
  fullName: string;
}


export default function Login() {
  const [loginData, setLoginData] = useState<LoginState>({
    email: "",
    password: "",
    isNewUser: false,
    fullName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.isNewUser) {
      createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          window.location.href = '/onboarding';
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    else {
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          window.location.href = '/dashboard';
        })
    }

    console.log(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        className="max-w-md w-full space-y-8 p-8 
             rounded-lg shadow"
      >
        <h2 className="text-center text-3xl font-bold">
          {loginData.isNewUser ? "Create Account" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {loginData.isNewUser && (
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-200"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 block w-full rounded-md bg-stone-700 border-gray-300 shadow-sm px-3 py-2"
                value={loginData.fullName}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md bg-stone-700 border-gray-300 shadow-sm px-3 py-2"
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md bg-stone-700 border-gray-300 shadow-sm px-3 py-2"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              {loginData.isNewUser ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() =>
              setLoginData((prev) => ({ ...prev, isNewUser: !prev.isNewUser }))
            }
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            {loginData.isNewUser
              ? "Already have an account? Sign in"
              : "Need an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
