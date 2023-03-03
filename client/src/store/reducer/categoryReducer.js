const initialState = {
    categories: [],
    Loading: true
}
export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "categories/fetchCategories":
            return {
                ...state,
                categories: action.payload
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