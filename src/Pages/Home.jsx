import axios from 'axios';

const Home = () => {

    // fetch('http://localhost:3000/users')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error fetching users:', error));

    // const axios = require('axios');
    axios.get('http://localhost:3000/allUsers')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })

    return (
        <div>
            <h1>I am home</h1>
        </div>
    );
};

export default Home;