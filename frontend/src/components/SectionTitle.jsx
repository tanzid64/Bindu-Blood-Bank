

const SectionTitle = ({title}) => {
  return (
    <div className="my-6 lg:my-12 text-center md:text-left pb-4 border-b border-gray-300">
      <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
