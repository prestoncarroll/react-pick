import React from 'react'
import FriendCard from './FriendCard/FriendCard';
import friends from "./friends.json";
import Wrapper from './Wrapper';




function App() {
  return (


    <Wrapper>

      <FriendCard

        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
    </Wrapper>


  );
}




export default App;
