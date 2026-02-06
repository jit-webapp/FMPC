'use strict';

/**
 * Get the current date and time in UTC formatted as YYYY-MM-DD HH:MM:SS.
 * @returns {string} - The formatted date string.
 */
function getCurrentDateTimeUTC() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

module.exports = {
    getCurrentDateTimeUTC,
};
