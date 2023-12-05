import { Statistics } from "./Statistics";

export default function Default() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Resumen</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <Statistics />
      </div>
    </div>
  );
}
