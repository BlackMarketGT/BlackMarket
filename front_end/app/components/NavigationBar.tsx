'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Button } from "@/components/ui/button";

{/* function to adjust image based on system theme */}
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const adjustImage = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(getSystemTheme());

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(getSystemTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (theme === "dark") {
    return "/bktmrktlogo_white.png";
  }
  return "/bktmrktlogo_blk.png";
};


const about: { title: string; description: string; href: string }[] = [
  {
    title: "For Buyers",
    description:
      "Learn more about the platform that makes it easy to find your product.",
    href: "/about/for-buyers",
  },
  {
    title: "For Sellers",
    description:
      "Learn more about the platform that makes it easy to sell your product.",
    href: "/about/for-sellers",
  },
  {
    title: "For Investors",
    description: "Learn more about Investment opportunities.",
    href: "/about/for-investors",
  },
];


export function NavigationBar() {
  const userSession = sessionStorage.getItem('user');
  const [user] = useAuthState(auth);
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-10">
        <NavigationMenuItem className="">
          <Image src={adjustImage()} alt="logo" width={25} height={25} />
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/" className={navigationMenuTriggerStyle()}>Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {about.map((about) => (
                <ListItem
                  key={about.title}
                  title={about.title}
                  href={about.href}
                >
                  {about.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {user && userSession ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Account
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <ListItem title="My Account" href="/account">
                  View and edit your account information
                </ListItem>
                <ListItem title="Dashboard" href="/dashboard">
                  View Your Dashboard
                </ListItem>
                <ListItem title="Sign Out" href="/login" className="text-red-500" onClick={() => {
                  sessionStorage.removeItem('user');
                  auth.signOut();
                }}>
                  Sign Out of BlackMarket
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ):(
          <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";