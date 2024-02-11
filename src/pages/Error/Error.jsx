import notFound from '../../assets/images/4O4/404.jpg';

const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={notFound} alt="" />
        </div>
    );
};

export default Error;