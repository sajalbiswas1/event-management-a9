import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const Event = () => {
    const [events, setEvent] = useState([])
    useEffect(() => {
        fetch('/eventProgram.json')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div className="w-10/12 m-auto md:mt-16 mt-4">
            <h3 className="md:text-4xl text-2xl text-left font-bold mb-2"><span className="text-pink-500">About</span> Our Program</h3>
            <hr className=" border-t border-black h-1 md:mt-5 text-black md:mb-14 mb-4" />
            <div className="">
                {
                    events.map(event => <EventCard key={event.idx} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Event;