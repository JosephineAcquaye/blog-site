"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/web/theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SearchInput } from "./Searchinput";


export function Navbar() {
  const { isAuthenticated, isLoading} = useConvexAuth();
  const router = useRouter(); 
    return (
     <nav className="w-full  py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
            <Link href="/">
            <h1 className="text-3xl font-bold">
                .blog<span className="text-primary">It.</span>
            </h1>
            </Link>

            <div className="flex items-center gap-2">
            <Link className={buttonVariants({variant:"ghost"})}href="/">Home</Link>
            <Link className={buttonVariants({variant:"ghost"})}href="/blog">Blog</Link>
            <Link className={buttonVariants({variant:"ghost"})}href="/create">Create</Link>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="hidden md:block mr-2">
                <SearchInput />
            </div>
        {isLoading ? null : isAuthenticated ? (
            <Button
             onClick={() => authClient.signOut({
               fetchOptions: { 
                onSuccess: () => {
                    toast.success("Logged out sucessfully");
                    router.push("/");
                },
                onError: (error) => {
                    toast.error(error.error.message);
                },
                }, 
             })}
             
            >
                Log out
            </Button>
        ) : (
            <>
           <Link className={buttonVariants()} href="/auth/sign-up">
        Sign up
        </Link>
        <Link className={buttonVariants( {variant: "outline"})} href="/auth/login">Login</Link> 
            </>
        )}
        <ThemeToggle />
        </div>
    </nav>
  );
}