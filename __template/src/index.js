import { readFile } from "./utils.js";
import solution from "./solution.js";

/**
 * The main function of the program.
 */
function main() {
  const input = readFile("./input/input.txt");

  console.log(solution(input));
}

main();