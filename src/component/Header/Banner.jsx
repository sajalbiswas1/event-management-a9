import banner from '../../assets/bg3.jpg'

const Banner = () => {
    return (
        <div >
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-7xl text-white font-bold">Keep Your Mind Best Condition</h1>
                        <p className="mb-5 text-lg text-white">There are several benefits that accompany regular mediation. On the whole, <br /> it gives one a sense of peace, calm, and solitude</p>
                        <button className="px-8 py-3 rounded-3xl text-base text-white  bg-[#dd6969]">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;