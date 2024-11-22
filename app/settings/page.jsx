import React from "react";

export default function page() {
  const user = true;
  const subscription = false;
  return (
    <div className="relative flex flex-col ml-[200px] w-[calc(100% - 200px)">
      <div className="row">
        <div className="container">
          <h1 className="font-bold text-3xl">Settings</h1>
          <div className="h-[1px] w-full bg-slate-200 my-4"></div>
          <div className="flex flex-col">
            {!user ? (
              <>
                <div className="flex flex-cols justify-center items-center">
                  <div>image</div>
                  <h1 className="font-bold py-4">
                    Log in to your account to see your details.
                  </h1>
                  <button className="bg-green-500 py-1 w-[150px] rounded-sm">
                    Login
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h1 className="font-bold">Your subscription plan</h1>
                  <div>
                    {!subscription ? (
                      <>
                        <p className="my-4">Basic</p>
                        <button className="bg-green-500 py-2 px-4 rounded-md">Upgrade to premium</button>
                      </>
                    ) : (
                      <>
                        <p>Premium</p>
                      </>
                    )}
                  </div>
                  <div className="h-[1px] w-full bg-slate-200 my-4"></div>
                  <div></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
