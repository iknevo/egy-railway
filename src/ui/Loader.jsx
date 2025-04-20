import { ring } from "ldrs";
ring.register();

export default function Loader() {
  return (
    <l-ring
      size="40"
      stroke="5"
      bg-opacity="0"
      speed="2"
      color="black"
    ></l-ring>
  );
}
