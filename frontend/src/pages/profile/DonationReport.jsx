import { Table } from "flowbite-react";
import { useGetDonationReportQuery } from "../../redux/apiSlices/donationApi";
import { Spinner } from "@nextui-org/spinner";

const DonationReport = () => {
  const { data, isLoading, errors } = useGetDonationReportQuery();
  console.log(data);
  return (
    <div className="overflow-x-auto mt-5">
      <Table>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Requested By</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
        </Table.Head>
        {isLoading && <Spinner />}
        {data?.map((report, index) => (
          <Table.Body className="divide-y" key={index}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {report.created_at}
              </Table.Cell>
              <Table.Cell>{report.event.created_by.username}</Table.Cell>
              <Table.Cell>{report.event.location}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default DonationReport;
