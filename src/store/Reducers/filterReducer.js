import moment from "moment"

const defaultFilters = {
    text:"",
    sortBy:"lastedit"
}
const filterReducers=(state=defaultFilters,action)=>{
    switch(action.type){
        case "TEXT_FILTER":return{
            ...state,
            text:action.text
        }
        
        case "SORETBY_FILTER":return{
            ...state,
            sortBy:action.sortBy
        }
        default:return state;

    }
    return state;
}
export default filterReducers;