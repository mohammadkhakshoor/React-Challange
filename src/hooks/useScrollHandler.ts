import { useState, useCallback, useEffect } from "react";

interface UseScrollHandlerReturn {
  activeIndex: number;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
  handleMouseUp: () => void;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const useScrollHandler = (scrollContainerRef: React.RefObject<HTMLDivElement>): UseScrollHandlerReturn => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging && scrollContainerRef.current) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = "grab";
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (isDragging && scrollContainerRef.current) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = "grab";
    }
  }, [isDragging]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollContainerRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    const newActiveIndex = Math.round(scrollPercentage * (container.children.length - 1));

    setActiveIndex(newActiveIndex);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return {
    activeIndex,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useScrollHandler;
