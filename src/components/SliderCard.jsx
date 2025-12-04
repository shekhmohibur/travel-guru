const SliderCard = ({locationImage, title}) => {
    return (
        <div className='relative w-80 h-[500px] overflow-hidden rounded-2xl'>
            <div className='bg-black w-full h-full absolute rounded-2xl mask-t-from-10 top-10'></div>
            <img src={locationImage} alt="Destination Image" className='w-full h-full object-cover rounded-2xl'/>
            <h2 className='absolute bottom-15 left-8 font-bebas text-white text-3xl'>{title}</h2>
        </div>
    );
};

export default SliderCard;