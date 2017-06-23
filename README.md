frontend-libraries-comparison
=============================

A few utility scripts for comparing frontend libraries and a summary of
information

## Summary

| Library        | Size         | Size(gzip)  | Size(gzip) +router | Dom perf score | Server render score        | Maintained | Used by | License |
| ---            | ---          | ---         | ---                | ---            | ---                        | ---        | ---     | ---     |
| React          | (18.9) 150KB | (14.0) 46KB | (10.2) 53KB        | 1.30           | (5.2) 218 ops/sec ±1.75%   |            |         |         |
| Vue            | (9.7) 77KB   | (8.6) 28KB  | (7.0) 36KB         | 1.21           | (1.8) 631 ops/sec ±4.68%   |            |         |         |
| Preact         | (1.0) 8KB    | (1.0) 3KB   | (1.0) 5KB          | 1.21           | (1.0) 1,154 ops/sec ±0.79% |            |         |         |
| Inferno        | (3.1) 24KB   | (2.7) 9KB   | (3.4) 17KB         | 1.07           | (1.5) 759 ops/sec ±1.56%   |            |         |         |
| OOJS (+jQuery) |              |             |                    |                |                            |            |         |         |

## Dom perf score

Dom performance score extracted from http://www.stefankrause.net/js-frameworks-benchmark6/webdriver-ts-results/table.html

Number is having vanillaJS enabled as the baseline (1.0)

## Server render score

From https://github.com/raxjs/server-side-rendering-comparison

* See fixes pulls [inferno #18](https://github.com/raxjs/server-side-rendering-comparison/pull/18) [vue #15](https://github.com/raxjs/server-side-rendering-comparison/pull/15))
* Those patches are applied in this fork [joakin/server-side-rendering-comparison [fixed-inferno-and-added-vue]](https://github.com/joakin/server-side-rendering-comparison/tree/fixed-inferno-and-added-vue)

Example output (only relevant parts):
* MacBook Air (11-inch, Early 2014)
  * 1.7 GHz Intel Core i7
  * 8 GB 1600 MHz DDR3
  * Node 8.1.0
    * inferno@3.1.2
    * inferno-component@3.1.2
    * inferno-create-element@3.1.2
    * inferno-server@3.1.2
    * preact@8.1.0
    * preact-render-to-string@3.6.2
    * react@15.5.4
    * react-dom@15.5.4
    * vue@2.3.3
    * vue-server-renderer@2.3.3

```
React#renderToString x 218 ops/sec ±1.75% (76 runs sampled)
Vue#renderToString x 631 ops/sec ±4.68% (69 runs sampled)
Inferno#renderToString x 759 ops/sec ±1.56% (79 runs sampled)
Preact#renderToString x 1,154 ops/sec ±0.79% (84 runs sampled)
```

## Sizes

`node sizes.js` for getting a size report output. See `libs.js` for where the files are being fetched.

Example:

| name    |         view |   view (gz) |     router | router (gz) |        total |  total (gz) |
| :------ | -----------: | ----------: | ---------: | ----------: | -----------: | ----------: |
| React   | (18.9) 150KB | (14.0) 46KB | (6.0) 27KB |   (3.7) 7KB | (14.2) 176KB | (10.2) 53KB |
| Preact  |    (1.0) 8KB |   (1.0) 3KB |  (1.0) 4KB |   (1.0) 2KB |   (1.0) 12KB |   (1.0) 5KB |
| Inferno |   (3.1) 24KB |   (2.7) 9KB | (5.9) 26KB |   (4.5) 9KB |   (4.1) 50KB |  (3.4) 17KB |
| Vue     |   (9.7) 77KB |  (8.6) 28KB | (5.2) 23KB |   (4.3) 8KB |  (8.1) 100KB |  (7.0) 36KB |
