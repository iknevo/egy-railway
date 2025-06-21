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
    <div className="flex items-center gap-2 rounded-md border-1 border-gray-200 p-1">
      {options.map((option) => (
        <Button
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
          className={`rounded-md transition-all duration-300 hover:not-disabled:bg-cyan-600 hover:not-disabled:text-white ${currentFilter === option.value ? "bg-cyan-600 text-white" : "bg-white text-black"}`}
          key={option.value}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
