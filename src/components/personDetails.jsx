import * as React from "react";
import { connect } from "react-redux";
import { getPerson } from "../services/peopleServices";

export class PersonDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPerson(id);
    }

    render() {
        return (
            <div>
                { !this.props.isLoading ? (
                    <div>
                        <a href="/"><i className="fas fa-angle-left details__arrow"></i></a>
                        <p>Name: { this.props.details.name }</p>
                        <p>Gender: { this.props.details.gender }</p>
                        <p>Height: { this.props.details.height }</p>
                        <p>Birth year: { this.props.details.birth_year }</p>
                        <p>Hair color: { this.props.details.hair_color }</p>
                        <p>Skin color: { this.props.details.skin_color }</p>
                        <p>Eye color: { this.props.details.eye_color }</p>
                    </div>
                    )
                    : (<div className={(this.props.isLoading ? '' : 'is-unactive')}>
                        <div className="pageloader">
                            <i className="fas fa-jedi fa-pulse pageloader__icon"></i>
                            <span className="pageloader__text">Loading...</span>
                        </div>
                    </div>)
                }
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
