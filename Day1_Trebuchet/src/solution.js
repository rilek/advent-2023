/**
 * Extracts the calibration value from the input string.
 * @param {string} input - The input string.
 * @returns {number} The calibration value.
 */
function extractCalibrationValue(input) {
  const digits = [...input.matchAll(/\d/g)].map(([x]) => x);
  const number = Number([digits.at(0), digits.at(-1)].join(""));

  return number;
}

/**
 * Calculates the solution for part one of the Advent of Code Day 1 challenge.
 * @param {string} input - The input string.
 * @returns {number} The calculated result.
 */
export function solution_partOne(input) {
  const lines = input.split("\n").map(extractCalibrationValue).reduce((a, b) => a + b, 0);
  return lines;
}


const wordMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const toDigit = (v) => {
  return wordMap[v] || v;
}

const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gm;

/**
 * Extracts the calibration value from the input string, including words.
 * @param {string} input - The input string.
 * @returns {number} The calibration value.
 */
function extractCalibrationValueIncludingWords(input) {
  const digits = Array.from(input.matchAll(regex)).map(([_, x]) => x).map(toDigit);
  const number = parseInt([digits.at(0), digits.at(-1)].join(""), 10);

  return number;
}

/**
 * Calculates the solution for the Advent of Code Day 1 challenge.
 * @param {string} input - The input string.
 * @returns {number} The calculated result.
 * @throws {Error} If the input is invalid.
 */
export default function solution(input) {
  const result = input
    .split("\n")
    .map(extractCalibrationValueIncludingWords)
    .reduce((a, b) => a + b, 0);

  if (isNaN(result)) {
    throw new Error("Invalid input");
  }

  return result;
}
