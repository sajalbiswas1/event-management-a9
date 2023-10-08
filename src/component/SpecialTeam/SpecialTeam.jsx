import { useEffect } from "react";


const SpecialTeam = () => {
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>console.log(data.trainer))
    },[])
    return (
        <div>
            <h3>Our Spacial Teriner</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut. Tempora, voluptatum? Harum, reprehenderit eligendi. Laboriosam temporibus beatae porro sequi vero aut. Perferendis at officiis ut accusantium nulla suscipit. Recusandae.</p>
            <div>

            </div>
        </div>
    );
};

export default SpecialTeam;