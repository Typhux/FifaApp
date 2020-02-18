<template>
  <div class="signout">
    <b-button size="sm" class="mb-2" @click="signout">
      <b-icon icon="x-square-fill"></b-icon>
    </b-button>
  </div>
</template>

<script>
import {firebaseAuth} from '../main'

export default {
  data : function(){
    return {
    }
  },
  methods: {
    signout : function(){
      firebaseAuth.signOut().then(function(){
        console.log("Well Signout")
        location.reload()
      }).error(function(error){
        console.log(error)
      })
    }
  }
}
</script>