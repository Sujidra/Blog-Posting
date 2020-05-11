

export const setText = ({text=""})=>{
    return{
        type:"TEXT_FILTER",
        text,
    }
}

export const setSortBy = ({sortBy="Date"})=>{
    return{
        type:"SORETBY_FILTER",
        sortBy,
    }
}