

const Stat = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">

                <div className="stat">
                    <div className="stat-title text-center">We are open monday-friday</div>
                    <div className="stat text-center text-2xl font-bold text-[#FF3811]">7:00 am - 9:00 pm</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-center">Have a question?</div>
                    <div className="stat text-center text-2xl font-bold text-[#FF3811]">+2546 251 2658</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-center">Need a repair? our address</div>
                    <div className="stat text-center text-2xl font-bold text-[#FF3811]">Liza Street, New York</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;