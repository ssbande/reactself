let express = require('express');
let app = express();

let connections = [];
let users = [];

app.use(express.static('./public'));

let server = app.listen(4043, () => {
	console.log('server is running on port 4043');
});

let io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {
	let userId;
	socket.on('disconnect', () => {
		console.log('disconnecting: ' + userId)
		for (i=0; i< users.length; i++){
			console.log('comparing ' + users[i].id + ' with ' + userId);
			if(users[i].id == userId){
				users.splice(i, 1);
			}
		}

		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log('DisConnected: %s sockets disconnected', connections.length)
		io.emit('disconnect', users);
	})

	socket.on('messageAdded', (payload) => {
		console.log('message being added payload: ', payload);
		let newMessage = {
			timeStamp: payload.timeStamp,
			text: payload.text,
			user: payload.user
		}

		console.log('new message: ', newMessage);
		io.emit('messageAdded', newMessage);
	});

	socket.on('userJoined', (payload) => {
		console.log('message being added payload: ', payload);
		console.log('id: ', users.length + 1);
		userId = users.length + 1;
		let newUser = {
			id: users.length + 1,
			name: payload.name
		}

		users.push(newUser);
		io.emit('userJoined', users);
		console.log('user joined: ', payload.name);
	});

	connections.push(socket);
	console.log('connected: %s sockets connected', connections.length);
})