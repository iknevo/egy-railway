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
    // const nextPage = currentPage === pagesCount ? currentPage : page;
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  if (pagesCount <= 1)
    return (
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-cyan-600">
          showing <span>{(currentPage - 1) * RESULTS_PER_PAGE + 1}</span> to{" "}
          <span>
            {currentPage === pagesCount
              ? numResults
              : currentPage * RESULTS_PER_PAGE}
          </span>{" "}
          of <span>{numResults}</span> products
        </p>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <p className="text-2xl font-bold text-cyan-600">
        showing <span>{(currentPage - 1) * RESULTS_PER_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === pagesCount
            ? numResults
            : currentPage * RESULTS_PER_PAGE}
        </span>{" "}
        of <span>{numResults}</span> products
      </p>
      <div className="flex items-center gap-3">
        <Button
          className={`h-10 w-10 rounded-md text-white ${currentPage === 1 ? "cursor-not-allowed bg-gray-500" : "bg-cyan-600"}`}
          onClick={prev}
          disabled={currentPage === 1}
        >
          {/* <HiOutlineArrowLeft /> */}
          <FaChevronLeft />
        </Button>
        {[...Array(pagesCount)].map((_, i) => (
          <Button
            onClick={() => move(i + 1)}
            className={`h-10 w-10 rounded-md border border-gray-200 ${i + 1 === currentPage ? "bg-cyan-600 text-white" : "bg-white"}`}
            key={i}
          >
            <span
              className={`${i + 1 === currentPage ? "text-white" : "text-black"} `}
            >
              {i + 1}
            </span>
          </Button>
        ))}
        <Button
          className={`h-10 w-10 rounded-md text-white ${currentPage === pagesCount ? "cursor-not-allowed bg-gray-500" : "bg-cyan-600"}`}
          onClick={next}
          disabled={currentPage === pagesCount}
        >
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}
