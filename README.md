frontend-libraries-comparison
=============================

A few utility scripts for comparing frontend libraries and a summary of
information.

Written for the Wikimedia Foundation, for https://phabricator.wikimedia.org/T167041

## Summary

| Library              | Size         | Size(gzip)  | Size(gzip) +router | Dom perf score | Server render score        | Maintained | Used by | License                                                                                                                                  |
| ---                  | --:          | --:         | --:                | --:            | --:                        | ---        | ---     | ---                                                                                                                                      |
| React                | (18.9) 150KB | (14.0) 46KB | (10.2) 53KB        | 1.30           | (5.2) 218 ops/sec ±1.75%   | ✅         | ★★★★★   | [BSD 3](https://github.com/facebook/react/blob/master/LICENSE) w/ [PATENTS grant](https://github.com/facebook/react/blob/master/PATENTS) |
| Vue                  | (9.7) 77KB   | (8.6) 28KB  | (7.0) 36KB         | 1.21           | (1.8) 631 ops/sec ±4.68%   | ✅         | ★★★★☆   | [MIT License](https://github.com/vuejs/vue/blob/dev/LICENSE)                                                                             |
| Preact               | (1.0) 8KB    | (1.0) 3KB   | (1.0) 5KB          | 1.21           | (1.0) 1,154 ops/sec ±0.79% | ✅         | ★★★★☆   | [MIT License](https://github.com/developit/preact/blob/master/LICENSE)                                                                   |
| Inferno              | (3.1) 24KB   | (2.7) 9KB   | (3.4) 17KB         | 1.07           | (1.5) 759 ops/sec ±1.56%   | ✅         | ★★☆☆☆   | [MIT License](https://github.com/infernojs/inferno/blob/master/LICENSE.md)                                                               |
| OOJS (+jQuery+Hogan) | (13.0) 103KB | (10.9) 36KB | (7.3) 38KB         | N/A            | N/A                        | ✅ + 💀    | ★★★★★   | MIT license                                                                                                                              |

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

| name                  |         view |   view (gz) |     router | router (gz) |        total |  total (gz) |
| :-------------------- | -----------: | ----------: | ---------: | ----------: | -----------: | ----------: |
| React                 | (18.9) 150KB | (14.0) 46KB | (6.0) 27KB |   (3.7) 7KB | (14.2) 176KB | (10.2) 53KB |
| Preact                |    (1.0) 8KB |   (1.0) 3KB |  (1.0) 4KB |   (1.0) 2KB |   (1.0) 12KB |   (1.0) 5KB |
| Inferno               |   (3.1) 24KB |   (2.7) 9KB | (5.9) 26KB |   (4.5) 9KB |   (4.1) 50KB |  (3.4) 17KB |
| Vue                   |   (9.7) 77KB |  (8.6) 28KB | (5.2) 23KB |   (4.3) 8KB |  (8.1) 100KB |  (7.0) 36KB |
| OOJS + jQuery + Hogan | (13.0) 103KB | (10.9) 36KB |  (1.1) 5KB |   (1.1) 2KB |  (8.7) 108KB |  (7.3) 38KB |

##Maintained

Maintainability summaries at date 27 June 2017, 18:00 UTC

| name    | commits | releases | contributors | last release | last commit  | 📈  | ⭐️      | Summary |
| :---    | ---:    | ---:     | ---:         | ---:         | ---:         | --- | ---:    | ---     |
| React   | 8,739   | 63       | 1,030        | 12 days ago  | an hour ago  | ✅  | ~70,000 | ✅      |
| Preact  | 956     | 108      | 86           | Apr 9, 2017  | 8 days ago   | ✅  | ~10,500 | ✅      |
| Inferno | 5,191   | 122      | 131          | 4 days ago   | 4 days ago   | ✅  | ~10,500 | ✅      |
| Vue     | 2,039   | 204      | 115          | 20 days ago  | 10 days ago  | ✅  | ~58,000 | ✅      |
| OOJS    | 299     | 25       | 14           | 28 days ago  | 27 days ago  | ✅  | 10      | ✅      |
| jQuery  | 6,239   | 146      | 263          | Mar 20, 2017 | a day ago    | ✅  | ~45,000 | ✅      |
| Hogan   | 242     | ??       | 38           | Jun 17, 2014 | May 21, 2015 | ❌  | ~4,700  | 💀      |

* For 📈 look at the github graphs like https://github.com/facebook/react/graphs/contributors

##Used by

* [React](https://github.com/facebook/react/wiki/sites-using-react)
  * Facebook
  * Twitter
  * Automattic
  * Mozilla
  * Visual Studio Team Services / Microsoft Team Foundation Server
  * AirBnB
  * Atlassian
  * …
  * **Summary** ★★★★★ Widely used by all kinds of companies

* [Preact](https://preactjs.com/about/we-are-using)
  * [Uber](https://eng.uber.com/m-uber/)
  * Housing.com
  * Neo4j
  * Tencent QQ
  * Huayang Live Huayang Live
  * transformersmovie.com
  * Not much more information
  * **Summary** ★★★★☆ There are companies using it in production
* [Inferno](https://infernojs.org/about)
  * The Grid
  * Evite.com
  * Globo.com (Brazil)
  * Not much information
  * **Summary** ★★☆☆☆ There are companies apparently using it, but not much
    information around
* [Vue](https://github.com/vuejs/awesome-vue#enterprise-usage)
  * Gitlab
  * Alibaba
  * Baidu
  * ...
  * **Summary** ★★★★☆ Big companies using it in production
* OOJS
  * Wikipedia
  * **Summary** ★★★★★ In-house library, used by wikimedia
* jQuery
  * Wikipedia
  * The whole internet
  * **Summary** ★★★★★
* Hogan
  * Wikipedia
  * Twitter?
  * **Summary** ★★★★★ Used by wikimedia
