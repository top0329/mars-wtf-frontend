import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useAPI = () => {
  const router = useRouter ();
  
  const api = axios.create({
    // baseURL: 'http://localhost:5050/api',
    baseURL: 'https://vulcan-launchpad-1-0-0-backend.onrender.com/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // api.interceptors.response.use(
  //   (res) => res,
  //   (err) => {
  //     if (err.response.status === 401) {
  //       // if (localStorage.getItem('token')) {
  //       //   localStorage.setItem('expired', true);
  //       // }
  //       axios.defaults.headers.common['x-auth-token'] = undefined;
  //       router.push("/");
  //     }
  //     return Promise.reject(err);
  //   }
  // );

  return api;
};

export default useAPI;
