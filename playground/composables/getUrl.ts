export const geta = fn_flow(
  fp_option.fromNullable<string>,
  fp_option.map(
    fn_flow(
      (s) => s.split("/"),
      fp_array.filter((s) => s !== ""),
      fp_array.map((s) => `${s}`),
      fp_array.matchLeft(
        () => "-",
        (head, tail) => head + "-" + tail.join("-")
      )
    )
  )
);
