import { io } from "./webSocketConnection"

export const onConnect = (callback: () => void) => {
    io.on("connect", callback)
}

export const onRoomData = (callback: (data: RoomDataOutput) => void) => {
    io.on("roomData", (data) => callback(data))
}

export const onEditRoom = (callback: (data: EditRoomOutput) => void) => {
    io.on("editRoom", (data) => callback(data))
}

export const onStartGame = (callback: (data: StartGameOutput) => void) => {
    io.on("startGame", (data) => callback(data))
}

export const onEndGame = (callback: (data: EndGameOutput) => void) => {
    io.on("endGame", (data) => callback(data))
}

export const onEndQuestion = (callback: (data: EndQuestionOutput) => void) => {
    io.on("endQuestion", (data) => callback(data))
}

export const onNextQuestion = (callback: (data: NextQuestionOutput) => void) => {
    io.on("nextQuestion", (data) => callback(data))
}