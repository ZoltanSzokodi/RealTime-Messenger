
(function() {
  Pusher.logToConsole = true;
  const pusher = new Pusher('2086a575e597e3d798f0', {
    cluster: 'eu',
    forceTLS: true
  });
  const channel = pusher.subscribe('my-channel');
  const messages = document.getElementById('messages');
  channel.bind('my-event', newComments);
  document.querySelector('#mesSender').addEventListener('submit', addComment);

  function newComments(data) {
    //console.log(data);
    const el = document.createElement('div');
    el.innerHTML = data.message + ' <small>' + data.name + '</small>';
    messages.appendChild(el);
  }

  function addComment(event) {
    event.preventDefault();
    const newComment = {
      "name": document.getElementById('userName').value,
      "message": document.getElementById('newMessage').value,
    }
    //console.log(newComment);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/comment", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4 || xhr.status != 200) return;
      console.log(xhr.responseText);
    }
    xhr.send(JSON.stringify(newComment));
  }
})();
