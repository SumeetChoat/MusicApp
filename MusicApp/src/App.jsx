import { useState } from 'react';
import LikeButton from './LikeButton';
import jbImage from "./assets/jbpics.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Justin Bieber's Tracklist</h1>
        <img src={jbImage} />
        <h4>Biography</h4>
        <p>Justin Bieber is a Canadian singer, songwriter, and pop icon. Rising to fame as a teenager, his captivating vocals and charming persona won the hearts of millions worldwide. With chart-topping hits like "Baby" and "Sorry," Bieber's music showcases his smooth R&B-infused pop style. Beyond his musical achievements, he has also been involved in philanthropy, supporting various charitable causes. Bieber's artistic evolution and enduring impact have solidified his place as one of the most influential and successful artists of his generation. </p>
        <ul>
          <li>
            Justin Bieber - Baby 3:33 <LikeButton />
          </li>
          <li>
            Justin Bieber - Stay 3:45 <LikeButton />
          </li>
          <li>
            Justin Bieber - Love me 3:10 <LikeButton />
          </li>
          <li>
            Justin Bieber - Peaches 3:59 <LikeButton />
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
