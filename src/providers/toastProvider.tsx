/* eslint-disable @next/next/no-img-element */
"use client"
import { ReactElement, createContext } from "react";
import { Toaster, toast } from "react-hot-toast";

interface IToastContext {
  showToast: (type: string, str: string) => void;
}

export const ToastContext = createContext<IToastContext | undefined>(undefined);

const ToastProvider = ({ children }: { children: ReactElement }) => {
  const showToast = (str: string, type: string) => {
    switch (type) {
      case "success":
        toast.custom((t) => (
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"
              } max-w-96  dark:bg-gray-900 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black dark:text-white`}
            onClick={() => toast.dismiss(t.id)}
            style={{ zIndex: "100000!important", width: '320px' }}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-center">
                <img
                  src="/images/success.png"
                  alt=""
                  width={40}
                  height={40}
                  sizes="100vw"                    
                />
                <div className="ml-3 flex items-center">
                  <p className="text-sm font-medium text-light-gray">{str}</p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => toast.remove(t.id)}
                className="w-full border border-transparent rounded-full flex items-center justify-center text-sm font-medium text-light-gray hover:text-light-gray focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ));
        break;
      case "warning":
        toast.custom((t) => (
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"
              } max-w-96  dark:bg-gray-900 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black dark:text-white`}
            onClick={() => toast.dismiss(t.id)}
            style={{ zIndex: "100000!important", width: '320px' }}
          >
            <div className="flex-1 p-4">
              <div className="flex items-center">
                <img
                  src="/images/warning.png"
                  alt=""
                  width={40}
                  height={40}
                  sizes="100vw"                  
                />
                <div className="ml-3 flex items-center">
                  <p className="text-sm font-medium text-light-gray">{str}</p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => toast.remove(t.id)}
                className="w-full border border-transparent rounded-full flex items-center justify-center text-sm font-medium text-light-gray hover:text-light-gray focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ));
        break;
      case "question":
        toast.custom((t) => (
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"
              } max-w-96  dark:bg-gray-900 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black dark:text-white`}
            onClick={() => toast.dismiss(t.id)}
            style={{ zIndex: "100000!important", width: '320px' }}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-center">
                <img
                  src="/images/question.png"
                  alt=""
                  width={40}
                  height={40}
                  sizes="100vw"                     
                />
                <div className="ml-3 flex items-center">
                  <p className="text-sm font-medium text-light-gray">{str}</p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => toast.remove(t.id)}
                className="w-full border border-transparent rounded-full flex items-center justify-center text-sm font-medium text-light-gray hover:text-light-gray focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ));
        break;
      case "error":
        toast.custom((t) => (
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"
              } max-w-96  dark:bg-gray-900 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black dark:text-white`}
            onClick={() => toast.dismiss(t.id)}
            style={{ zIndex: "100000!important", width: '320px' }}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-center">
                <img
                  src="/images/fail.png"
                  alt=""
                  width={40}
                  height={40}
                  sizes="100vw"                     
                />
                <div className="ml-3 flex items-center">
                  <p className="text-sm font-medium text-light-gray">{str}</p>
                </div>
              </div>
            </div>
            <div className="">
              <button
                onClick={() => toast.remove(t.id)}
                className="w-full border border-transparent rounded-full flex items-center justify-center text-sm font-medium text-light-gray hover:text-light-gray focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ));
        break;
    }
  };
  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </ToastContext.Provider>
  );
};
export default ToastProvider;
