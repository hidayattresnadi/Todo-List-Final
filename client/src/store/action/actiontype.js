import axios from 'axios'
import { FETCH_ACTIVITIES, FETCH_CATEGORIES, FETCH_ACTIVITY } from './actioncreator'
import { failedSwal, successSwal } from '../../helper'
const baseUrl = "http://localhost:4002/"
export function login(dataLogin) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: baseUrl + "users/login",
                method: "POST",
                data: dataLogin
            })
            localStorage.setItem("acess_Token", data.acessToken)
        } catch (error) {
            console.log(error)
        }
    }
}

export function register(dataRegister) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: baseUrl + "users/register",
                method: "POST",
                data: dataRegister
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function fetchActivities() {
    return async (dispatch) => {
        try {
            dispatch({
                type: "loading/isLoading"
            })
            const { data } = await axios({
                url: baseUrl + "activities",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                }
            })
            // console.log(data)
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: data
            })

        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch({
                type: "loadingDone/isDone"
            })
        }
    }
}

export function getActivityById(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: baseUrl + "activities/" + `${id}`,
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                }
            })
            console.log(data)
            dispatch({
                type: FETCH_ACTIVITY,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function editActivityById(editedActivity, id) {
    return async (dispatch) => {
        console.log(id)
        try {
            const { data } = await axios({
                url: baseUrl + 'activities/' + 'name' + `/${id}`,
                method: "PATCH",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                },
                data: editedActivity,
            })
            dispatch(fetchActivities())
        } catch (error) {
            console.log(error)
        }
    }
}

export function markActivity(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: baseUrl + 'activities' + `/${id}`,
                method: "PATCH",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                },
            })
            // dispatch(fetchActivities())
        } catch (error) {
            console.log(error)
        }
    }
}

export function addActivity(newActivity) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: baseUrl + "activities",
                method: "post",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                },
                data: newActivity
            })
            successSwal("success to add new activity")
            dispatch(fetchActivities())
        } catch (error) {
            failedSwal(error.response.data.message)
        }
    }
}

export function deleteActivity(id) {
    return async (dispatch) => {
        try {
            console.log(id)
            const { data } = await axios({
                url: baseUrl + "activities" + `/${id}`,
                method: "DELETE",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                }
            })
            successSwal(data.message)
            dispatch(fetchActivities())
        } catch (error) {
            console.log(error)
        }
    }
}


export function fetchCategories() {
    return async (dispatch) => {
        try {
            dispatch({
                type: "loading/isLoading"
            })
            const { data } = await axios({
                url: baseUrl + "categories",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                }
            })
            // console.log(data)
            dispatch({
                type: FETCH_CATEGORIES,
                payload: data
            })

        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch({
                type: "loadingDone/isDone"
            })
        }
    }
}

export function addCategory(newCategory) {
    return async (dispatch) => {
        try {
            const { data } = await axios({
                url: baseUrl + "categories",
                method: "post",
                headers: {
                    acesstoken: localStorage.getItem("acess_Token")
                },
                data: newCategory
            })
            successSwal("success to add new category")
            dispatch(fetchCategories())
        } catch (error) {
            failedSwal(error.response.data.message)
        }
    }
}