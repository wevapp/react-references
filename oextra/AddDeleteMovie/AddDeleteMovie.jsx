import React, { useState } from 'react';
import ComponentStyle from './Styles/AddDeleteMovie.module.css';


// Note Possible Css module not working cause different path

const AddDeleteMovie = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [movieProduct, setNewMovieProd] = useState([]);

  const handleAdd = () => {
    const newMovie = { title, genre };
    setNewMovieProd([...movieProduct, newMovie]);
    setTitle('');
    setGenre('');
  };

  const handleRemove = (movieIndex) => {
    const filteredMovie = movieProduct.filter((movie,index) => index !== movieIndex)
    setNewMovieProd(filteredMovie)
  }

  return (
    <>
      <div className='grid grid-cols-1'>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          className='border w-32'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          className='border w-32'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button
          className='border w-32 mt-3'
          onClick={handleAdd}
        >Add</button>
      </div>

      <div className={`${ComponentStyle.mainContainer} bg-blue-300 w-full min-h-[200px] max-h-[100px] grid grid-cols-3 gap-1`}>
        {movieProduct.map((movie, index) => (
          <div
            className={`${ComponentStyle['product-container']} min-h-[80px] max-h-[80px] min-w-[200px] max-w-[200px] text-center pb-3 rounded m-2`}
            key={index}
          >
            <p>Title: {movie.title}</p>
            <p>Genre: {movie.genre}</p>
            <button className='bg-red-300'
              onClick={() => {handleRemove(index)}}
            >Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddDeleteMovie;
