import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ card }) => {
    const { id, title_service, image, price, short_description } = card
    return (
        <div className='hover:ease-in-out'>
            <Link to={`/details/${id}`}>
                <div className="bg-[#ffffff] group hover:shadow-2xl shadow-lg rounded-lg hover:duration-100 hover:delay-100  border group relative pb-2">
                    <img className="w-full mb-5 rounded-t-lg" src={image} alt="" />
                    <div className="relative">
                        <div className="w-3/5 group-hover:w-4/5 group-hover:duration-1000 group-hover:delay-500 h-10 
                            border-l-[50px] border-l-[#fd5884]
                            border-t-[40px] border-t-[#fd5884]
                            border-r-[30px] border-r-transparent">
                        </div>
                        <h4 className="text-2xl absolute top-1 left-1 ml-2 font-bold text-white">{title_service}</h4>
                    </div>
                    <hr className="w-9/12 mt-4 ml-6 border-t-2 border-black" />

                    <p className="text-base font-medium mb-3 pl-6 mt-3">{short_description}</p>
                    <hr className="w-4/12 ml-6 mt-4 mb-4 border-t-2 border-black" />
                    <div className="flex gap-8 items-center justify-between pl-6 mb-2">
                        <p className="text-lg mb-3  font-semibold text-[#26ae31]">Price :{price}</p>
                        <button className="bg-[#fd5884] invisible group-hover:visible group-hover:duration-1000 group-hover:delay-200 group-hover:opacity-100 opacity-5 text-white text-xl font-bold px-5 ml-10 group-hover:mr-8 rounded-md py-1 ">View</button>
                    </div>

                </div>
            </Link>


        </div>
    );
};

ServiceCard.propTypes = {
    card: PropTypes.object,
}
export default ServiceCard;

// text-[#3cb1d1]"