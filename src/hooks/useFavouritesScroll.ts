import React from "react";

interface UseFavouritesScrollProps {
    cardsPerPage?: number;
    totalCards: number;
}

export const useFavouritesScroll = ({
    cardsPerPage = 4,
    totalCards
}: UseFavouritesScrollProps) => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const handleDotClick = (pageIndex: number) => {
        if (scrollRef.current) {
            const cardWidth = 294;
            const gap = 32;
            const scrollPosition = pageIndex * cardsPerPage * (cardWidth + gap);
            scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
            setCurrentPage(pageIndex);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const cardWidth = 294;
            const gap = 32;
            const scrollLeft = scrollRef.current.scrollLeft;
            const pageWidth = cardsPerPage * (cardWidth + gap);
            const newPage = Math.round(scrollLeft / pageWidth);
            setCurrentPage(newPage);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scrollRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return {
        currentPage,
        totalPages,
        scrollRef,
        isDragging,
        handleDotClick,
        handleScroll,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove,
    };
};
