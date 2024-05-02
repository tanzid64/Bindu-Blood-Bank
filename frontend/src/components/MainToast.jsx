"use client";

import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  removeToast,
  selectCurrentMessage,
  selectCurrentType,
} from "../redux/slices/toastSlice";
import { useEffect } from "react";

export default function MainToast() {
  const dispatch = useDispatch();
  const message = useSelector(selectCurrentMessage);
  const type = useSelector(selectCurrentType);
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(removeToast()); // Dispatch action to reset message after delay
      }, 5000); // Set the delay time in milliseconds, e.g., 3000 ms = 3 seconds
      return () => clearTimeout(timer); // Clear the timeout on component unmount or message change
    }
  }, [dispatch, message]);
  return (
    <div className="flex justify-end absolute right-0 top-0">
      {type === "success" && message && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{message}</div>
          <Toast.Toggle />
        </Toast>
      )}
      {type === "danger" && message && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{message}</div>
          <Toast.Toggle />
        </Toast>
      )}
      {type === "warning" && message && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{message}</div>
          <Toast.Toggle />
        </Toast>
      )}
    </div>
  );
}
