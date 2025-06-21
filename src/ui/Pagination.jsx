import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router";
import { RESULTS_PER_PAGE } from "../utils/constants";
import Button from "./Button";

export default function Pagination({ numResults }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pagesCount = Math.ceil(numResults / RESULTS_PER_PAGE);

  function prev() {
    const prevPage = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  function next() {
    const nextPage = currentPage === pagesCount ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  function move(page) {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  if (pagesCount <= 1)
    return (
      <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
        <p className="text-center text-sm font-bold text-cyan-600 sm:text-lg md:text-left md:text-2xl">
          showing <span>{(currentPage - 1) * RESULTS_PER_PAGE + 1}</span> to{" "}
          <span>
            {currentPage === pagesCount
              ? numResults
              : currentPage * RESULTS_PER_PAGE}
          </span>{" "}
          of <span>{numResults}</span> trains
        </p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
      <p className="text-center text-sm font-bold text-cyan-600 sm:text-lg md:text-left md:text-2xl">
        showing <span>{(currentPage - 1) * RESULTS_PER_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === pagesCount
            ? numResults
            : currentPage * RESULTS_PER_PAGE}
        </span>{" "}
        of <span>{numResults}</span> trains
      </p>
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        <Button
          className={`h-10 w-10 rounded-md text-white sm:h-12 sm:w-12 md:h-10 md:w-10 ${currentPage === 1 ? "cursor-not-allowed bg-gray-500" : "bg-cyan-600"}`}
          onClick={prev}
          disabled={currentPage === 1}
        >
          <FaChevronLeft className="text-sm sm:text-base md:text-sm" />
        </Button>
        <div className="flex items-center gap-1 sm:gap-2">
          {[...Array(pagesCount)].map((_, i) => (
            <Button
              onClick={() => move(i + 1)}
              className={`h-10 w-10 rounded-md border border-gray-200 text-sm sm:h-12 sm:w-12 sm:text-base md:h-10 md:w-10 md:text-sm ${i + 1 === currentPage ? "bg-cyan-600 text-white" : "bg-white"}`}
              key={i}
            >
              <span
                className={`${i + 1 === currentPage ? "text-white" : "text-black"} `}
              >
                {i + 1}
              </span>
            </Button>
          ))}
        </div>
        <Button
          className={`h-10 w-10 rounded-md text-white sm:h-12 sm:w-12 md:h-10 md:w-10 ${currentPage === pagesCount ? "cursor-not-allowed bg-gray-500" : "bg-cyan-600"}`}
          onClick={next}
          disabled={currentPage === pagesCount}
        >
          <FaChevronRight className="text-sm sm:text-base md:text-sm" />
        </Button>
      </div>
    </div>
  );
}
