import { useState, useEffect } from "react";

export function Statistics() {
    const [statisticsDb, setStatisticsDb] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/service-orders/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStatisticsDb(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    const completedRequests = statisticsDb.filter(request => request.finished).length;
    const pendingRequests = statisticsDb.filter(request => !request.finished).length;
    const totalRequests = statisticsDb.length;
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Estadísticas</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Completadas</h3>
            <p className="text-3xl font-bold">{completedRequests}</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pendientes</h3>
            <p className="text-3xl font-bold">{pendingRequests}</p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total</h3>
            <p className="text-3xl font-bold">{totalRequests}</p>
          </div>
        </div>
      </div>
    );
};
