import { Setter } from '@/types/types';
import { useEffect, useState } from 'react';

/**
 * Custom hook to use local storage with a key and a default value.
 *
 * @export
 * @template T The type of the value to store in local storage
 * @param {string} key The key to use in local storage
 * @param {T} defaultValue The default value to use if the key is not found in local storage
 * @return {[T, Setter<T>]} A tuple with the value and the setter
 */
export default function useLocalStorage<T>(key: string, defaultValue: T): [T, Setter<T>] {
    // Retrieve the item from local storage
    const item = localStorage.getItem(key)?.toString();

    // Initialize the state
    const [value, setValue] = useState<T>(item ? (JSON.parse(item) as T) : defaultValue);

    // Save the state to local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // Return the state and the setter
    return [value, setValue];
}
