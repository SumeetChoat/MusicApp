import { useState } from 'react';
import LikeButton from './LikeButton';
import jbImage from "./assets/jbpics.jpg"
import './App.css'


function App() {
  const [tracks, setTracks] = useState([]);
  console.log(tracks);
  const [inputText, setInputText] = useState("");

  return (
    <>
      <div>
        <h1>Justin Bieber's Tracklist</h1>
        <img src={jbImage} alt="An image of Justin Beiber" />
        <h4>Biography</h4>
        <p>
        Justin Bieber is a Canadian singer, songwriter, and pop icon. Rising to fame as a teenager, his captivating vocals and charming persona won the hearts of millions worldwide. With chart-topping hits like "Baby" and "Sorry," Bieber's music showcases his smooth R&B-infused pop style. Beyond his musical achievements, he has also been involved in philanthropy, supporting various charitable causes. Bieber's artistic evolution and enduring impact have solidified his place as one of the most influential and successful artists of his generation.
        </p>
        <ul id="tracklist">
          <li>
            Baby 3:33 <LikeButton />
          </li>
          <li>
            One Time 3:35 <LikeButton />
          </li>
          <li>
            Never Say Never 3:47 <LikeButton />
          </li>
          <li>
            Somebody to Love Remix 3:40 <LikeButton />
          </li>
          {tracks}
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTracks((state) => {
              return [
                ...state,
                <li>
                  {inputText} <LikeButton />
                </li>,
              ];
            });
          }}
        >
          <input
            type="text"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your favourite track"
          />
          <button type="submit">Add Track</button>
        </form>
      </div>
    </>
  );
}

export default App;










// function App() {
//   const [tracks, SetTracks] = useState('')

//   return (
//     <>
//       <div>
//         <h1>Justin Bieber's Tracklist</h1>
//         <img src={jbImage} />
//         <h4>Biography</h4>
//         <p>Justin Bieber is a Canadian singer, songwriter, and pop icon. Rising to fame as a teenager, his captivating vocals and charming persona won the hearts of millions worldwide. With chart-topping hits like "Baby" and "Sorry," Bieber's music showcases his smooth R&B-infused pop style. Beyond his musical achievements, he has also been involved in philanthropy, supporting various charitable causes. Bieber's artistic evolution and enduring impact have solidified his place as one of the most influential and successful artists of his generation. </p>
//         <ul>
//           <li>
//             Justin Bieber - Baby 3:33 <LikeButton />
//           </li>
//           <li>
//             Justin Bieber - Stay 3:45 <LikeButton />
//           </li>
//           <li>
//             Justin Bieber - Love me 3:10 <LikeButton />
//           </li>
//           <li>
//             Justin Bieber - Peaches 3:59 <LikeButton />
//           </li>
//         </ul>
//         <form onSubmit={handleSubmit}>
//           <input type="text" onChange={handleInput} />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default App
