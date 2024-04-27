import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/spinner";
import { Image } from "@nextui-org/image";
const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchServices = async () => {
    try {
      const res = await axios.get(
        `https://sour-libby-thzone.koyeb.app/api/v1/core/services/${slug}/`
      );
      setService(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
  }, [slug]);
  return (
    <div>
      {loading ? (
        <div className={loading && `flex items-center justify-center min-h-96`}>
          <Spinner />
        </div>
      ) : (
        <>
          <SectionTitle title={service.title} />
          <Image
            alt="NextUI hero Image with delay"
            src={service.image && service.image}
          />
          <p className="text-justify mt-5">{service.description}</p>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
