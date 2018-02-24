module.exports = {
    '/': {
      allowedMethods: ['GET'],
      auth: true
    },
    '/1': {
        controller: 'Journal',
        method: 'first'
    },
    '/2': {
        controller: 'Journal',
        method: 'second'
    },
    '/3': {
        controller: 'Journal',
        method: 'third'
    },
    '/4': {
        controller: 'Journal',
        method: 'fourth'
    }
  };
  