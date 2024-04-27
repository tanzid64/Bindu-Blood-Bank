import { useEffect, useState } from "react";
import DonorCard from "./DonorCard";
import SectionTitle from "../../components/SectionTitle";
import { Spinner } from "@nextui-org/react";
import axios from "axios";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDonors = async () => {
    try {
      const res = await axios.get(
        "https://sour-libby-thzone.koyeb.app/api/v1/auth/profile/"
      );
      setDonors(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDonors();
  }, []);
  return (
    <div className="mb-5">
      <SectionTitle title="All Donors" />
      {loading ? (
        <div className={loading && `flex items-center justify-center min-h-96`}>
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
          {donors?.map((donor, index) => (
            <DonorCard user={donor} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Donors;
