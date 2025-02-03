import { useState } from 'react';
import data from './data';
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";
import { FaQuoteRight } from "react-icons/fa";

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0); // Maneja el índice de la persona actual
  const {id,name,job,image,text} = data[currentIndex]


  function prevPerson() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  }

  function nextPerson() {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }

  function random() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * data.length);
    } while (newIndex === currentIndex); // Reintenta si el nuevo número es igual al actual

    setCurrentIndex(newIndex);
  }

  return (
    <main className="main">
      <article className="review" key={id}>
        <div className="img-container">
          <img
          className="person-img"
          src={image}
          alt={name}
        />
       <span className="quote-icon">
        <FaQuoteRight />
       </span>
        </div>
        
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <GrCaretPrevious onClick={prevPerson} style={{color:'var(--primary-600)',fontWeight:'bold',cursor:'pointer'}} />
        <GrCaretNext onClick={nextPerson} style={{color:'var(--primary-600)',fontWeight:'bold',cursor:'pointer'}}/>
        </div>
        
        <div style={{marginTop:'20px'}}>
          <button onClick={random} type='button' className='btn btn-hipster'>Surprise Me</button>
        </div>
        
      </article>
      
    </main>
  );
};

export default App;
