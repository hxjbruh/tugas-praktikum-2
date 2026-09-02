"use client";

import { useCallback, useSyncExternalStore } from "react";

type SetValue<T> = T | ((currentValue: T) => T);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-storage-update", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-storage-update", callback);
  };
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const getSnapshot = useCallback(() => {
    try {
      return window.localStorage.getItem(key) ?? JSON.stringify(initialValue);
    } catch {
      return JSON.stringify(initialValue);
    }
  }, [key, initialValue]);

  const getServerSnapshot = useCallback(() => JSON.stringify(initialValue), [initialValue]);
  const rawValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value = JSON.parse(rawValue) as T;

  const setValue = useCallback((nextValue: SetValue<T>) => {
    try {
      const currentValue = JSON.parse(window.localStorage.getItem(key) ?? JSON.stringify(initialValue)) as T;
      const resolvedValue = typeof nextValue === "function"
        ? (nextValue as (currentValue: T) => T)(currentValue)
        : nextValue;
      window.localStorage.setItem(key, JSON.stringify(resolvedValue));
      window.dispatchEvent(new Event("local-storage-update"));
    } catch (error) {
      console.warn(`Gagal menyimpan localStorage untuk key ${key}`, error);
    }
  }, [key, initialValue]);

  return [value, setValue] as const;
}
