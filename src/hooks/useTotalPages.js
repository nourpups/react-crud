import {useMemo} from "react";

export const useTotalPages = (totalPages) => {
  return useMemo(() => {
    let pages = [];
    for(let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages
  }, [totalPages]);
}