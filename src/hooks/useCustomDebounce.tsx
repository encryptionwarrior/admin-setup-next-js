import { useEffect, useState } from "react";
import { useDebouncedCallback } from "./use-debounced-callback";

export function useDebounceValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const update = useDebouncedCallback(setDebouncedValue, delay);

  useEffect(() => {
    update(value);
  }, [value, update]);

  return debouncedValue;
}
