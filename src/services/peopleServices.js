const apiUrl = "https://swapi.co/api/";
const endpoints = {
    people: apiUrl + "people/",
};

export default function getPeople() {
    return function(dispatch) {
        dispatch({ type: "SET_LOADING", isLoading: true });
        return fetch(endpoints.people,{
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
            .then( r => r.json() )
            .then( json => {
                dispatch({ type: "SET_PEOPLE", people: json.results });
                dispatch({ type: "SET_LOADING", isLoading: false });
                dispatch({ type: "SET_NEXT_PAGE", next: json.next });
                dispatch({ type: "SET_PREVIOUS_PAGE", prev: json.previous });
                }
            );
    }
}
export function getPeopleFromPage(url) {
    return function(dispatch) {
        dispatch({ type: "SET_LOADING", isLoading: true });
        return fetch(url, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
            .then((r) => r.json())
            .then(json => {
                dispatch({ type: "SET_PEOPLE", people: json.results });
                dispatch({ type: "SET_LOADING", isLoading: false });
                dispatch({ type: "SET_NEXT_PAGE", next: json.next });
                dispatch({ type: "SET_PREVIOUS_PAGE", prev: json.previous });
            });
    }
}
export function getPerson(id) {
    return function(dispatch) {
        dispatch({ type: "SET_LOADING", isLoading: true });
        return fetch(endpoints.people + "" + id + "/?format=json", {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            })
        })
            .then((r) => r.json())
            .then(json => {
                dispatch({ type: "SET_PERSON", person: json });
                dispatch({ type: "SET_LOADING", isLoading: false });
            });
    }
}
