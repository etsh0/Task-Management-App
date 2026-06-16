import { useRef, useCallback } from 'react';

type Props = {
  loadMore: () => void;
  hasMore: boolean;
  loading: boolean;
};

export function useInfiniteScroll({ loadMore, hasMore, loading }: Props) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const setLastElement = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) {
        observerRef.current.observe(node);
      }

      lastElementRef.current = node;
    },
    [loadMore, hasMore, loading],
  );

  return { setLastElement };
}
