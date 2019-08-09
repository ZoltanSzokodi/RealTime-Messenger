const express = require('express');
const app = express();
var Pusher = require('pusher');

var channels_client = new Pusher({
  appId: '839971',
  key: '2086a575e597e3d798f0',
  secret: '5a0318fa4ea4dcbc3cbe',
  cluster: 'eu',
  encrypted: true
});

channels_client.trigger('my-channel', 'my-event', {
  "message": "hello world"
});

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000);
