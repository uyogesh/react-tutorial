const init = {
    fetched_data:{
        location: '',
        time: ''
    },
    data_loaded: false
}
export default (state = init, action) => {
    switch(action.type){
        case 'SET_LOCATION_DATA':
            return {...state,
            'fetched_data': action.payload,
            'data_loaded': true
            }
        default: 
           return state;
    }

}
