import Client from './api'

export const getUsersBoards = async (data) => {
    try {
        const res = await Client.get(`/api/boards/user/${data}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const getListsForBoards = async (data) => {
    try {
        const res = await Client.get(`/api/boards/${data}/lists`, data)
        return res.data
    } catch (error) {
        throw error
    }
}
