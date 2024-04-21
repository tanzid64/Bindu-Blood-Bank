import { List, Blockquote } from "flowbite-react";

const About = () => {
  return (
    <>
      <Blockquote className="">
        "The blood you donate gives someone another chance at life. One day that
        someone may be a close relative, a friend, a loved one—or even you."
      </Blockquote>
      <Blockquote className="">
        "To give blood, you need neither extra strength nor extra food, and you
        will save a life." - Dr. Charles Drew"
      </Blockquote>
      <Blockquote className="">
        "The blood you donate gives someone another chance at life. One day that
        someone may be a close relative, a friend, a loved one—or even you."
      </Blockquote>
      <br />
      <br />
      <p class="mb-3 text-gray-900 dark:text-white">
        Across Bangladesh, every day there remains an urgent need for all types
        of blood groups. Especially donors with rare blood groups such as O
        Negative, B Negative and A Negative are in high demand. Your timely
        response is essential to the supply of healthy blood for the massive
        daily demand we face.
      </p>

      <p class="mb-3 text-gray-900 dark:text-white">
        Your donation can save the lives of many, make a difference or simply
        make you feel great about your contribution to humanity. Whatever your
        reason, whatever your motivation we welcome you to learn more about
        eligibility and benefits of donating blood with a trusted organization
        like us.
      </p>
      <List class="max-w-md divide-y  text-gray-900 dark:text-white">
        <div class="flex flex-col pb-3">
          <List.Item class="">
            Email address
          </List.Item>
          <dd class="text-lg font-semibold">info@bindu.com</dd>
        </div>
        <div class="flex flex-col py-3">
          <List.Item >
            Office address
          </List.Item>
          <dd class="text-lg font-semibold">
            92 Miles Drive, Newark, NJ 07103, California, USA
          </dd>
        </div>
        <div class="flex flex-col pt-3">
          <List.Item >
            Phone number
          </List.Item>
          <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
        </div>
      </List>
    </>
  );
};

export default About;
