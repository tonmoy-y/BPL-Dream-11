import { Flag } from 'lucide-react';
import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlayerCard = ({ coin, setCoin, player , setSelectedPlayers ,selectedPlayers }) => {
    const { name, country, rating, batting_style, bowling_style, player_type, price, image } = player;
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {
        if (coin >= price) {
            setCoin(coin - price);
            if(selectedPlayers.length == 6){
                toast.error("You have already selected 6 players! You can't select more than 6 players.");
                return;
            }
            toast.success(`${name} is selected!`);
            setIsSelected(true);
            setSelectedPlayers([...selectedPlayers, player]);
            // console.log(selectedPlayers);//
        } else {
            toast.error("You don't have enough coins to select this player");
        }


        setIsSelected(true);
    }
    return (
        <div className='space-y-3'>
            <div className='rounded-xl p-6 border border-gray-300 '>
                <div className='max-w-102.5 max-h-60 overflow-hidden rounded-lg'>
                    <img src={image} alt={name} className='w-full h-full bg-cover' />
                </div>
                <div className="mt-4 space-y-3">
                    <h3 className='text-xl font-semibold flex items-center gap-3'> <FaUser className='rounded-full' /> {name}</h3>
                    <div className='flex justify-between pb-4 border-b border-gray-300'>
                        <p className='flex gap-2 items-center'>  <FaFlag className='text-gray-400' /> {country} </p>
                        <button className='btn pointer-events-none font-normal'> {player_type}</button>
                    </div>
                </div>

                <div className='mt-4 space-y-2.5'>
                    <p className='font-semibold'>Rating: {rating}</p>
                    <div className='flex justify-between'>
                        <p className='font-semibold'> {batting_style}</p>
                        <p className='font-medium'>{bowling_style}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Price: ${price.toLocaleString()} </p>
                        {
                            isSelected ? <button className='btn btn-outline' disabled>Selected</button> : <button onClick={ handleSelectPlayer} className='btn btn-outline'>Choose Player</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;