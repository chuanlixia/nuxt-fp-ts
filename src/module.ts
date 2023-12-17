import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "fp-ts-module",
    configKey: "fp-ts",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.build.transpile?.push("fp-ts");

    // 导入fp-ts
    const fp = await require("fp-ts");
    const fpFunctions = await require("fp-ts/function");
    // 导入io-ts
    const io = await require("io-ts");

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    nuxt.hook("imports:sources", (sources) => {
      const fpfns = fpFunctions.pipe(
        fp,
        fp.record.mapWithIndex((name: string) => ({
          from: "fp-ts",
          name,
          as: "fp_" + name,
          priority: -1,
        })),
        fp.record.toArray,
        fp.array.map((x: any[]) => x[1])
      );

      const fps = fpFunctions.pipe(
        fpFunctions,
        fp.record.mapWithIndex((name: string) => ({
          from: "fp-ts/function",
          name,
          as: "fn_" + name,
          priority: -1,
        })),
        fp.record.toArray,
        fp.array.map((x: any[]) => x[1])
      );

      const ios = fpFunctions.pipe(
        io,
        fp.record.mapWithIndex((name: string) => ({
          from: "io-ts",
          name,
          as: "io_" + name,
          priority: -1,
        })),
        fp.record.toArray,
        fp.array.map((x: any[]) => x[1])
      );
      sources.push({
        from: "fp-ts",
        imports: fpfns.concat(fps),
        priority: -1,
      });
      sources.push({
        from: "io-ts",
        imports: ios,
        priority: -1,
      });
    });
  },
});
