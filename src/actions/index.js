import response from '../response';
const remoteURL = "https://reqres.in/api/users?page=";

export const getJSONData = (pageNumber) => {

    return (
    {
        type:'SET_LOCATION_DATA',
        payload: response
    });
}