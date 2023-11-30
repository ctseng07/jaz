const ServiceCard = ({ imgURL, label, subtext, price }) => {
  return (
      <div className="flex-col justify-between sm:w-[450px] sm:min-w[450px] max-xl:w-[350px] max-2xl:w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10 bg-light-gray max-sm:gap-5 max-sm:flex-col cursor-pointer hover:bg-gray border-2 border-gray">
          <div className="flex justify-around items-stretch bg-gold">
              <img src={imgURL} alt={label}
                  className="w-full h-72 max-xl:h-60" />
          </div>

          <div className="flex justify-around flex-col max-sm:items-center">
              <h3 className="font-merriweather text-xl 
      leading-normal text-black font-bold max-sm:items-center">{label}</h3>
              <p className="mt-3 font-rubik
      text-base leading-normal text-black max-sm:items-center">{subtext}</p>
          </div>
          <p className="flex items-center text-black text-3xl leading-normal max-sm:justify-center">{price}</p>
      </div>
  )
}

export default ServiceCard
