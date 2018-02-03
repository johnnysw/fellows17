import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movies/MovieList'
import MusicList from '@/components/musics/MusicList'
import BookList from '@/components/books/BookList'
import PhotoList from '@/components/photos/PhotoList'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: MovieList
    },
    {
      path: '/musicList',
      component: MusicList
    },
    {
      path: '/bookList',
      component: BookList
    },
    {
      path: '/photoList',
      component: PhotoList
    }

  ]
})
