import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="detail__data">
                        <h3 className="detail__title">{location.state.title}</h3>
                        <h5 className="detail__year">{location.state.year}</h5>
                        <p className="detail__summary">{location.state.summary}</p>
                        <ul className="detail__genres">
                            {location.state.genres.map((genre, index) => {
                                return <li key={index}>{genre}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
