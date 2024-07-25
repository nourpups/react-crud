import { useMemo } from "react";

export const useSortedOwners = (owners, sort) => {
  return useMemo(() => {
    return sort !== ""
      ? [...owners].sort((a, b) => a[sort].localeCompare(b[sort]))
      : owners;
  }, [sort, owners]);
};

export const useOwners = (owners, sort, query) => {
  const sortedOwners = useSortedOwners(owners, sort);

  return useMemo(() => {
    return query !== ""
      ? sortedOwners.filter(({ quote }) =>
          quote.toLowerCase().includes(query.toLowerCase()),
        )
      : sortedOwners;
  }, [query, sortedOwners]);
};
