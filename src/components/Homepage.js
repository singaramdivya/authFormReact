// Homepage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
      const data = await response.json();
      if (!data.error) {
        setJokes(data.jokes);
      } else {
        console.error('Error fetching jokes:', data.message);
      }
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  }; 

  const onLoggedOut =()=>{
    navigate('/')
  }

  return (
    <div className="container w-100 vh-100">  
      <div className='d-flex flex-row justify-content-between m-4 mt-5'>
        <h3 className='text-white'>           Homepage</h3>
        <button onClick={onLoggedOut} className="btn btn-primary pl-2">Logout</button>
      </div>
      <table className="table table-bordered table-hover table-primary">
      <thead className="thead-warning">
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
