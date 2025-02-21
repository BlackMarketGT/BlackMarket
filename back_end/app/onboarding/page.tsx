"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db } from "@/firebase";

function writeUserData(userId: string, fullName: string, email: string, birthday: string, username: string) {
  const cleanName = fullName.trim();
  let firstName = "";
  let lastName = "";

  if (cleanName.includes(" ")) {
    const nameParts = cleanName.split(" ");
    firstName = nameParts[0];
    lastName = nameParts.slice(1).join(" ");
  } else {
    firstName = cleanName;
    lastName = "";
  }

  set(ref(db, "users/" + userId), {
    firstName,
    lastName,
    fullName,
    email,
    birthday,
    username,
  });

  console.log("User data added to database");
}

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    birthday: "",
    username: "",
  });

  const router = useRouter();

  const auth = getAuth();
  const currentUser = auth.currentUser;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // confirm user is logged in
    if (!currentUser) {
      console.error("Could not find user. Are you sure the user is signed in?");
      return;
    }

    // write user data to Realtime Database
    writeUserData(currentUser.uid, formData.fullName, currentUser.email || "", formData.birthday, formData.username);

    // go to dashboard (not set up yet)
    router.push("/dashboard");
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
