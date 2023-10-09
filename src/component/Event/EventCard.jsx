import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
    const { title, image, paragraph, paragraph2,event_on } = event
    return (

        <div>
            <div className={`${event_on === 'false'?'flex flex-row-reverse':'flex'} gap-14 mb-14`}>
           <div className='w-1/2'>
           <img src={image} alt="" />
           </div>
            <div className='w-1/2'>
                <h3 className='text-2xl font-bold text-green-600'>{title}</h3><br />
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