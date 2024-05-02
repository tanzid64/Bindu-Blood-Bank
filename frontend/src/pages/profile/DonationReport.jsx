import { Table } from "flowbite-react";
import { useGetDonationReportQuery } from "../../redux/apiSlices/donationApi";
import { Spinner } from "@nextui-org/spinner";
import SectionTitle from "../../components/SectionTitle";
import TableSkeleton from "./TableSkeleton";

const DonationReport = () => {
  const { data, isLoading, errors } = useGetDonationReportQuery();
  return (
    <div className="overflow-x-auto mt-5">
      <SectionTitle title="My Donation" />
      <Table>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Requested By</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
        </Table.Head>
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <>
            {data === undefined ? (
              "No data available"
            ) : (
              <>
                {data?.map((report, index) => (
                  <Table.Body className="divide-y" key={index}>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {report.created_at}
                      </Table.Cell>
                      <Table.Cell>
                        {report.event.created_by.username}
                      </Table.Cell>
                      <Table.Cell>{report.event.location}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </>
            )}
          </>
        )}
      </Table>
    </div>
  );
};

export default DonationReport;
