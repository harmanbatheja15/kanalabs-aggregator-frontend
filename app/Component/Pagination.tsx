import React from "react";
import chevronleftDisbled from "../assets/Icons/chevronleft.svg";
import chevronRightEnabled from "../assets/Icons/chevronright.svg";
import chevronleftEnabled from "../assets/Icons/chevron_left_enabled.svg";
import chevronRightDisabled from "../assets/Icons/chevron_right_disabled.svg";
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
  const MAX_VISIBLE_PAGES = 5;
  const pageNumbers = Array.from(
    { length: MAX_VISIBLE_PAGES },
    (_5, i) => i + 1
  );

  return (
    <ul className="flex pt-6 space-x-1 justify-center items-center">
      <Image
        src={currentPage - 1 <= 0 ? chevronleftDisbled : chevronleftEnabled}
        alt="chevronright"
        onClick={() =>
          onPageChange(currentPage - 1 <= 0 ? currentPage : currentPage - 1)
        }
        className=" cursor-pointer"
      />
      {pageNumbers.map((page) => (
        <li key={page}>
          <button
            className={`${
              page === currentPage
                ? "bg-[#FFFFFF0F] text-white"
                : "bg-transparent text-gray-700"
            } px-3 py-2 rounded-md`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
      {currentPage > 4 && (
        <button
          className={`${
            currentPage === currentPage
              ? "bg-[#FFFFFF0F] text-white"
              : "bg-transparent text-gray-700"
          } px-3 py-2 rounded-md`}
          onClick={() => onPageChange(currentPage)}
        >
          {currentPage}
        </button>
      )}
      <Image
        src={
          currentPage + 1 > totalPages
            ? chevronRightDisabled
            : chevronRightEnabled
        }
        alt="chevronright"
        onClick={() =>
          onPageChange(
            currentPage + 1 > totalPages ? currentPage : currentPage + 1
          )
        }
        className=" cursor-pointer"
      />
    </ul>
  );
};

export default Pagination;
