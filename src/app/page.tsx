import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div  className="flex min-h-screen flex-col items-center
     justify-center w-10/12 mx-auto p-10  text-gray-700">
      <h1 className="text-6xl font-extrabold text-center drop-shadow-lg">🎬 Movie App</h1>
      <p  className="mt-4 text-lg text-gray-300">Add and manage your favourite Movies</p>

      <div  className="mt-8 flex space-x-4">
        <Link href="/add-movies">
          <button 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700
           transition duration-300 ease-in-out text-white rounded-lg
            shadow-md transform hover:scale-105"
            >Add Movie</button>
        </Link>
        <Link href="/all-movies">
          <button
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 
          transition duration-300 ease-in-out text-white rounded-lg
           shadow-md transform hover:scale-105"
           >View Movies</button>
        </Link>
      </div>
    </div>
  );
}
