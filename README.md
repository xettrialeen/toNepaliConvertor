# Nepali Date Converter

## Overview

The Nepali Date Converter is a JavaScript library that converts Gregorian (English) dates to Nepali (Bikram Sambat) dates. It provides accurate conversions for dates within a predefined range and estimates for future dates beyond this range.

## Features

- Convert Gregorian dates to Nepali dates
- Support for both 12-hour and 24-hour time formats
- Conversion of numbers to Nepali digits
- Handling of dates beyond the predefined data range (with estimation)
- Error handling for invalid inputs

## Installation

To use this library in your project, simply copy the `NepaliDateConverter.js` file into your project directory and include it in your HTML file:

```html
<script src="path/to/NepaliDateConverter.js"></script>
```

## Usage

Here's a basic example of how to use the Nepali Date Converter:

```javascript
const converter = new NepaliDateConverter();
const englishDate = new Date(2024, 8, 3, 15, 30, 45); // September 3, 2024, 15:30:45

const nepaliDateTime = converter.convertEnglishToNepali(englishDate);

console.log(`English Date and Time: ${englishDate.toLocaleString()}`);
console.log(`Nepali Date: ${nepaliDateTime.date}`);
console.log(`Nepali Time (24-hour): ${nepaliDateTime.time}`);

// For 12-hour format
const nepaliDateTime12 = converter.convertEnglishToNepali(englishDate, false);
console.log(`Nepali Time (12-hour): ${nepaliDateTime12.time}`);
```

## API Reference

### `NepaliDateConverter`

The main class for converting dates.

#### Methods:

- `convertEnglishToNepali(englishDate: Date, format24: boolean = true): { date: string, time: string }`
  - Converts a Gregorian date to a Nepali date and time.
  - `englishDate`: A JavaScript Date object.
  - `format24`: Boolean to specify 24-hour (true) or 12-hour (false) time format.
  - Returns an object with `date` and `time` properties as formatted strings.

### `NepaliDate`

A class representing a Nepali date.

#### Methods:

- `format(): string`
  - Returns a formatted string representation of the Nepali date.

### `NepaliTime`

A class representing Nepali time.

#### Methods:

- `format(): string`
  - Returns a formatted string representation of the Nepali time.

## Limitations

- The converter provides accurate results for dates within the predefined range (currently up to 2100 BS).
- For dates beyond the predefined range, the converter provides an estimate which may be off by a few days.
- The accuracy of time conversion depends on the accuracy of the system clock.

## Future Improvements

- Extend the predefined date range for more accurate future date conversions.
- Add support for converting Nepali dates back to Gregorian dates.
- Implement more formatting options for date and time output.

## Contributing

Contributions to improve the Nepali Date Converter are welcome. Please feel free to submit issues or pull requests on the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ for the Nepali community and date conversion enthusiasts.