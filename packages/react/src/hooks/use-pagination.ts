interface usePaginationProps {
  count: number;
  limit: number;
  page: number;
  maxDisplay?: number;
}

export function usePagination({
  count,
  limit,
  page,
  maxDisplay = 4,
}: usePaginationProps) {
  const max = Math.ceil(count / limit);

  const getVisiblePageNumber = () => {
    if (max <= maxDisplay) return createRange(1, max);

    if (page <= maxDisplay - 1) {
      const ellipsis_start = maxDisplay;
      return [...createRange(1, ellipsis_start), "...", max];
    }

    if (page >= max - (maxDisplay - 1))
      return [1, "...", ...createRange(max - (maxDisplay - 1), max)];

    return [1, "...", ...createMiddlePages(), "...", max];
  };

  const createRange = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  };

  const createMiddlePages = () => {
    const mid_start = Math.max(2, page - 1);
    const mid_end = Math.min(page + 1, max - 1);
    return createRange(mid_start, mid_end);
  };

  return {
    visiblePages: getVisiblePageNumber(),
    max,
  };
}
