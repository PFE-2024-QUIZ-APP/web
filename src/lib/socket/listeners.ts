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

export const onEndGame = (callback: (data: EndGameOutput) => void) => {
    io.on("endGame", (data) => callback(data))
}

export const onNextQuestion = (callback: (data: NextQuestionOutput) => void) => {
    io.on("nextQuestion", (data) => callback(data))
}

export const onRoomNoFound = (callback: (data: RoomNoFoundOutput) => void) => {
    io.on("roomNoFound", (data) => callback(data))
}

export const onAllResponse = (callback: (data: AllResponseOutput) => void) => {
    io.on("allResponses", (data) => callback(data))
}

export const onTimerEnded = (callback: (data: TimeEndedOutput) => void) => {
    io.on("timerEnded", (data) => callback(data))
}

export const onSocketId = (callback: (data: string) => void) => {
    io.on("id", (data) => callback(data))
}