"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth} from "@/app/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const DashboardPage = () => {
  const router = useRouter()
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem('user');
  if (!user && !userSession) {
    window.location.href = '/login';
  }
  return (
  <Card className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-center ">User Card</CardTitle>
    </CardHeader>
    <CardContent>
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
        <p>Phone: {user?.phoneNumber}</p>
        <Button onClick={() => {auth.signOut()
          sessionStorage.removeItem('user');
          router.push('/login');
        }}>Sign Out</Button>
    </CardContent>
  </Card>
  );
}

export default DashboardPage;

