"use client";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { get, ref, set } from "firebase/database";
import { useRouter } from "next/navigation"; // <-- Use 'next/navigation'
import { auth, db, provider } from "@/firebase";

interface LoginState {
  email: string;
  password: string;
  isNewUser: boolean;
  fullName: string;
}

export default function Login() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check if user already exists
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        // new user, store data
        await set(userRef, {
          fullName: user.displayName,
          email: user.email,
        });
        router.push("/onboarding");
      } else {
        // existing user, nothing to do
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error with Google Sign-In:", error);
    }
  };

  const [loginData, setLoginData] = useState<LoginState>({
    email: "",
    password: "",
    isNewUser: false,
    fullName: "",
  });

  const [error, setError] = useState<string | null>(null);

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
          router.push("/onboarding");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then(() => {
          router.push("/dashboard");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
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

        {error && (
          <div className="text-red-500 text-center">
            {error}
          </div>
        )}

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

          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
          >
            Sign in with Google
          </button>
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
