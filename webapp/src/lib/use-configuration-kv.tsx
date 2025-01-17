import useSWR from 'swr';
import { fetchApiJson } from './api-fetcher';
import { useCallback } from 'react';


interface ConfigurationKv {
  key: string
  value: string
}


export function useConfigurationKV(key: string) {
  const url = `/configuration/kv/${key}`;
  const { data, error, isLoading, mutate: mutateCache } = useSWR<ConfigurationKv>(url, fetchApiJson);

  const mutate = useCallback<(newValue: string) => Promise<void>>(async (newValue) => {
    if (!data) return;

    await fetchApiJson(url, {
      method: 'PUT',
      body: JSON.stringify({ key, value: newValue }),
    });

    mutateCache({ ...data, value: newValue }, { revalidate: false });

  }, [key, url, mutateCache, data]);

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}
