import { welcome } from "../src";

test("welcome function should display something", () => {
  expect(welcome()).toContain("ts-utils");
});
