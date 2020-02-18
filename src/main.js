import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

var firebaseConfig = {
  projectId: 'fifadb-818a5', 
  databaseURL: 'https://fifadb-818a5.firebaseio.com/' ,
  apiKey: '',
  authDomain: "fifadb-818a5.firebaseapp.com",
 }

 export const db = firebase.initializeApp(firebaseConfig).firestore()

 var provider = new firebase.auth.GoogleAuthProvider()
 firebase.auth().signInWithPopup(provider).then(function(result) {
   if(result.operationType == 'signIn'){
     new Vue({
       render: h => h(App),
     }).$mount('#app')
   
   }
 }).catch(function(error) {
   console.log(error)
 }); 

 export const firebaseAuth = firebase.auth()
 


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


