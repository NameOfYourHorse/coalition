import React from 'react'
import Vote from '../vote/Vote';
import Petition from './Petition';

const PetitionList = ({ petitions, showVote }) => {
  return (
    <div>
      {petitions && (petitions.map((petition, i) => <Petition key={i} petition={petition} showVote={showVote} />))}
    </div>
  )
}

export default PetitionList
