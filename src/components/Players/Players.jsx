import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({coin,setCoin , PlayersPromise}) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const data = use(PlayersPromise);
    // console.log(data);/
    const [selectedType, setSelectedType] = useState('Available');
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'> { selectedType === "Available" ? "Available Players":`Selected(${selectedPlayers.length}/6)` }</h2>
                <div className=''>
                    <button onClick={() => setSelectedType("Available")} className={`btn ${selectedType === 'Available' ? 'bg-[#E7FE29]' : ''} rounded-r-none border-r-0 `}>Available</button>
                    <button onClick={() => setSelectedType("Selected")} className={`btn ${selectedType === 'Selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none  border-l-0`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>


        {
            selectedType === "Available" ? <AvailablePlayers coin={coin} setCoin = {setCoin} players = {data} setSelectedPlayers = {setSelectedPlayers} selectedPlayers={selectedPlayers} > </AvailablePlayers  > : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}> </SelectedPlayers>
        }
       
        </div>
    );
};

export default Players;