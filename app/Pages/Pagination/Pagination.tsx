import React from "react";
import chevronleftDisabled from "../../../assets/Icons/chevron left white.svg";
import chevronRightEnabled from "../../../assets/Icons/right-pagination.svg";
import chevronLeftEnabled from "../../../assets/Icons/chevron left white.svg";
import chevronRightDisabled from "../../../assets/Icons/right-pagination.svg";
import Image from "next/image";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // You might still want to render the component even if there are 5 or fewer pages,
  // but perhaps disable or hide previous/next buttons or adjust the UI in some other way.

  let MAX_VISIBLE_PAGES = Math.min(4, totalPages); // Adjusted to consider totalPages
  const halfMaxVisiblePages = Math.floor(MAX_VISIBLE_PAGES / 2);
  let startPage = Math.max(currentPage - halfMaxVisiblePages, 1);
  let endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);

  if (totalPages - currentPage < halfMaxVisiblePages) {
    endPage = totalPages;
    startPage = Math.max(endPage - MAX_VISIBLE_PAGES + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <ul className="flex pt-6 space-x-1 justify-center items-center">
      <Image
        src={currentPage - 1 <= 0 ? chevronleftDisabled : chevronLeftEnabled}
        alt="chevronleft"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="cursor-pointer"
      />
      {pageNumbers.map((page) => (
        <li key={page}>
          <button
            className={`${
              page === currentPage
                ? "bg-[#1a1a1b] dark:bg-[#e4f2f3] dark:text-black"
                : "bg-transparent text-[#FFFFFFCC] dark:text-black"
            } p-[0.5rem_1rem] rounded-md cursor-pointer text-[#FFFFFFCC]`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <Image
        src={
          currentPage + 1 > totalPages
            ? chevronRightDisabled
            : chevronRightEnabled
        }
        alt="chevronright"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="cursor-pointer"
      />
    </ul>
  );
};

export default Pagination;
