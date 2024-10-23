import useSWR from "swr";
import useSWRInmmutable from "swr/immutable";

import { fetchAPI } from "lib/api-calls";

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);
  return { data, error };
}

export function useProductID(id: string) {
  const { data, error, mutate } = useSWR(`/product/${id}`, fetchAPI);
  return { data, error, mutate };
}

export function useProductsDest() {
  const { data, error } = useSWRInmmutable(`/sync-products-dest`, fetchAPI);
  return { data, error };
}

export function useSearchProducts(q, limit, offset) {
  const { data, error, mutate } = useSWR(
    `/search?limit=${limit}&offset=${offset}&q=${q}&`,
    fetchAPI
  );

  return { data, error, mutate };
}
