'use client'
import { auth } from "@/app/firebase/config"
import { use } from "react";
import { useAuthState } from "react-firebase-hooks/auth"


export default function AuthProvider({ children }) {
    const userSession = typeof window !== 'undefined' ? window.localStorage.getItem('user') : null;
    const [user] = useAuthState(auth);
    if (!userSession && !user) {
        window.location.href = '/login';
    }
    return (
        <>
            {children}
        </>
    )
}