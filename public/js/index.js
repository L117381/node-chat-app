
    var socket = io()
      socket.on('connect', function () {
        console.log('Connected to Server');

        socket.emit('createMessage', {
          from: 'bin@example.com',
          text: 'that works.'
        });
      });
      socket.on('disconnect', function () {
        console.log('Disconnected from Server');
      });

      socket.on('newMessage', function(message){
        console.log('New Message', message);

      })
