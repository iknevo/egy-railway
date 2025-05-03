export function scrollToSection(ref) {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 64, // Offset for header
      behavior: "smooth",
    });
  }
}

export function getTimeDifference(time1, time2) {
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;
  const diffMinutes = Math.abs(totalMinutes2 - totalMinutes1);
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;
  const parts = [];
  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  }
  if (minutes > 0) {
    parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
  }
  return parts.join(", ");
}

export function formatToEGP(value) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: 0,
  }).format(value);
}

export function formatToUSD(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
}
