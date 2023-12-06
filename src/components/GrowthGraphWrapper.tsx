import GrowthChart from "./GrowthChart";

const GrowthGraphWrapper = () => {
  return (
    <div
      className="w-full h-full rounded-md p-4
     bg-violet-50 shadow-md flex justify-center"
    >
      <GrowthChart />
    </div>
  );
};

export default GrowthGraphWrapper;
