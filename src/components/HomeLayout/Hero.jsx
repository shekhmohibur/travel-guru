import SliderCard from '../SliderCard';
import coxsBazar from "../../assets/Rectangle 1.png";
import sajek from "../../assets/Sajek.png";
import sreemongol from "../../assets/Sreemongol.png";
import sundorbon from "../../assets/sundorbon.png";
import SlideHeadline from '../SlideHeadline';
import { useLoaderData } from 'react-router';
const Hero = () => {
    const places = useLoaderData();
    return (
        <div>
            <div>
            </div>
            <div className='w-[500px]'>
                <SlideHeadline title={places.coxsBazar.title} description={places.coxsBazar.description} navigate={places.coxsBazar.id}/>
                <SlideHeadline title={places.sreemongol.title} description={places.sreemongol.description} navigate={places.sreemongol.id}/>
                <SlideHeadline title={places.sundarban.title} description={places.sundarban.description} navigate={places.sundarban.id}/>
                <SlideHeadline title={places.sajek.title} description={places.sajek.description} navigate={places.sajek.id}/>
            </div>
            <div className="flex gap-8">
                <SliderCard locationImage={coxsBazar} title={"cox's bazar"}/>
                <SliderCard locationImage={sreemongol} title={"sreemongol"}/>
                <SliderCard locationImage={sundorbon} title={"sundorbon"}/>
                <SliderCard locationImage={sajek} title={"sajek"}/>
            </div>
        </div>
    );
};

export default Hero;