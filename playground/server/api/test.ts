import { Option, some } from "fp-ts/Option";
import { left } from "fp-ts/lib/Either";
export default defineEventHandler((event) => {
  const a: Option<string> = some("2");
  return left("x");
});
