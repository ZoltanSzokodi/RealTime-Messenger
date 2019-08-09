const express = require('express');
const app = express();
const path = require('path');
const Pusher = require('pusher');
const bodyParser = require('body-parser');
const pusher = new Pusher({
  appId: '839971',
  key: '2086a575e597e3d798f0',
  secret: '5a0318fa4ea4dcbc3cbe',
  cluster: 'eu',
  encrypted: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/comment', (req, res) => {
  console.log(req.body);
  const newMessage = {
    name: req.body.name,
    message: req.body.message
  }
  pusher.trigger('my-channel', 'my-event', newMessage);

  res.json({ created: true });
})


app.listen(3000);
