import { AiOutlineRight } from "react-icons/ai";
import { CiStopwatch } from "react-icons/ci";
import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const result = data.find(card => card.id == id)
    console.log(data)
    console.log(id)
    console.log(result.title)
    return (
        <div className="bg-[#F2E9D2] ">
            <div className="sm:w-10/12 m-auto md:pb-16 pb-4">
                <div className="flex items-center justify-between md:pt-14 sm:px-0 px-6 pt-6 md:mb-6">
                    <h3 className="md:text-4xl text-2xl font-bold ">{result.title_service}</h3>
                    <div className="md:block hidden">
                    <p className="md:flex items-center "><Link to={'/'}>Home</Link> <AiOutlineRight></AiOutlineRight>{result.title_service}<AiOutlineRight></AiOutlineRight>our course details</p>
                    </div>
                </div>
                <hr className="w-10/12 sm:w-full m-auto mt-4 mb-4 border-t-2 border-black" />
                <div className="md:mt-16 lg:w-8/12 md:w-10/12 m-auto lg:mb-24 bg-white">
                    <img className="w-full rounded-lg" src={result.image} alt="" />
                    <div className="flex mt-4 ">
                        <div>
                            <p className="md:px-5 px-2 md:py-3 py-1 md:mt-5  md:text-xl font-semibold bg-rose-400 text-white">{result.price}</p>
                        </div>
                        <div className="md:pl-8 pl-3 pr-10 pb-10">
                            <h3 className="md:text-4xl text-xl font-bold md:mt-5">{result.title_service}</h3>
                            <p className="md:mt-5 mt-2">30 day | 28 class | Advance</p>
                            <hr className=" md:mt-4 mt-2 md:mb-4 mb-2 border-t-2 border-black" />
                            <p className="flex gap-4"><CiStopwatch className="text-xl"></CiStopwatch> 2:00 hr/Day</p>
                            <p className="text-base font-normal text-[#0B0B0BB2] md:mt-5 mt-2">{result.description}</p>
                            <Link to={'/'}><button className="md:text-xl text-white bg-rose-400 hover:bg-red-300 px-5 py-3 mt-5 font-semibold">Enrol Now For {result.price}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;