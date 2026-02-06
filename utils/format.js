// Formatting utility functions

/**
 * Format date to 'YYYY-MM-DD HH:MM:SS'
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */
function formatDate(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * Format a number with leading zeros
 * @param {number} number - The number to format
 * @param {number} length - The desired length of the output string
 * @returns {string} - The formatted number string
 */
function formatNumber(number, length) {
    return String(number).padStart(length, '0');
}

module.exports = { formatDate, formatNumber };