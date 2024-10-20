import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Movie } from './interface/movie.interface';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [background, setBackground] = useState<string>('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
                setMovies(response.data.results.slice(0, 10));
                if (response.data.results.length > 0) {
                    setBackground(`https://image.tmdb.org/t/p/original${response.data.results[0].backdrop_path}`);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const handleSlideChange = (swiper: any) => {
        const activeIndex = swiper.activeIndex;
        const activeMovie = movies[activeIndex];
        if (activeMovie?.backdrop_path) {
            setBackground(`https://image.tmdb.org/t/p/original${activeMovie.backdrop_path}`);
        }
    };

    return (
        <div
            className="app-container"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                onSlideChange={handleSlideChange}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="movie-card">
                        <div>
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.original_title}
                                    className="poster-movie"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default App;

