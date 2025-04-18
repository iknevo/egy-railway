export function scrollToSection(ref) {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 64, // Offset for header
      behavior: "smooth",
    });
  }
}
