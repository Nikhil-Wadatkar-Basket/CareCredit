import { createStore } from "redux";
import myReduce from "./MyReducer";

const store = createStore(myReduce);

export default store();
