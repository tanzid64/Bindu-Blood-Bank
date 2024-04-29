import { Button, Modal, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import BloodGroup from "../../components/Form/BloodGroup";
import Name from "../../components/Form/Name";
import { usePostDonationRequestMutation } from "../../redux/apiSlices/donationApi";
import { Spinner } from "@nextui-org/spinner";

const AddRequest = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addRequest, { isLoading }] = usePostDonationRequestMutation();
  const [formData, setFormData] = useState({
    blood_group: "A+",
    location: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenModal(false);
    const res = await addRequest(formData);
    if (res.data) {
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="mb-10 border border-indigo-300 p-5 rounded-lg">
      <Button onClick={() => setOpenModal(true)}>
        {isLoading ? <Spinner /> : "Add New Request"}
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add a new blood request</Modal.Header>
        <Modal.Body className="">
          <form
            className="flex max-w-full flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <BloodGroup
              name="blood_group"
              onChange={handleChange}
              value={formData.blood_group}
            />
            <Name
              name="location"
              label="Location"
              placeholder="Enter Location"
              onChange={handleChange}
              value={formData.location}
            />
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Details" />
              </div>
              <Textarea
                id="description"
                type="text"
                rows={4}
                name="description"
                onChange={handleChange}
                value={formData.description}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddRequest;
