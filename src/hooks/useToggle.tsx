import { useState, useCallback } from 'react';

export default function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);
  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);
  return [value, onToggle];
}
