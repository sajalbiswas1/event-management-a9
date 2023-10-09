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
        <div className="bg-[#F2E9D2] md:pt-10 pt-2 md:pb-10 pb-4">
            <div className="w-10/12 m-auto">
                <h3 className="md:text-5xl text-2xl text-center font-bold mb-2"><span className="text-pink-500">Our</span> service</h3>
                <hr className="w-2/5 m-auto md:border-t-4 border-black md:h-1 md:mt-5 text-black md:mb-14 mb-5" />
                <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 mt-3">
                    {
                        data.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
                    }
                </div>
                
            </div> 
        </div>
    );
};

export default Service;