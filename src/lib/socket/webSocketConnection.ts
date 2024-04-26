import ioClient from 'socket.io-client';

const ENDPOINT = 'https://friizzz-2ee66994f1ef.herokuapp.com/';
const socket = ioClient(ENDPOINT);
export const io = socket;
socket.io.engine.id