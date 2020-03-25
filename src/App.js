import React, { useState } from 'react'
import FriendCard from './FriendCard/FriendCard';
import friends from "./friends.json";
import Wrapper from './Wrapper';
import Score from "./Score/Score";




function App() {


  const [clickedIds, setClickedIds] = useState([]);



  const shuffle = list => {
    list.sort(() => {
      const comparison = Math.random() - 0.5;
      console.log('COMPARISON', comparison)
      return comparison;
    })
  }

  const [score, setScore] = useState(0);



  shuffle(friends);
  return (
    // <img src={image} onClick={this.imageClick} style={{ "pointer-events": "all" }} />
    <>

      <Score score={score} />



      <Wrapper>


        {friends.map(friend => (

          <FriendCard
            setScore={setScore}
            score={score}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            id={friend.id}
            key={friend.id}
          />
        ))}


      </Wrapper>
    </>


  );
}




export default App;
