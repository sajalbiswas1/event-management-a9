import { useEffect, useState } from "react";
import SpecialTeamCard from "./SpecialTeamCard";
import { GiAlienFire } from 'react-icons/gi';


const SpecialTeam = () => {
    const [trainer,setTrainer]=useState([])
    useEffect(()=>{
        fetch('/trainer.json')
        .then(res=>res.json())
        .then(data=>setTrainer(data))
    },[])
    return (
        <div className="bg-[#F2E9D2]">
            <div data-aos="fade-down" data-aos-duration="2000" className="w-10/12 m-auto pt-10 pb-10">
            <h3 className="md:text-5xl text-2xl text-center font-bold mb-2"> Our <span className="text-pink-500">Special Trainer</span></h3>
            <div className="flex justify-center gap-3">
            <hr className="w-3/12 border-t-4 border-black h-1 mt-5 text-black mb-6" />
            <GiAlienFire className="text-3xl text-[#8f5a5a]"></GiAlienFire>
            <hr className="w-3/12 border-t-4 border-black h-1 mt-5 text-black mb-6" />
            </div>
            <p className=" text-center text-lg font-normal w-8/12 m-auto mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut. Tempora, voluptatum? Harum, reprehenderit eligendi.  Harum, reprehende.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 m-auto gap-8">
                {
                    trainer.map(card => <SpecialTeamCard key={card.id} card={card}></SpecialTeamCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default SpecialTeam;