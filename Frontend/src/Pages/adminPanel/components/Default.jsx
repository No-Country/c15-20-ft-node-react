import { ProductStatistics } from "./ProductStatistics";
import { SalesStatistics } from "./SalesStatistics";
import { ServiceStatistics } from "./ServiceStatistics";
import { UserStatistics } from "./UserStatistics";

export default function Default() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
      <ServiceStatistics />
      <ProductStatistics />
      <UserStatistics />
      <SalesStatistics />
    </div>
  );
};

