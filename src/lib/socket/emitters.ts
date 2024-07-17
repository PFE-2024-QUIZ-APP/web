import { io } from "./webSocketConnection"

export const createRoomEmit = (data: CreateRoomInput) => io.emit('createRoom', data);
export const editRoomEmit = (data: EditRoomInput) => io.emit('editRoom', data);
export const joinRoomEmit = (data: JoinRoomInput) => io.emit('join', data);
export const responsePlayerEmit = (data: ResponsePlayerInput) => io.emit('responsePlayer', data);
export const nextQuestionEmit = () => io.emit('nextQuestion');
export const restartGameEmit = () => io.emit('restart');
