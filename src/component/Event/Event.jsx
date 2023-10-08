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
        <div className="w-10/12 m-auto mt-16">
            <h3 className="text-4xl text-left font-bold mb-2"><span className="text-pink-500">About</span> Our Program</h3>
            <hr className=" border-t border-black h-1 mt-5 text-black mb-14" />
            <div>
                {
                    events.map(event => <EventCard key={event.idx} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Event;