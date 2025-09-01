# BingeGPT

- Vite Scaffold
- Configured tailwind Css
- Routing of App
- Header
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploy our app to production
- Create sign up user Account
- Implement Sign in user API
- Created Redux store with userSlice
- Implemented sign out
- Updated profile
- BugFix: Sign up user display name update(fixed in previous commit)
- BugFix: if the user is not logged in redirect it from "/browser" to login page("/") and vice-versa;
- Unsubscribe to the onAuthStateChange callback
- Added hardcoded values to constants file
- Regiter trakt API & create an app & get api key
- Get Data from trakt trending movies list API
- Custom Hook for Trending Movies
- Create movieSlice
- Update Store with movies Data
- Created Hooks to call trakt movieSummary api and Fanart movieImage api and store in movieSlice
- Created Video title and Video background inside MainContainer
- Embaded youtube link to run trailer
- Created function to getTrailerKey from trailer url
- Optimise moviesSlice access in SecondaryContainer
- Added MostWatchedMovies hook in place of Anticipated Movies hook
- Enable looping in VideoBackground
- Added Search button in Header
- Added SearchGpt Component along with GptSearchBar and GptSuggestion 


# Features

- Login / SignUp page
  - SignIn / SignUp form
    - redirect to browser
- Browser (after Authentication)
  - Header
  - Main Movie - Trailer in Background - Title and discription - Movie Suggestion
  - MoviesList \* N
- Netflix-Gpt
  - Search Bar
  - Movie Suggestion
