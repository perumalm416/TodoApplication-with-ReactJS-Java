


const initialState={
    todoFormUpdateStatus:false,
}
export const TodoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "tODO_FORM_UPDATE":{
            const formUpdateStatus=state.todoFormUpdateStatus;
            return {todoFormUpdateStatus:!formUpdateStatus};
        }           
    
        default:{
            return state
        }
           
    }

}