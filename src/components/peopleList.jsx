import React from "react";
import { connect } from "react-redux";
import getPeople, { getPeopleFromPage } from "../services/peopleServices.js";

class PeopleList extends React.Component {
    componentDidMount() {
        this.props.getPeople();
    }

    getPerson = people => {
        const name = people.name;
        const id = people.url.replace("http://swapi.dev/api/people/", "");

        return (
            <tr key={ id }>
                <td className="table__cell table__cell__name">
                    <a href={`person/${id}`} className="character-name__link">
                        <p>{name}</p>
                    </a>
                </td>
                <td className="table__cell table__cell__btn">
                    <a href={`person/${id}`}>
                        <button className="character-name__btn">
                            <div className="character-name__btn__icon">
                                <i className="far fa-address-card"></i>
                            </div>
                            <span className="character-name__btn__text">Check</span>
                        </button>
                    </a>
                </td>
            </tr>
        );
    };

    nextPage = () => {
        if(this.props.next) {
            this.props.getPeopleFromPage(this.props.next.replace("http", "https"));
        }
    };

    prevPage = () => {
        if(this.props.prev) {
            this.props.getPeopleFromPage(this.props.prev.replace("http", "https"));
        }
    };

    render() {
        return (
            <div className="page">
                <a href="/">
                    <img className="logo" src="logo.png" alt="logo" />
                </a>
                <div className="component component-people">
                    { !this.props.isLoading ? (
                        <div>
                            <table className="table character-name__table">
                                <tbody>
                                    {this.props.people.map(this.getPerson)}
                                </tbody>
                            </table>
                            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                                <a onClick={this.prevPage}>
                                    <i className="fas fa-chevron-circle-left pagination__arrows pagination__arrows--prev" ></i>
                                </a>
                                <a onClick={this.nextPage}>
                                    <i className="fas fa-chevron-circle-right pagination__arrows pagination__arrows--next"></i>
                                </a>
                            </nav>
                        </div>
                    )
                    : (<div className={(this.props.isLoading ? "" : "is-unactive")}>
                            <div className="pageloader">
                                <i className="fas fa-jedi fa-pulse pageloader__icon"></i>
                                <span className="pageloader__text">Loading...</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        isLoading: state.isLoading,
        next: state.next,
        prev: state.prev,
    }
}

export default connect(
    mapStateToProps,
    { getPeople, getPeopleFromPage }
)(PeopleList);
