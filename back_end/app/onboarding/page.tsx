"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAnalytics, setUserProperties } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Add firebase database
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, off } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD_ark35n8AD3GUhvoORXT62Wp8BNG1qoc",
    authDomain: "blackmarket-2c3b4.firebaseapp.com",
    projectId: "blackmarket-2c3b4",
    storageBucket: "blackmarket-2c3b4.firebasestorage.app",
    messagingSenderId: "114831821794",
    appId: "1:114831821794:web:e33af53ce49c86586087bb",
    measurementId: "G-LYMG183JBS"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const user = getAuth(app);
// Initialize Firebase

function writeUserData(userId: any, name: any, email: any) {
  //Make sure our Data is clean
  const cleanName = name.trim();
  let firstName = "";
  let lastName = "";
  if (cleanName.includes(" ")) {
    const nameParts = cleanName.split(" ");
    firstName = nameParts[0];
    lastName = nameParts[1];
  } else {
    firstName = cleanName;
    lastName = "";
  }

  set(ref(db, "users/" + userId), {
    firstName: firstName,
    lastName: lastName,
    fullName: name,
    email: email,
  });
  console.log("User data added to database");
  window.location.href = "/dashboard";
}

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    birthday: "",
    username: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // Add user data to database
    writeUserData(
      user.currentUser?.uid,
      formData.fullName,
      user.currentUser?.email
    );
    // Navigate to next page after submission
    // window.location.href = '/dashboard';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 p-8 bg-black rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
            Welcome to your new account!
          </h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-stone-700 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-300"
              >
                Birthday
              </label>
              <input
                id="birthday"
                name="birthday"
                type="date"
                required
                className="appearance-none rounded-md bg-stone-700 relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.birthday}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none bg-stone-700 rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
