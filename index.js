let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let users = []

io.on("connection", function(socket){
    socket.on("user-send-message", function (data) {
        console.log("server-send-message-to-client" + data.receiver)
        socket.broadcast.emit("server-send-message-to-client" + data.receiver, data)
    })
    socket.on("user-login", function (data) {
        let userExist = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === data) {
                userExist = true
                break
            }
        }

        if (userExist) {
            socket.emit("status-login", {status: false})
        } else {
            users.push({
                username: data,
                conversation_id: socket.id,
                last_message: '',
            })

            socket.emit("status-login", {status:true, username: data})
            io.sockets.emit("send-user-lists-to-client", users)
        }
    })

    socket.on("user-choc", function (data) {
        io.to(data).emit("server-send-choc", "cho ban")
    })
    
    socket.on("update_user-lists", function (data) {
        let index;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === data) {
                index = i
                break
            }
        }
        users.splice(index, 1)
        io.sockets.emit("send-user-lists-to-client", users)
    })

    socket.emit("send-user-lists-to-client", users)
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});