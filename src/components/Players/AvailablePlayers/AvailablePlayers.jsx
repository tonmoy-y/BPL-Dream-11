import React from 'react';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({coin ,setCoin , players , setSelectedPlayers ,selectedPlayers }) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-8'>
            {players.map(player => (
                <PlayerCard key={player.id} coin={coin} setCoin = {setCoin} player={player} setSelectedPlayers = {setSelectedPlayers} selectedPlayers={selectedPlayers}> </PlayerCard>
            ))}
        </div>
    );
};

export default AvailablePlayers;