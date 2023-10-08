import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';

const SpecialTeamCard = ({ card }) => {
    const { name, trainer_title, trainer_description, image } = card
    return (
        <div className='border bg-white'>
            <div className="bg-[#c1cdc5] text-center">
            <h3 className="text-2xl font-bold pt-2 mb-1">{name}</h3>
            <h5 className='mb-2 font-medium'>{trainer_title}</h5>
            <hr className="w-3/12 m-auto border-t-4 border-pink-500 h-1 mt-5 text-pink-500 mb-6" />
            <img src={image} alt="" />
            </div>
            <div>
                <p className='text-center py-3'>{trainer_description}</p>
                <hr className='border-black' />
                <div className='flex justify-center gap-3 mt-3 pb-3'>
                    <a className='text-2xl text-blue-400' href="#"><BiLogoTwitter></BiLogoTwitter></a>
                    <a className='text-2xl text-blue-900' href="#"><BiLogoFacebook></BiLogoFacebook></a>
                    <a className='text-2xl text-red-500' href="#"><BiLogoInstagram></BiLogoInstagram></a>
                </div>
            </div>
        </div>
    );
};

export default SpecialTeamCard;