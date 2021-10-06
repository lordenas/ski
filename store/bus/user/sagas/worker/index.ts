import { clearUser, currentPage, getUsers} from "../../actions"

import { UsersApi } from "../../../../../services/index"
import { makeRequestWithSpinner } from "../../../../global-worker"
import { User, UserRequestType } from "../../types"
import { put } from "@redux-saga/core/effects";

export function* userList({payload}: {payload: UserRequestType}) {
    yield put(currentPage(payload.page));

    const options = {
        fetcher: UsersApi.getUsers, 
        startFetching: getUsers.start, 
        stopFetching: getUsers.stop, 
        fill: getUsers.fill,
        setErrorAction: getUsers.error,
        fetcherParam: payload,
    }
    //глобальный сага воркер
    //подходит для простых типичных запросов
    yield makeRequestWithSpinner<User[], UserRequestType>(options)

    yield put(clearUser())
}