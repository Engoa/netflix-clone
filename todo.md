1 - Create a componenet called NetflixRow -->
2 - Call the api from this component, and then instead of setting to store, save it in a variable in the component!
3 - data: () => ({
apiData: [],
currentPage: 1,
}) -->
 4 - props: {
queryString: String (example: query parameters >>>> &genre=28)
title: String
}

5 - API fetch
const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API}`
let axiosUrl = BASEURL + '&' + this.API

6 - After I get a response from Axios call
this.apiData = result

7 - In NetflixRow the template will be as follows:

<div class="sliders-wrapper">
<span class="slider__header">{{ title }}</span>
<Slides :text="item.text" :data="apiData" />
</div>

<!-- 8 - In home page in the app, i will do a v-for on the component itself in the parent component, example:
<NetflixRow :v-for=item in apiRows :title="text that fits the genre" :genreAPI="&genre...." /> -->
