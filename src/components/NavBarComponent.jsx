import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import logo from '../assets/logo-1.svg';

function NavBarComponent({ onSelectChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [liveSearchResults, setLiveSearchResults] = useState([]);
    const { setSearchResults } = useContext(SearchContext);
    const navigate = useNavigate();

    const fetchLiveSearchResults = async (query) => {
        if (!query.trim()) {
            setLiveSearchResults([]);
            return;
        }

        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=es-MX`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setLiveSearchResults(data.results || []);
        } catch (error) {
            console.error('Error fetching live search results:', error);
        }
    };

    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        fetchLiveSearchResults(query);
    };

    const handleResultClick = (movie) => {
        setSearchTerm('');
        setLiveSearchResults([]);
        navigate(`/movie/${movie.id}`);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3">
                    <img src={logo} className="h-10" alt="Logo" />
                    <span className="self-center text-3xl font-bold text-white">Pelis</span>
                </a>
                <div className="relative hidden md:block w-1/3">
                    <input
                        type="text"
                        className="block w-full p-3 text-sm text-gray-900 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-500"
                        placeholder="Buscar películas..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    {liveSearchResults.length > 0 && (
                        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {liveSearchResults.map((movie) => (
                                <li
                                    key={movie.id}
                                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleResultClick(movie)}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-10 h-16 object-cover rounded-md mr-3"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">{movie.title}</p>
                                        <p className="text-xs text-gray-500">{movie.release_date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <select
                    onChange={(e) => onSelectChange(e.target.value)}
                    className="hidden md:block p-2 rounded-md bg-white border-2 border-purple-500 text-gray-900 focus:ring-2 focus:ring-purple-500"
                >
                    <option value="es-MX">Español</option>
                    <option value="en-US">English</option>
                </select>
            </div>
        </nav>
    );
}

export default NavBarComponent;
