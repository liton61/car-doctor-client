/* eslint-disable react/prop-types */


const TeamCard = ({ member }) => {
    const { img, name, skills } = member;
    return (
        <div>
            <div className="card card-compact border border-[#FF3811] rounded-none">
                <figure><img className="h-48 w-full" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-lg font-bold text-center">{name}</h2>
                    <p className="font-medium text-[#FF3811] text-center">{skills}</p>
                    <div className="text-center">
                        <i className="text-2xl px-2 cursor-pointer text-blue-600 fab fa-facebook"></i>
                        <i className="text-2xl px-2 cursor-pointer text-blue-600 fab fa-twitter"></i>
                        <i className="text-2xl px-2 cursor-pointer text-red-500 fab fa-instagram"></i>
                        <i className="text-2xl px-2 cursor-pointer text-blue-600 fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;