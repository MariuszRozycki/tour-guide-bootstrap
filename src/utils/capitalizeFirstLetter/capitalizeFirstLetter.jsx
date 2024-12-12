export const capitalizeFirstLetter = (text) => {
  if (!text || typeof text !== "string") return "";
  const trimmedText = text.trim();
  return trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1);
};
