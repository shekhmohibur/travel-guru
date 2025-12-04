import { FaArrowRight } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router';

const SlideHeadline = ({title, description, navigate}) => {
    const location = useLocation();
    const {id:placeId} = useParams();
    return (
        <div className="flex gap-5 flex-col">
            <h2 className="font-bebas text-white md:text-5xl lg:text-7xl">{title}</h2>
            <p className={`text-base-300 font-montserrat ${location.pathname === `/place/${placeId}` ? "" :"line-clamp-3"} md:text-xl text-start`}>{description}</p>
            {
                location.pathname === `/place/${placeId}` ? "" : <Link to={`/place/${navigate}`} className={`bg-primary px-4 py-2 font-montserrat capitalize flex w-fit font-semibold items-center gap-3 cursor-pointer rounded-sm`}>booking <FaArrowRight /></Link>
            }
        </div>
    );
};

export default SlideHeadline;