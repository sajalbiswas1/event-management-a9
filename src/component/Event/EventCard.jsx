import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
    const { title, image, paragraph, paragraph2,event_on } = event
    return (

        <div>
            <div data-aos={`${event_on === 'false'?"zoom-in-right":"zoom-in-left"}`} data-aos-duration="2000" className={`${event_on === 'false'?'lg:flex lg:flex-row-reverse':'lg:flex'} gap-14 mb-14`}>
           <div className='lg:w-1/2'>
           <img src={image} alt="" />
           </div>
            <div className='lg:w-1/2 lg:mt-0 mt-4'>
                <h3 className='md:text-2xl text-xl font-bold text-green-600'>{title}</h3><br />
                <p>{paragraph}</p><br />
                <p>{paragraph2}</p>
            </div>
        </div>

        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.object,
}
export default EventCard;