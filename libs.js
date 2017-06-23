module.exports = [
  {
    name: 'React',
    files: {
      view: [
        'https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js',
        'https://unpkg.com/react@15.6.1/dist/react.min.js'
      ],
      router: ['https://unpkg.com/react-router@4.1.1/umd/react-router.min.js']
    }
  },
  {
    name: 'Preact',
    files: {
      view: ['https://unpkg.com/preact@8.1.0/dist/preact.min.js'],
      router: ['https://unpkg.com/preact-router@2.5.2/dist/preact-router.js']
    }
  },
  {
    name: 'Inferno',
    files: {
      view: ['https://unpkg.com/inferno@3.6.0/dist/inferno.min.js'],
      router: [
        'https://unpkg.com/history@4.6.3/umd/history.min.js',
        'https://unpkg.com/inferno-router@3.6.0/dist/inferno-router.min.js'
      ]
    }
  },
  {
    name: 'Vue',
    files: {
      view: ['https://unpkg.com/vue@2.3.4/dist/vue.min.js'],
      router: ['https://unpkg.com/vue-router@2.6.0/dist/vue-router.min.js']
    }
  }
];
