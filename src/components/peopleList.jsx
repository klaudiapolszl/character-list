import React from "react";
import { connect } from "react-redux";
import getPeople from "../services/peopleServices.js";


class PeopleList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPeople();
    }

    getPerson = people => {
        const name = people.name;
        return (
            <div>
                { name }
                <button>Check this out <i className="far fa-address-card"></i></button>
            </div>
        );
    };

    render() {
        return (<div>
            <ul>
                {this.props.people.map(this.getPerson)}
            </ul>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next page</a>
                <ul className="pagination-list">
                    <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                    <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                </ul>
            </nav>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        people: state.people
    }
}

export default connect(
    mapStateToProps,
    { getPeople }
)(PeopleList);
