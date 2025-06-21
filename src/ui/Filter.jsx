import { useSearchParams } from "react-router";
import Button from "./Button";

export default function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || options.at(0).value;
  console.log(currentFilter);

  function handleClick(value) {
    searchParams.set("filter", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 rounded-md border-1 border-gray-200 p-1 sm:gap-2 sm:p-2">
      {options.map((option) => (
        <Button
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
          className={`rounded-md px-2 py-1.5 text-xs transition-all duration-300 hover:not-disabled:bg-cyan-600 hover:not-disabled:text-white sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2.5 md:text-base ${currentFilter === option.value ? "bg-cyan-600 text-white" : "bg-white text-black"}`}
          key={option.value}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
