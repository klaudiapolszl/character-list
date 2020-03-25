const apiUrl = "https://swapi.co/api/";
const endpoints = {
    people: apiUrl + "people/",
};

export default function getPeople() {
    return function(dispatch) {
        return fetch(endpoints.people,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
            .then( r => r.json() )
            .then( json => {
                    dispatch({ type: "SET_PEOPLE", people: json.results })
                }
            );
    }
}
