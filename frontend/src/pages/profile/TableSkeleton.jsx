import { Skeleton } from "@nextui-org/react";
import { Table } from "flowbite-react";

const TableSkeleton = () => {
  return (
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <Skeleton className="rounded-lg">
            <div className="h-4 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
        </Table.Cell>
        <Table.Cell>
          <Skeleton className="rounded-lg">
            <div className="h-4 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
        </Table.Cell>
        <Table.Cell>
          <Skeleton className="rounded-lg">
            <div className="h-4 w-full rounded-lg bg-secondary"></div>
          </Skeleton>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default TableSkeleton;
