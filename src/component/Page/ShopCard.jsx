import PropTypes from 'prop-types';

const ShopCard = ({ card }) => {
    const { name, image,price } = card

    return (
        <div>
            <div className='border bg-white rounded-lg hover:drop-shadow-2xl'>
                <div className="bg-[#bde4ca] rounded-lg text-center">
                    <img className='rounded-t-lg' src={image} alt="" />
                    <h3 className="text-2xl font-bold pt-2 mb-1">{name}</h3>
                    <p className="text-lg mb-3  font-semibold text-[#26ae31]">Price :{price}</p>
                    <button className="bg-[#fd5884] w-full text-white text-xl font-bold px-5 rounded-md py-1">Parches</button>

                </div>
            </div>
        </div>
    );
};
ShopCard.propTypes = {
    card: PropTypes.object,
}
export default ShopCard;