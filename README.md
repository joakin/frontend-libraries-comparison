frontend-libraries-comparison
=============================

A few utility scripts for comparing frontend libraries.

## Sizes

`node sizes.js` for getting a size report output. See `libs.js` for where the files are being fetched.

Example:

| name    |         view |   view (gz) |     router | router (gz) |        total |  total (gz) |
| :------ | -----------: | ----------: | ---------: | ----------: | -----------: | ----------: |
| React   | (18.9) 150KB | (14.0) 46KB | (6.0) 27KB |   (3.7) 7KB | (14.2) 176KB | (10.2) 53KB |
| Preact  |    (1.0) 8KB |   (1.0) 3KB |  (1.0) 4KB |   (1.0) 2KB |   (1.0) 12KB |   (1.0) 5KB |
| Inferno |   (3.1) 24KB |   (2.7) 9KB | (5.9) 26KB |   (4.5) 9KB |   (4.1) 50KB |  (3.4) 17KB |
| Vue     |   (9.7) 77KB |  (8.6) 28KB | (5.2) 23KB |   (4.3) 8KB |  (8.1) 100KB |  (7.0) 36KB |
