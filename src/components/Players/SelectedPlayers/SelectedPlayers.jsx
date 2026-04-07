import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { MdOutlineDeleteForever } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


const SelectedPlayers = ({selectedPlayers, setSelectedPlayers , coin , setCoin}) => {
    console.log(selectedPlayers);
    const handleDeletePlayer = (player) => {
        const updatedPlayers = selectedPlayers.filter(p => p.id !== player.id);
        setSelectedPlayers(updatedPlayers);
        toast.error(`${player.name} is removed!`);
        setCoin(coin + player.price);
    }
    if (selectedPlayers.length !== 0) {
    return (
        <div className='py-8 '>
            {
                selectedPlayers.map(player => {
                    return (
                        <div key={player.id} className='border border-gray-300 rounded-lg p-4 mb-4'>
                           <div className='flex gap-6 items-center'>
                            <div>
                            <img src={player.image} alt={player.name} className='h-20 w-20'/>
                           </div>
                           <div className='flex flex-col gap-2'>
                            <h3 className='text-xl font-semibold flex items-center gap-3'> <FaUser className='rounded-full' /> {player.name} </h3>
                            <p className=''>{player.player_type}</p>
                           </div>
                           <div className='ml-auto'>
                            <button className='btn' onClick={() => handleDeletePlayer(player)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                           </div>
                           </div>
                        </div>
                    );
                })
            }
        </div>
    );
} else {
    return (
        <div className='py-30 text-center'>
            <h3 className='text-xl font-semibold flex items-center justify-center gap-3'> <FaFlag className='rounded-full' /> No player selected yet! </h3>
        </div>
    );
}
};

export default SelectedPlayers;