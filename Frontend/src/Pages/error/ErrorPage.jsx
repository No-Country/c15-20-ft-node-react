export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-200 to-yellow-400 text-red-700">
      <h1 className="text-6xl font-bold mb-3">Error</h1>
      <h1 className="text-9xl font-bold mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
          404
        </span>
      </h1>
      <p className="text-lg mb-2">Lo sentimos, la página que buscas no existe.</p>
      <div className="bg-red-400 rounded-md p-3 m-2">
        <p className="text-sm m-1 text-yellow-300">
          Es peligroso ir solo, toma una <span role="img" aria-label="banana">🍌</span>
        </p>
      </div>
      <a
        href="/"
        className="mt-8 text-xl font-semibold text-red-500 relative focus:outline-none overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-4 shadow-sm hover:shadow-md hover:bg-yellow-400 flex justify-center align-center"
      >
        <span className="ml-1" role="img" aria-label="monkey">🦍</span> 
        <span className="relative z-10 bold">
          Volver a Inicio
        </span>
      </a>
    </div>
  );
}
