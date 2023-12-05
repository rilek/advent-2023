import { multiply, sum } from "./utils.js"

const MAX_RED = 12
const MAX_GREEN = 13
const MAX_BLUE = 14

/**
 * @param {string} game - string with game details
 */
function getGameDetails(game) {
  const id = Number(/Game (\d+)/.exec(game).at(1));
  const maxRed = Math.max(...Array.from(game.matchAll(/(\d+) red/g), x => Number(x.at(1))));
  const maxGreen = Math.max(...Array.from(game.matchAll(/(\d+) green/g), x => Number(x.at(1))));
  const maxBlue = Math.max(...Array.from(game.matchAll(/(\d+) blue/g), x => Number(x.at(1))));

  return { id, maxRed, maxGreen, maxBlue }
}

/**
 * @param {string} game - string with game details
 */
function getGameMaxIdIfPossible(game) {
  const { id, maxRed, maxGreen, maxBlue } = getGameDetails(game);

  if (maxRed > MAX_RED || maxGreen > MAX_GREEN || maxBlue > MAX_BLUE) {
    return 0;
  }

  return id;
}

/**
 * Calculates the solution for the Advent of Code Day 2 challenge.
 * @param {string} input - The input string.
 * @returns {number} The calculated result.
 */
export function solution_partOne(input) {
  const games = input.split("\n");
  const result = games.map(getGameMaxIdIfPossible).filter(x => !!x).reduce(sum, 0);

  return result;
}

// ======================= PART TWO =======================

function getMinGameCubes(game) {
  const { maxRed, maxGreen, maxBlue } = getGameDetails(game);

  return [maxRed, maxGreen, maxBlue].reduce(multiply, 1);
}

/**
 * Calculates the solution for part one of the Cube Conundrum game.
 * @param {string} input - The input string containing the game data.
 * @returns {number} - The result of the calculation.
 */
export default function solution(input) {
  const games = input.split("\n");
  const result = games.map(getMinGameCubes).reduce(sum, 0);

  return result;
}