export const Api = {
    movie: {
        omdb: {
            link: 'http://www.omdbapi.com/',
            api: 'a31f2ca0',
            account: 'dev.tanveer.me@gmail.com'
        },
        themoviedb: {
            url: {
                link: 'https://api.themoviedb.org/3/',
                discover: 'https://api.themoviedb.org/3/discover/movie/',
                genre: {
                    movie: 'https://api.themoviedb.org/3/genre/movie/list',
                    tv: 'https://api.themoviedb.org/3/genre/tv/list',
                },
                movie: 'https://api.themoviedb.org/3/movie/',
                search: {
                    movie: 'https://api.themoviedb.org/3/search/movie/',
                }
            },
            api: '0a24bf0c31d1939fd890aa77270f6ea1'
        }
    },
    book: {
        google_book: {
            link: '',
            api: 'AIzaSyCXiJW9GrGD9Bm9c5paHPge85YXUHTO6es',
        }
    }
}