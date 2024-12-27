import { useEffect, useState } from "react";

function MovieCardComponent({ name, description, image, id }) {
    const [posterPathImageUrl, setPosterPathImageUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        setPosterPathImageUrl(`https://image.tmdb.org/t/p/w500/${image}`);
    }, [image]);

    const fetchMovieDetails = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-MX`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovieDetails(data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };

    const handleOpenModal = async () => {
        await fetchMovieDetails();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const imageCard = posterPathImageUrl ? posterPathImageUrl : "Loading...";
    const imageDefault = 'src/assets/default.png';
    const descriptionCard = description ? description.toString().slice(0, 150) + ' -leer mas...' : "Loading...";
    const nameCard = name ? name : "Loading...";

    return (
        <>
            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                style={{ width: '22rem' }}
            >
                <a href="#" onClick={handleOpenModal}>
                    <img className="p-3 rounded-2xl" src={image ? imageCard : imageDefault} alt={`foto de ${nameCard}`} />
                </a>
                <div className="p-5">
                    <a href="#" onClick={handleOpenModal}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nameCard}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descriptionCard}</p>
                    <button
                        onClick={handleOpenModal}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Ver más
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md">
                    <div className="bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-500 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative text-white">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-3 right-3 text-white hover:text-gray-200 text-2xl font-bold transition duration-300"
                        >
                            ×
                        </button>
                        <h2 className="text-3xl font-extrabold mb-4 text-center">{movieDetails.title}</h2>
                        <img
                            className="w-full h-96 rounded-lg object-cover mb-4 shadow-md border-4 border-white"
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={`Poster de ${movieDetails.title}`}
                        />
                        <p className="text-white text-base mb-4 leading-relaxed">{movieDetails.overview}</p>
                        <div className="flex justify-between text-sm">
                            <p className="font-semibold">
                                <span className="text-gray-300">Fecha:</span> {movieDetails.release_date}
                            </p>
                            <p className="font-semibold">
                                <span className="text-gray-300">Calificación:</span> {movieDetails.vote_average}
                            </p>
                            <p className="font-semibold">
                                <span className="text-gray-300">Duración:</span> {movieDetails.runtime} min
                            </p>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleCloseModal}
                                className="px-5 py-2 bg-pink-600 text-white text-sm rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MovieCardComponent;