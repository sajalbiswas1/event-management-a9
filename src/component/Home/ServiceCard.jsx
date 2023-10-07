

const ServiceCard = ({ card }) => {
    const { title_service, image, price, description, short_description } = card
    console.log(card)
    return (
        <div>
            <div className="bg-[#ffffff] group hover:shadow-2xl shadow-lg rounded-lg hover:duration-100 hover:delay-100 hover:-inset-4 border group relative">
                <img className="w-full mb-5" src={image} alt="" />
                <div className="relative">
                    <div className="w-3/5 h-10 
  border-l-[50px] border-l-[#fd5884]
  border-t-[40px] border-t-[#fd5884]
  border-r-[10px] border-r-transparent">
                    </div>
                    <h4 className="text-2xl absolute top-1 left-1 ml-2 font-bold text-white">{title_service}</h4>
                </div>

                <p className="text-base font-medium mb-3 pl-6 mt-3">{short_description}</p>
                <div className="flex gap-8 items-center pl-6 mb-2">
                    <p className="text-lg mb-3 font-semibold text-[#26ae31]">Price :{price}</p>
                    <button className="bg-[#3cb1d1] invisible group-hover:visible text-white text-xl font-bold px-5 ml-10 rounded-md py-1 ">View</button>
                </div>

            </div>
            {/* <div className=" border p-3">
                <img className="w-full" src={image} alt="" />
                <h4 className="text-2xl font-bold mb-3 mt-3 text-[#FC3C2A]">{title_service}</h4>
                <hr className="w-11/12" />
                <p className="text-sm mb-3 w-11/12">{short_description}</p>
                <hr className="w-11/12" />
                <p className="text-lg mb-3 font-semibold text-[#26ae31]">{price}</p>
                <button className="bg-[#3cb1d1] text-white text-xl font-bold p-3 w-full">Details</button>
            </div> */}

        </div>
    );
};

export default ServiceCard;

// text-[#3cb1d1]"