import { ProductStatistics } from "./ProductStatistics";
import { SalesStatistics } from "./SalesStatistics";
import { ServiceStatistics } from "./ServiceStatistics";
import { UserStatistics } from "./UserStatistics";

export default function Default() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-700 rounded-lg shadow-md p-8 m-4 flex justify-center align-center">
        <ServiceStatistics />
        <ProductStatistics />
        <UserStatistics />
        <SalesStatistics />
      </div>
    </div>
  );
};
