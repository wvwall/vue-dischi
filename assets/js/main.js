Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
      albums : [],
      albumsGenre : [],
      select : "All"
    },
    methods: {
        selectGenre: function () {
          /* scorro albums e pusho generi in array generi */
            for (let i = 0; i < this.albums.length; i++) {
              if (!this.albumsGenre.includes(this.albums[i].genre)) {
                this.albumsGenre.push(this.albums[i].genre)
              } else {
                /* console.log("E' gia incluso"); */
              }
            }
          }
    },
    mounted() {
      /* chiamata api con tutti i dati degli album */
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((response) => {
            this.albums = response.data.response;
            this.albums.sort((a,b) =>{
                return a.year - b.year
              } )
        });
    }
  });