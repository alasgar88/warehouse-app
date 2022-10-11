export const initialPaginationSize = 6;

export const makePaginationList = (
  totalNumber,
  paginationSize = initialPaginationSize
) => {
  if (totalNumber <= paginationSize) {
    return [1];
  }
  const pages = Math.ceil(totalNumber / paginationSize);

  return Array.from(Array(pages), (_, index) => index + 1);
};
