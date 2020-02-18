<template>
  <div id="app">
    <signout></signout>
    <settings></settings>
  </div>
</template>

<script>
import Settings from './components/Settings'
import Signout from './components/Signout'

export default {
  name: 'App',
  components: {
    'settings' : Settings,
    'signout' : Signout
  }
}
</script>
