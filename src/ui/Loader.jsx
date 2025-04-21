import { ring } from "ldrs";
ring.register();

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-20">
      <l-ring
        size="60"
        stroke="6"
        bg-opacity="0"
        speed="2"
        color="var(--color-blue-500)"
      />
    </div>
  );
}
