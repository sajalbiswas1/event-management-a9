import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
    const [trainer,setTrainer]=useState([])
    useEffect(()=>{
        fetch('/product.json')
        .then(res=>res.json())
        .then(data=>setTrainer(data))
    },[])
    return (
        <div>
            <div className='bg-[#aa7841] pb-10'>
                <h3 className='text-white text-4xl font-bold text-center pt-10'>YOGA PRODUCT SHOPE </h3>
                <h3 className='w-64 rounded-md mt-5 m-auto text-center text-lg font-bold text-[#aa7841] bg-white'>Yoga & mediation Product</h3>
            </div>
            <div className="bg-[#F2E9D2]">
            <div className="w-10/12 m-auto pt-10 pb-10">            
            <div className="grid grid-cols-4 m-auto gap-8">
                {
                    trainer.map(card => <ShopCard key={card.id} card={card}></ShopCard>)
                }
            </div>
            </div>
        </div>
        </div>
    );
};

export default Shop;