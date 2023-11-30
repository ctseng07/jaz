import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
<section 
id="services"
className="">
  <div className="flex justify-around flex-wrap max-container gap-6">
{services.map((service) => (
  <ServiceCard key={service.label} {...service} />
))}
</div>
</section >
  )
}

export default Services
