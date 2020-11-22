import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className="about__container">
            <h2>react-movie-app</h2>

            <h4>●movie api (by.nomad coder)</h4>
            <div>
                https://yts-proxy.now.sh/list_movies.json<br/>
                https://yts-proxy.now.sh/movie_details.json?movie_id=10
            </div><br/>

            <h4>●add library</h4>
            <div>
                npm install prop-types<br/>
                npm install axios<br/>
                npm install react-router-dom
            </div><br/>

            <h4>●react theory</h4>
            <div>
                JSX<br/>
                State<br/>
                Props<br/>
                Class Components<br/>
                Data Fetching<br/>
                Routing
            </div>
        </div>
    );
}

export default About;
