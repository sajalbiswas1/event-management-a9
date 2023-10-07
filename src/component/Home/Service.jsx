import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="bg-[#F2E9D2] pt-10">
            <div className="w-10/12 m-auto">
                <h3 className="text-5xl text-center font-bold mb-2"><span className="text-pink-500">Our</span> service</h3>
                <hr className="w-2/5 m-auto border-t-4 border-black h-1 mt-5 text-black mb-10" />
                <div className="grid gap-10 grid-cols-3 mt-3">
                    {
                        data.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
                    }
                </div>
                
            </div> 
        </div>
    );
};

export default Service;