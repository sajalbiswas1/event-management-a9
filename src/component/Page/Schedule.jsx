const Schedule = () => {
    return (
        <div>

            <div className="bg-cover sm:w-10/12 w-full m-auto min-h-screen" style={{ backgroundImage: "url('https://i.ibb.co/VVDGbfs/maditation1.jpg')" }}>
                <div className='bg-[#aa7841] pb-10'>
                    <div data-aos="fade-down" data-aos-easing="linear">
                    <h3 className='text-white text-4xl font-bold text-center pt-10'>YOGA SCHEDULE</h3>
                    <h3 className='w-64 rounded-md mt-5 m-auto text-center text-lg font-bold text-[#aa7841] bg-white'>Yoga & mediation Studio</h3>
                    </div>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic"data-aos-duration="2000" className='w-80 m-auto bg-opacity-20 bg-[#fbeaea] my-10'>
                    <div className='flex font-semibold justify-evenly py-3 items-center gap-10 text-[#fff]'>
                        <p>Sunday</p>
                        <p>07:00-11:00 AM<br />
                        Fitness Class
                        </p>
                    </div>
                    <div className='flex font-semibold justify-evenly py-3 items-center gap-10 text-[#fff]'>
                        <p>Monday </p>
                        <p>07:00-11:00 AM<br />
                        Yoga class
                        </p>
                    </div>
                    <div className='flex font-semibold justify-evenly py-3 items-center gap-10 text-[#fff]'>
                        <p>Tuesday </p>
                        <p>07:00-11:00 AM<br />
                        Yoga Dance
                        </p>
                    </div>
                    <div className='flex font-semibold justify-evenly py-3 items-center  text-[#fff]'>
                        <p>Wednesday </p>
                        <p>07:00-11:00 AM<br />
                         Exercises
                        </p>
                    </div>
                    <div className='flex font-semibold justify-evenly py-3 items-center gap-10 text-[#fff]'>
                        <p>Sunday</p>
                        <p>07:00-11:00 AM<br />
                        Kundalini 
                        </p>
                    </div>
                    <div className='flex justify-evenly font-semibold  py-3 items-center gap-10 text-[#fff]'>
                        <p>Thursday </p>
                        <p>07:00-11:00 AM<br />
                        mediation
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Schedule;