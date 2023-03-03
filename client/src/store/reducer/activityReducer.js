const initialState = {
    activities: [],
    activity: {},
    Loading: true
}

export default function foodReducer(state = initialState, action) {
    switch (action.type) {
        case "activities/fetchActivities":
            return {
                ...state,
                activities: action.payload
            }
        case "activity/fetchActivity":
            return {
                ...state,
                activity: action.payload
            }
        case "loading/isLoading":
            return {
                ...state,
                Loading: true
            };
        case "loadingDone/isDone":
            return {
                ...state,
                Loading: false
            }
        default:
            return state
    }
}

