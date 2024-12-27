import React from "react";

function FooterComponent() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
            <div className="container mx-auto px-4">
                {/* Título Principal */}
                <div className="text-center relative mb-12">
                    <h2 className="text-4xl font-bold relative inline-block">
                        Contacto
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    </h2>
                </div>

                {/* Redes Sociales con Efectos Mejorados */}
                <div className="flex justify-center gap-8 mb-16">
                    <a href="#" className="group relative">
                        <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-blue-500/50 group-hover:scale-110">
                            <img src="./src/assets/facebook-1.svg" alt="logo de Facebook" className="w-8 h-8 transition-transform group-hover:rotate-12" />
                        </div>
                    </a>
                    <a href="#" className="group relative">
                        <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-pink-500/50 group-hover:scale-110">
                            <img src="./src/assets/instagram-1.svg" alt="logo de Instagram" className="w-8 h-8 transition-transform group-hover:rotate-12" />
                        </div>
                    </a>
                    <a href="#" className="group relative">
                        <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-blue-400/50 group-hover:scale-110">
                            <img src="./src/assets/twitter-1.svg" alt="logo de Twitter" className="w-8 h-8 transition-transform group-hover:rotate-12" />
                        </div>
                    </a>
                </div>

                {/* Grid de Información */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">


                    {/* Acerca de Isaac */}
                    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                            Acerca de Isaac
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-1 h-1 rounded-full mr-2"></span>
                                Estudiante de máster en coding en Devf
                            </li>
                            <li>
                                <a href="https://github.com/leoocampo" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-1 h-1 rounded-full mr-2"></span>
                                    GitHub: @leoocampo
                                </a>
                            </li>
                            <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-1 h-1 rounded-full mr-2"></span>
                                Facebook: Isaac Manriquez
                            </li>
                        </ul>
                    </div>

                    {/* Desarrolladores */}
                    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                            Acerca de Miguel
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-1 h-1 rounded-full mr-2"></span>
                                Ingeniero en Computación
                            </li>
                            <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-1 h-1 rounded-full mr-2"></span>
                                Estudiante en DevF
                            </li>
                            <li>
                                <a href="https://github.com/Miguel-oc-dev" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                                    <span className="bg-gradient-to-r from-pink-500 to-red-500 w-1 h-1 rounded-full mr-2"></span>
                                    GitHub: @miguel-oc-dev
                                </a>
                            </li>
                        </ul>
                    </div>
                    

                    {/* Acerca de Leonardo */}
                    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 mb-6">
                            Acerca de Leonardo
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <span className="bg-gradient-to-r from-pink-500 to-red-500 w-1 h-1 rounded-full mr-2"></span>
                                Estudiante de máster en coding en Devf
                            </li>
                            <li>
                                <a href="https://github.com/leoocampo" 
                                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                                    <span className="bg-gradient-to-r from-pink-500 to-red-500 w-1 h-1 rounded-full mr-2"></span>
                                    GitHub: @leoocampo
                                </a>
                            </li>
                            <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <span className="bg-gradient-to-r from-pink-500 to-red-500 w-1 h-1 rounded-full mr-2"></span>
                                Facebook: Leonardo Ocampo
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright con Línea Decorativa */}
                <div className="text-center">
                    <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6"></div>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;

