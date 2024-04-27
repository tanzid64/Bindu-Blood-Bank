import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function ServiceItem({ service }) {
  const sliceDescription = (description) => {
    const words = description.split(" ");
    return words.slice(0, 10).join(" ");
  };
  return (
    <Card className="">
      <Image
        alt="Card background"
        className="object-cover rounded-t-lg "
        src={service.image ? service.image : ""}
      />
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large">{service.title}</h4>
        <small className="text-default-500">
          {sliceDescription(service.description)}
        </small>
        <div className="inline-block mt-3">
          <Button as={Link} to={`/services/${service.slug}`}>
            Read More
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
