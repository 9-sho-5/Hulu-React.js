const API_KEY = process.env.REACT_APP_API_KEY

export default {
    fetchTop50: {
        title: 'Top50',
        url: '/playlist/37i9dQZEVXbKXQ4mDTEBXq'
    },
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrirMovies: {
        title: 'Horror',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: {
        title: 'Western',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=16`
    },
    fetchTrending: {
        title: 'TV Movie',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: {
        title: 'Trending',
        url: `/discover/moview?api_key=${API_KEY}&with_genres=10770`
    },
}