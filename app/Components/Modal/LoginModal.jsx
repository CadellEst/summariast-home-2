"use client";

import { Modal } from "@mui/material";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signInWithGoogle } from "@/app/Components/Auth";



export default function LoginModal() {


  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);



  return (
    <>


      <Modal
        open={isOpen}
        onClose={handleClose}
        className="flex justify-center items-center"
      >
         <div className="flex flex-col items-center justify-center bg-gray-50 py-8 px-8 sm:px-6 lg:px-8 rounded-lg overflow-hidden shadow-lg">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 px-8">
            Sign up to Summarist
          </h2>
        </div>
        <div className="flex items-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            className="w-8 bg-white rounded-md absolute transform translate-x-0.5 z-10"
            alt=""
          />
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign up with Google
          </button>
        </div>

        <div className="relative flex justify-center items-center text-sm">
            <div className="h-[1px] w-[40%] bg-slate-500 opacity-40"></div>
          <span className="px-6 text-gray-500">Or</span>
            <div className="h-[1px] w-[40%] bg-slate-500 opacity-40"></div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-950 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign up
            </button>
          </div>

          <div></div>
        </form>
        <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-950 bg-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Already have an account?
            </button>
      </div>
    </div>
      </Modal>
    </>
  );
}
