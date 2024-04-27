import SectionTitle from "../../components/SectionTitle";
import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
const Documentation = () => {
  return (
    <>
      <SectionTitle title="Features" />
      <section className="mb-5">
        Unauthenticated User:
        <List>
          <List.Item icon={HiCheckCircle}>
            Can view all donor list, services.
          </List.Item>
          <List.Item icon={HiCheckCircle}>Can register as a new user</List.Item>
          <List.Item icon={HiCheckCircle}>Login after registration</List.Item>
        </List>
      </section>
      <section className="">
        Authenticated User:
        <List>
          <List.Item icon={HiCheckCircle}>
            View details profile, update profile, change password, reset
            password.
          </List.Item>
          <List.Item icon={HiCheckCircle}>Make a request for event.</List.Item>
          <List.Item icon={HiCheckCircle}>Make a request for blood.</List.Item>
          <List.Item icon={HiCheckCircle}>Donate blood.</List.Item>
          <List.Item icon={HiCheckCircle}>
            Vew blood donation and reques history.
          </List.Item>
        </List>
      </section>
    </>
  );
};

export default Documentation;
