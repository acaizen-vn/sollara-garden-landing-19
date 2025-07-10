import { useState, useEffect } from 'react';

export const useBackendStorage = <T>(endpoint: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Erro ao carregar dados: ${res.statusText}`);
        const data = await res.json();
        setStoredValue(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  const setValue = async (value: T | ((val: T) => T)) => {
    setLoading(true);
    setError(null);
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      const res = await fetch(endpoint, {
        method: 'POST', // ajuste para PUT ou POST conforme sua API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(valueToStore),
      });
      if (!res.ok) throw new Error(`Erro ao salvar dados: ${res.statusText}`);
      const savedData = await res.json();
      setStoredValue(savedData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [storedValue, setValue, loading, error] as const;
};
