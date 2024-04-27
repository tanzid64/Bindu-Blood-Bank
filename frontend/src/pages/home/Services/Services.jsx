import SectionTitle from "../../../components/SectionTitle";
import ServiceItem from "./ServiceItem";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Spinner } from "@nextui-org/spinner";
import axios from "axios";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "https://sour-libby-thzone.koyeb.app/api/v1/core/services/"
      );
      setServices(res.data);
      console.log(res.data)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div>
      <SectionTitle title="Our Services" />
      {loading ? (
        <div className={loading && `flex items-center justify-center min-h-96`}>
          <Spinner />
        </div>
      ) : (
        <div className="container">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="">
                    <ServiceItem key={index} service={service} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Services;

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
