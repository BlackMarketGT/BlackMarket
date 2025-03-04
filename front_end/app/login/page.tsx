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
import { Eye, EyeOff, Github, Mail} from "lucide-react"
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false)
  

  return (
    <>
    <div className="fixed top-0 w-full flex justify-center items-center pt-4 z-10">
      <NavigationBar />
    </div>
    <div className = "min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className = "text-center space-y-2">

          <Card>
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
      
            <CardContent>
               <form>
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
                </form>
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
                <div className ="grid grid-cols-1 gap-4 mt-4">
                  <Button variant ="outline" className ="w-full">
                    <Mail className="mr-2 h-4 w-4"/>
                    Sign in with Google
                  </Button>
                </div>
                <div className = "text-center text-sm mt-4">
                  Don't have an account?&nbsp;
                  <a href ="#" className="text-primary-500 hover:text-primary-600 font-medium underline">
                    Sign up
                  </a>
                </div>
            </CardContent>
          </Card>
      </div>
  </div>
  </>

  );
};

export default LoginPage;
