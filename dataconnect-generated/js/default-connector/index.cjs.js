const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'make-a-star',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

