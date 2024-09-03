
const NEPALI_CALENDAR_DATA = {
  startDate: new Date(1943, 3, 13), // April 13, 1943 AD (1 Baisakh 2000 BS)
  months: [
    "बैशाख",
    "जेठ",
    "असार",
    "साउन",
    "भदौ",
    "असोज",
    "कार्तिक",
    "मंसिर",
    "पुष",
    "माघ",
    "फागुन",
    "चैत",
  ],
  days: [
    "आइतबार",
    "सोमबार",
    "मंगलबार",
    "बुधबार",
    "बिहिबार",
    "शुक्रबार",
    "शनिबार",
  ],
  numbers: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  years: [
    [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    [2087, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2088, 30, 31, 32, 32, 30, 31, 30, 29, 30, 29, 30, 30],
    [2089, 30, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2091, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2092, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2093, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2094, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    [2095, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2096, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2097, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2098, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    [2099, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2100, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2101, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2102, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    [2103, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    [2104, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2105, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2106, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    [2107, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    [2108, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    [2109, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    [2110, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  ],
};




const Util = {
  /**
   * Converts a number to its Nepali digit equivalent.
   * @param {number | string | null | undefined} number The number to convert.
   * @returns {string} The Nepali digit representation of the number.
   */
  toNepaliDigits(number) {
    if (number === undefined || number === null) {
      console.warn("toNepaliDigits: Input is undefined or null");
      return "";
    }

    const strNumber = String(number);
    return strNumber
      .split("")
      .map((digit) => {
        const num = parseInt(digit);
        // If the digit is not a number, return it as is.
        return isNaN(num) ? digit : NEPALI_CALENDAR_DATA.numbers[num];
      })
      .join("");
  },

  /**
   * Calculates the number of days between two dates.
   * @param {Date} date1 The first date.
   * @param {Date} date2 The second date.
   * @returns {number} The number of days between the two dates.
   * @throws {Error} If either argument is not a Date object.
   */
  daysBetween: (date1, date2) => {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("daysBetween: Both arguments must be Date objects");
    }
    // Calculate the difference in milliseconds and divide by the number of milliseconds in a day.
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2.getTime() - date1.getTime()) / oneDay);
  },

};


/**
 * Represents a date in the Nepali calendar.
 *
 * @class
 * @param {number} year - The year in the Nepali calendar.
 * @param {number} month - The month in the Nepali calendar (0-11).
 * @param {number} day - The day of the month in the Nepali calendar (1-32).
 * @param {number} dayOfWeek - The day of the week in the Nepali calendar (0-6).
 */
class NepaliDate {
  constructor(year, month, day, dayOfWeek) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.dayOfWeek = dayOfWeek;
  }

  /**
   * Converts this Nepali date to a string in the format "YYYY MMM DD, DDD"
   * @returns {string} The string representation of this Nepali date.
   */
  format() {
    const year = Util.toNepaliDigits(this.year);
    const month = NEPALI_CALENDAR_DATA.months[this.month] || "";
    const day = Util.toNepaliDigits(this.day);
    const dayOfWeek = NEPALI_CALENDAR_DATA.days[this.dayOfWeek] || "";

    return `${year} ${month} ${day}, ${dayOfWeek}`;
  }
}






/**
 * Converts an English date to a Nepali date.
 *
 * @class
 * @param {Date} englishDate - The English date to convert.
 * @param {boolean} [format24=true] - Whether to format the time in 24-hour
 *   format (true) or 12-hour format (false).
 * @returns {Object} An object with two properties: `date` and `time`. The
 *   `date` property is a string representing the Nepali date in the format
 *   "YYYY MMM DD, ddd", and the `time` property is a string representing the
 *   Nepali time in the format "HH:MM:SS AM/PM" if `format24` is false, or
 *   "HH:MM:SS" if `format24` is true.
 */
class NepaliDateConverter {
  convertToNepaliDate(englishDate) {
    if (!(englishDate instanceof Date)) {
      throw new Error("convertToNepaliDate: Argument must be a Date object");
    }

    let daysElapsed = Util.daysBetween(
      NEPALI_CALENDAR_DATA.startDate,
      englishDate
    );
    console.log("Days elapsed:", daysElapsed);

    if (daysElapsed < 0) {
      throw new Error("Date is before the start of the Nepali calendar data");
    }

    let nepaliYear, nepaliMonth, nepaliDay;

    for (const yearData of NEPALI_CALENDAR_DATA.years) {
      const daysInYear = yearData.slice(1).reduce((sum, days) => sum + days, 0);

      if (daysElapsed < daysInYear) {
        nepaliYear = yearData[0];
        let monthDays = 0;
        for (let i = 1; i < yearData.length; i++) {
          if (daysElapsed < yearData[i]) {
            nepaliMonth = i - 1;
            nepaliDay = daysElapsed + 1;
            console.log(
              "Found Nepali date:",
              nepaliYear,
              nepaliMonth + 1,
              nepaliDay
            );
            return new NepaliDate(
              nepaliYear,
              nepaliMonth,
              nepaliDay,
              englishDate.getDay()
            );
          }
          daysElapsed -= yearData[i];
        }
      }
      daysElapsed -= daysInYear;
    }

    // If we're here, the date is beyond our data range. Let's estimate.
    return this.estimateFutureNepaliDate(englishDate);
  }

  /**
   * Estimates the Nepali date of a given English date. The algorithm is a
   * rough estimate and may be off by a few days.
   *
   * @param {Date} englishDate - The English date to estimate the Nepali date
   *   for.
   * @returns {NepaliDate} - A NepaliDate object representing the estimated
   *   Nepali date.
   */
  estimateFutureNepaliDate(englishDate) {
    // Get the last known year from the Nepali calendar data
    const lastKnownYear =
      NEPALI_CALENDAR_DATA.years[NEPALI_CALENDAR_DATA.years.length - 1][0];

    // Calculate how many years have passed since the last known year
    const yearsToAdd = englishDate.getFullYear() - (lastKnownYear - 57);

    // Calculate the estimated Nepali year
    const estimatedNepaliYear = lastKnownYear + yearsToAdd;

    // Calculate the estimated Nepali month and day. This is a rough estimate
    // and may be off by a few days.
    const daysIntoYear =
      (englishDate - new Date(englishDate.getFullYear(), 0, 1)) /
      (1000 * 60 * 60 * 24);
    let estimatedNepaliMonth = Math.floor(daysIntoYear / 30);
    let estimatedNepaliDay = Math.floor(daysIntoYear % 30) + 1;

    // If the estimated month is greater than 11, set it to 11 and set the
    // day to 30.
    if (estimatedNepaliMonth > 11) {
      estimatedNepaliMonth = 11;
      estimatedNepaliDay = 30;
    }

    console.log(
      "Estimated Nepali date:",
      estimatedNepaliYear,
      estimatedNepaliMonth + 1,
      estimatedNepaliDay
    );

    // Return a new NepaliDate object with the estimated Nepali date.
    return new NepaliDate(
      estimatedNepaliYear,
      estimatedNepaliMonth,
      estimatedNepaliDay,
      englishDate.getDay()
    );
  }

  convertToNepaliTime(englishDate, format24 = true) {
    if (!(englishDate instanceof Date)) {
      throw new Error("convertToNepaliTime: Argument must be a Date object");
    }
    return new NepaliTime(
      englishDate.getHours(),
      englishDate.getMinutes(),
      englishDate.getSeconds(),
      format24
    );
  }

  convertEnglishToNepali(englishDate, format24 = true) {
    if (!(englishDate instanceof Date)) {
      throw new Error("convertEnglishToNepali: Argument must be a Date object");
    }
    const nepaliDate = this.convertToNepaliDate(englishDate);
    const nepaliTime = this.convertToNepaliTime(englishDate, format24);

    return {
      date: nepaliDate.format(),
      time: nepaliTime.format(),
    };
  }
}






/**
 * Class representing a Nepali time.
 * 
 * @property {number} hours the hour of the day (0-23)
 * @property {number} minutes the minutes of the hour (0-59)
 * @property {number} seconds the seconds of the minute (0-59)
 * @property {boolean} [format24=true] whether to format in 24-hour mode
 */
class NepaliTime {
  /**
   * Creates a new NepaliTime object.
   * 
   * @param {number} hours the hour of the day (0-23)
   * @param {number} minutes the minutes of the hour (0-59)
   * @param {number} seconds the seconds of the minute (0-59)
   * @param {boolean} [format24=true] whether to format in 24-hour mode
   */
  constructor(hours, minutes, seconds, format24 = true) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.format24 = format24;
  }

  /**
   * Formats the time in Nepali digits.
   * 
   * @returns {string} the formatted time string
   */
  format() {
    let hours = this.hours;
    let ampm = "";
    if (!this.format24) {
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
    }
    hours = Util.toNepaliDigits(hours.toString().padStart(2, "0"));
    const minutes = Util.toNepaliDigits(
      this.minutes.toString().padStart(2, "0")
    );
    const seconds = Util.toNepaliDigits(
      this.seconds.toString().padStart(2, "0")
    );

    return `${hours}:${minutes}:${seconds}${ampm ? " " + ampm : ""}`;
  }
}

try {
  const converter = new NepaliDateConverter();
  const currentDate = new Date(2024, 8, 3, 19, 59, 13); // September 3, 2024, 19:59:13
  console.log("Input English Date:", currentDate.toLocaleString());

  const nepaliDateTime24 = converter.convertEnglishToNepali(currentDate, true);
  const nepaliDateTime12 = converter.convertEnglishToNepali(currentDate, false);

  console.log(`English Date and Time: ${currentDate.toLocaleString()}`);
  console.log(`Nepali Date: ${nepaliDateTime24.date}`);
  console.log(`Nepali Time (24-hour): ${nepaliDateTime24.time}`);
  console.log(`Nepali Time (12-hour): ${nepaliDateTime12.time}`);

  if (currentDate.getFullYear() > 2023) {
    console.warn(
      "Warning: This date is beyond our precise data range. The Nepali date is an estimate and may be off by a few days."
    );
  }
} catch (error) {
  console.error("An error occurred:", error.message);
  console.error("Stack trace:", error.stack);
}
