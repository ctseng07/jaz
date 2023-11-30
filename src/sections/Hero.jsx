import Button from "../components/Button";
import { rightArrow, instagram } from '../assets/icons';
import { heropic } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative padding-x flex justify-start items-center xl:min-h-screen max-xl:py-40 max-container">
      {/* <div className="relative xl:w-2/5 flex 
            flex-col w-full max-xl:padding-x">
        <h1 className="font-merriweather max-sm:text-[5px] max-sm:leading-[75px] font-semibold  flex flex-col">
          <span className="text-transform: uppercase text-black text-8xl relative z-10 pr-10">Ntral</span>
          <span className="text-4xl text-transform: uppercase text-black relative z-10 pr-10 tracking-widest">Esthetics</span>
        </h1>
        <p className="font-merriweather text-black text-lg leading-8 mt-6 mb-14 text-transform: uppercase flex gap-2">
        <img src={instagram} alt="instagram"
          width={30}
          height={30} />
          by ntral.jazz</p>
        <Button label='Explore our services' iconURL={rightArrow} 
        id="services" />
      </div> */}
    </section>
  )
}

export default Hero
