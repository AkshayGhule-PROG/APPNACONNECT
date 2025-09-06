import {Server} from "socket.io";

 const conncectToSocket =(server)=>{
    const io = new Server(server);
    return io;
}

export {conncectToSocket}