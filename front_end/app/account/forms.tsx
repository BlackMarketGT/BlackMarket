'use client'

import { use, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase/config";
import { updatePassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";


export function PasswordForm() {
  const userSession = sessionStorage.getItem('user');
  const router = useRouter()
  const [user] = useAuthState(auth);
  if (!user && !userSession) {
    router.push('/login');
  }
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user) {
        throw new Error("No user found");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      await updatePassword(user, password);
      toast({
        title: "Password updated successfully",
        description: "Your password has been updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error updating password",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-left mb-2">
        <Label htmlFor="password">Password</Label>

        <Input
          id="password"
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>

        <Input
          id="confirmPassword"
          type="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="mt-4">Update Password</Button>
    </form>
  )
}

export function AddressForm() {
  const router = useRouter()
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem('user');
  if (!user && !userSession) {
    router.push('/login');
  }
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [aptUnit, setAptUnit] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user) {
        throw new Error("No user found");
      }
      // check if user exists in db
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
         // create user in db
         await setDoc(userRef, {
          address: address,
          city: city,
          state: state,
          zip: zip,
         })
      } else {
        // update user in db
        await updateDoc(userRef, {
          address: address,
          address2: aptUnit,
          city: city,
          state: state,
          zip: zip,
        })
      }
      toast({
        title: "Address updated successfully",
        description: "Your address has been updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error updating address",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-left mb-2">
        <Label htmlFor="streetAddress">Street Address</Label>

        <Input
          id="address"
          type="text"
          placeholder="1234 Main St"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="aptUnit">Apt/Unit</Label>

        <Input
          id="aptUnit"
          type="text"
          placeholder="Apt/Unit"
          value={aptUnit}
          onChange={(e) => setAptUnit(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="city">City</Label>

        <Input
          id="city"
          type="text"
          placeholder="Atlanta"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="state">State</Label>

        <Input
          id="state"
          type="text"
          placeholder="GA"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="zip">Zip</Label>

        <Input
          id="zip"
          type="text"
          placeholder="30339"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="mt-4">Update Address</Button>
    </form>
  )
}

export function PersonalInfoForm() {
  const router = useRouter()
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem('user');
  if (!user && !userSession) {
    router.push('/login');
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user) {
        throw new Error("No user found");
      }
      // check if user exists in db
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        // create user in db
        await setDoc(userRef, {
          name: name,
          phone: phone,
          company: company,
        })
      } else {
        // update user in db
        await updateDoc(userRef, {
          name: name,
          phone: phone,
          company: company,
        })
      }
      // update name in auth
      await updateProfile(user, {
        displayName: name,
      })
      toast({
        title: "Account updated successfully",
        description: "Your account has been updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error updating profile",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-left mb-2">
        <Label htmlFor="companyName">Your Name</Label>

        <Input
          id="name"
          type="text"
          placeholder={auth.currentUser?.displayName ? auth.currentUser?.displayName : "Jimmy Johnson"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="confirmPassword">Company</Label>

        <Input
          id="company"
          type="text"
          placeholder="ACME"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div className="text-left mb-2">
        <Label htmlFor="phone">Phone Number</Label>

        <Input
          id="phone"
          type="text"
          placeholder="1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="mt-4">Update Personal Info</Button>
    </form>
  )
}

export default {PasswordForm, AddressForm, PersonalInfoForm};