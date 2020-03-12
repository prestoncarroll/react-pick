import React, { useState } from 'react'
import FriendCard from './FriendCard/FriendCard';
import friends from "./friends.json";
import Wrapper from './Wrapper';
import Score from "./Score/Score";




function App() {

  const shuffle = list => {
    list.sort(() => {
      const comparison = Math.random() - 0.5;
      console.log('COMPARISON', comparison)
      return comparison;
    })
  }

  const [score, setScore] = useState(0);
  ;
  

  shuffle(friends);
  return (
    // <img src={image} onClick={this.imageClick} style={{ "pointer-events": "all" }} />
    <>

      <Score score={score} />



      <Wrapper>


        <FriendCard
          setScore={setScore}
          score={score}
          name={friends[0].name}
          image={friends[0].image}
          occupation={friends[0].occupation}
          location={friends[0].location}
        />
        <FriendCard
          setScore={setScore}
          score={score}
          name={friends[1].name}
          image={friends[1].image}
          occupation={friends[1].occupation}
          location={friends[1].location}
        />
        <FriendCard
          setScore={setScore}
          score={score}
          name={friends[2].name}
          image={friends[2].image}
          occupation={friends[2].occupation}
          location={friends[2].location}
        />
        <FriendCard
          setScore={setScore}
          score={score}
          name={friends[3].name}
          image={friends[3].image}
          occupation={friends[3].occupation}
          location={friends[3].location}
        />
        <FriendCard
          setScore={setScore}
          score={score}
          name={friends[4].name}
          image={friends[4].image}
          occupation={friends[4].occupation}
          location={friends[4].location}
        />
      </Wrapper>
    </>


  );
}




export default App;
