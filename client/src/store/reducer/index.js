import { combineReducers } from "redux";
import activityReducer from "./activityReducer";
import categoryReducer from "./categoryReducer";
const reducers = combineReducers({
      activityReducer,categoryReducer
})

export default reducers