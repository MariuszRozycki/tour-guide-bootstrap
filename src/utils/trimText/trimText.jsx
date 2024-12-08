/**
 * Trims a text to a specified length and adds ellipsis if needed.
 * @param {string} text - The text to be trimmed.
 * @param {number} maxLength - The maximum length of the text before truncation.
 * @returns {string} - The trimmed text with ellipsis if it exceeds the maxLength.
 */
export const trimText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
