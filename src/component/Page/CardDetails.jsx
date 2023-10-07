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
            <div className="w-10/12 m-auto pb-16">
                <div className="flex items-center justify-between pt-14 mb-6">
                    <h3 className="text-4xl font-bold ">{result.title_service}</h3>
                    <p className="flex items-center"><Link to={'/'}>Home</Link> <AiOutlineRight></AiOutlineRight>{result.title_service}<AiOutlineRight></AiOutlineRight>our course details</p>
                </div>
                <hr className=" mt-4 mb-4 border-t-2 border-black" />
                <div className="mt-16 w-8/12 m-auto mb-24 bg-white">
                    <img className="w-full rounded-lg" src={result.image} alt="" />
                    <div className="flex">
                        <div>
                            <p className="px-5 py-3 mt-5 text-xl font-semibold bg-rose-400 text-white">{result.price}</p>
                        </div>
                        <div className="pl-8 pr-10 pb-10">
                            <h3 className="text-4xl font-bold mt-5">{result.title_service}</h3>
                            <p className="mt-5">30 day | 28 class | Advance</p>
                            <hr className=" mt-4 mb-4 border-t-2 border-black" />
                            <p className="flex gap-4"><CiStopwatch className="text-xl"></CiStopwatch> 2:00 hr/Day</p>
                            <p className="text-base font-normal text-[#0B0B0BB2] mt-5">{result.description}</p>
                            <Link to={'/'}><button className="text-xl text-white bg-rose-400 hover:bg-red-300 px-5 py-3 mt-5 font-semibold">Enrol Now For {result.price}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;