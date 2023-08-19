import { sum } from "../sum";

test("sum function that return sum of two numbers", () => {
  const result = sum(3, 4);

  //assertion
  expect(result).toBe(7);
});
