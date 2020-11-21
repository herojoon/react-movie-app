import React from 'react';
import PropTypes from 'prop-types';  // https://github.com/facebook/prop-types

function Food({name, picture, rating}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating} / 5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

// id: map key 정의
// rating: npm install prop-types로 type validation
const foodLike = [
    {
        id: 1,
        name: 'taco',
        image: 'http://freefoodphotos.com/imagelibrary/snacks/thumbs/filling_tacco.jpg',
        rating: 5
    },
    {
        id: 2,
        name: 'strawberry',
        image: 'http://freefoodphotos.com/imagelibrary/fruit/thumbs/ripened_red_strawberries.jpg',
        rating: 4.5
    },
    {
        id: 3,
        name: 'cake',
        image: 'http://freefoodphotos.com/imagelibrary/confectionery/thumbs/mini_raspeberry_pavlovas.jpg',
        rating: 4.8
    },
    {
        id: 4,
        name: 'broccoli',
        image: 'http://freefoodphotos.com/imagelibrary/vegetables/thumbs/broccoli_floretes.jpg',
        rating: 2.7
    }
];

/*function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}*/
const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;

function App() {
    console.log(foodLike.map(renderFood))
  return (
    <div>
        {foodLike.map(renderFood)}
    </div>
  );
}

// setting prop validation (자료형, 이름 검사)
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    // error: index.js:1 Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.
    //rating: PropTypes.string
    rating: PropTypes.number
}

export default App;
