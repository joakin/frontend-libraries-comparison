const libs = require('./libs');
const fetch = require('node-fetch');
const gzip = require('gzip-size');
const humanSize = require('human-size');
const markdownTable = require('markdown-table');

Promise.all(
  libs.map(({ name, files }) =>
    Promise.all([
      fetchFiles(files.view),
      fetchFiles(files.router)
    ]).then(([viewFiles, routerFiles]) => ({
      name,
      files: {
        view: viewFiles,
        router: routerFiles
      },
      size: {
        view: filesSize(viewFiles),
        router: filesSize(routerFiles)
      },
      gzipped: {
        view: filesSize(viewFiles, true),
        router: filesSize(routerFiles, true)
      }
    }))
  )
)
  .then(all => {
    const smallest = all.reduce(
      (arr, file) => {
        const row = rowData(file);
        return arr.map((min, i) => Math.min(min, row[i]));
      },
      [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]
    );

    console.log(smallest);

    console.log(
      markdownTable(
        [
          [
            'name',
            'view',
            'view (gz)',
            'router',
            'router (gz)',
            'total',
            'total (gz)'
          ]
        ].concat(
          all.map(file =>
            [file.name].concat(
              rowData(file).map((d, i) => cell(d, smallest[i]))
            )
          )
        ),
        { align: ['l', 'r', 'r', 'r', 'r', 'r', 'r'] }
      )
    );
  })
  .catch(err => {
    console.log(err);
  });

function rowData({ name, size, gzipped }) {
  return [
    size.view,
    gzipped.view,
    size.router,
    gzipped.router,
    size.view + size.router,
    gzipped.view + gzipped.router
  ];
}

function cell(n, ref) {
  return `(${(n / ref).toFixed(1)}) ${humanSize(n)}`;
}

function fetchFiles(files) {
  return Promise.all(
    files.map(file =>
      fetch(file).then(res => res.text()).then(text => ({
        url: file,
        contents: text,
        size: text.length,
        gzipped: gzip.sync(text)
      }))
    )
  );
}

function filesSize(contents, gzip = false) {
  return contents.reduce(
    (s, { size, gzipped }) => s + (gzip ? gzipped : size),
    0
  );
}
