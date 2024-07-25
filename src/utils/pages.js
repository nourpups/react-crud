

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getCurrentPortion = (limit, page, defaultLimit) => {
  return limit * page - defaultLimit
}