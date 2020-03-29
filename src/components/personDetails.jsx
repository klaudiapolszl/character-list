import * as React from "react";
import { connect } from "react-redux";
import { getPerson } from "../services/peopleServices";

export class PersonDetails extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPerson(id);
    }

    getDetails = () => {
        return (
            <div>
                <table className="table details__table is-striped">
                    <tbody>
                        <tr>
                            <td>Gender:</td>
                            <td>{ this.props.details.gender }</td>
                        </tr>
                        <tr>
                            <td>Birth year:</td>
                            <td>{ this.props.details.birth_year }</td>
                        </tr>
                        <tr>
                            <td>Height:</td>
                            <td>{ this.props.details.height }</td>
                        </tr>
                        <tr>
                            <td>Hair color:</td>
                            <td>{ this.props.details.hair_color }</td>
                        </tr>
                        <tr>
                            <td>Skin color:</td>
                            <td>{ this.props.details.skin_color }</td>
                        </tr>
                        <tr>
                            <td>Eye color:</td>
                            <td>{ this.props.details.eye_color }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    render() {
        return (
            <div className="page">
                <a href="/">
                    <img className="logo" src="/logo.png" alt="logo" />
                </a>
                <div className="component component-details">
                    { !this.props.isLoading ? (
                            <div>
                                <a href="/" onClick={this.prevPage}>
                                    <button className="details-back__btn">
                                        <div className="details-back__btn__icon">
                                            <i className="fas fa-chevron-circle-left"></i>
                                        </div>
                                        <span className="details-back__btn__text">Back</span>
                                    </button>
                                </a>
                                <div className="details__name">
                                    <h1>{ this.props.details.name }</h1>
                                </div>
                                {this.getDetails()}
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
        );
    }
}

function mapStateToProps(state) {
    return {
        details: state.person,
        isLoading: state.isLoading
    };
}

export default connect(
    mapStateToProps,
    { getPerson }
)(PersonDetails);
