"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export const useQueryParam = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const getQuery = (key: string): string | undefined => {
    return searchParams.get(key) ?? undefined;
  };

  const setQuery = (queries: { key: string; value: any }[]) => {
    const newParams = new URLSearchParams(searchParams.toString());
    queries.forEach((item) => {
      newParams.set(item.key, `${item.value}`);
    });
    router.replace(`${pathname}?${newParams.toString()}`);
  };

  const deleteQuery = (keys: string[]) => {
    const newParams = new URLSearchParams(searchParams.toString());
    keys.forEach((key) => newParams.delete(key));
    router.replace(`${pathname}?${newParams.toString()}`);
  };

  return { getQuery, setQuery, deleteQuery };
};
