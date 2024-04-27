import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/spinner";
import { Image } from "@nextui-org/image";
import { useGetServiceDetailQuery } from "../../../redux/apiSlices/servicesApi";
const ServiceDetails = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGetServiceDetailQuery(slug);
  return (
    <div>
      {isLoading ? (
        <div className={isLoading && `flex items-center justify-center min-h-96`}>
          <Spinner />
        </div>
      ) : (
        <>
          <SectionTitle title={data.title} />
          <Image
            alt="NextUI hero Image with delay"
            src={data.image && data.image}
          />
          <p className="text-justify mt-5">{data.description}</p>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
