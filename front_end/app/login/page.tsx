'use client'
import { NavigationBar } from "../components/NavigationBar";
import {useState} from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


// import { Select } from  "@/components/ui/select";
import { Eye, EyeOff, Mail} from "lucide-react"
import { get, push, ref, set } from "firebase/database";

import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from "@/app/firebase/config";

import {useRouter} from 'next/navigation';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState(false);
 
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUser) {
      try {
        await createUserWithEmailAndPassword(email, password);
        console.log("User created successfully");
        setEmail('');
        setPassword('');
        sessionStorage.setItem('user', 'true');
        router.push('/');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await signInWithEmailAndPassword(email, password);
        console.log("User signed in successfully");
        setEmail('');
        setPassword('');
        sessionStorage.setItem('user', 'true');
        router.push('/');

      } catch (error) {
        console.error(error);
      }
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("User signed in with Google successfully");
      sessionStorage.setItem('user', 'true');
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <div className="fixed top-0 w-full flex justify-center items-center pt-4 z-10">
      <NavigationBar />
    </div>
    <div className = "min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className = "text-center space-y-2">

          <Card>
            <CardHeader>
              <CardTitle>Welcome {newUser ? "to BlackMarket" : "Back"}</CardTitle>
              <CardDescription>{newUser ? "Create an account to get started" : "Enter your credentials to access your account"}</CardDescription>
            </CardHeader>
      
            <CardContent>
               {newUser ? (
                <>
                <form onSubmit={handleSubmit}>
                <div className="text-left mb-2">
                <Label htmlFor = "email">Email</Label>
                 
                 <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
               />
               </div>
                 <div className="text-left mb-4">
                   <Label htmlFor = "password">Password</Label>
                   <div className ="relative">
                   <Input
                     type = {visible ? "text" : "password"}
                     id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                   />
                   <button
                   type="button"
                     onClick={() => setVisible(!visible)}
                     className = "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                   >
                     {visible ? <Eye size={20}/> : <EyeOff size={20} />}
                   </button>
                   </div>
                 </div>
                 <Button type ="submit" className = "w-full mt-4">
                   Sign up
                 </Button>
                 </form>
                 <div className ="grid grid-cols-1 gap-4 mt-4">
                   <Button variant ="outline" className ="w-full" onClick={() => signInWithGoogle()}>
                     <Mail className="mr-2 h-4 w-4"/>
                     Sign up with Google
                   </Button>
                 </div>
                 <div className = "text-center text-sm mt-4">
                   Already have an account?&nbsp;
                   <button onClick={() => setNewUser(false)} className="text-primary-500 hover:text-primary-600 font-medium underline">
                     Sign in 
                   </button>
                 </div>
                 </>
               ) : (<>
                <form onSubmit={handleSubmit}>
               <div className="text-left mb-2">
               <Label htmlFor = "email">Email</Label>
                
                <Input
                   id="email"
                   type="email"
                   placeholder="m@example.com"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
              />
              </div>
                <div className="text-left mb-4">
                  <Label htmlFor = "password">Password</Label>
                  <div className ="relative">
                  <Input
                    type = {visible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                  type="button"
                    onClick={() => setVisible(!visible)}
                    className = "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {visible ? <Eye size={20}/> : <EyeOff size={20} />}
                  </button>
                  </div>
                </div>
                <div className = "flex items-center justify-between">
                  <div className = "flex items-center space-x-1">
                    <Checkbox id = "remember" />
                    <label htmlFor="remember" >Remember me</label>
                  </div>
                <a href ="#" className = "text-sm text-primary-500 hover:text-primary-600 underline">
                  Forgot Password?
                </a>
                </div>
                <Button type ="submit" className = "w-full mt-4">
                  Sign in
                </Button>
                </form>
                <div className ="grid grid-cols-1 gap-4 mt-4">
                  <Button variant ="outline" className ="w-full" onClick={() => googleSignIn()}>
                    <Mail className="mr-2 h-4 w-4"/>
                    Sign in with Google
                  </Button>
                </div>
                <div className = "text-center text-sm mt-4">
                  Don't have an account?&nbsp;
                  <button onClick={() => setNewUser(true)} className="text-primary-500 hover:text-primary-600 font-medium underline">
                    Sign up
                  </button>
                </div>
                </>)}
            </CardContent>
          </Card>
      </div>
  </div>
  </>

  );
};

export default LoginPage;
