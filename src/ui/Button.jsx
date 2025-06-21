export default function Button({
  children,
  className,
  onClick,
  disabled = false,
  propagation = true,
}) {
  function handleClick(e) {
    onClick?.();
    !propagation && e.stopPropagation();
  }

  let defaultClassName =
    "flex cursor-pointer disabled:cursor-not-allowed items-center justify-center space-x-2 px-4 py-3 leading-none";
  if (className) defaultClassName += ` ${className}`;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={defaultClassName}
    >
      {children}
    </button>
  );
}
