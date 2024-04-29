import { Table } from "flowbite-react";
import { useGetDonationRequestQuery } from "../../redux/apiSlices/donationApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/authSlice";

const DonationRequest = () => {
  const { data, error, isLoading } = useGetDonationRequestQuery();
  const user = useSelector(selectCurrentUser);

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Blood Group</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Donaor</Table.HeadCell>
          <Table.HeadCell>Donation Date</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data?.map(
            (item, index) =>
              item.created_by.username == user.username && (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.created_at}
                  </Table.Cell>
                  <Table.Cell>{item.blood_group} </Table.Cell>
                  <Table.Cell>
                    {item.is_accepted ? "Accepted" : "Not Accepted"}
                  </Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                </Table.Row>
              )
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default DonationRequest;
