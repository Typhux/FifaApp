<template>
  <div class="settings">
    <h1>Settings</h1>
    <div v-for="(p, idx) in poste" :key="idx">
      {{p.CodeName}} | {{p.Libelle}}
    </div>
    <b-button size="sm" class="mb-2" @click="addPoste" v-if="!formPoste">
      <b-icon icon="plus"></b-icon>
    </b-button>
    <template v-if="formPoste">
      <b-form @submit="submitPoste" @reset="cancelPoste">
        <b-form-group id="input-group-1" label="Code name:" label-for="input-1">
          <b-form-input id="input-1" v-model="codeNamePoste" type="text" required placeholder="Entrer le code name"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Libelle du poste:" label-for="input-2">
          <b-form-input id="input-2" v-model="libellePoste" required placeholder="Entrer le libellé du poste"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" class="okButton">Ok</b-button>
        <b-button type="reset" variant="danger">Annuler</b-button>
      </b-form>
    </template>
  </div>
</template>

<script>
import {db} from '../main'

export default {
  data : function(){
    return {
      poste: [],
      formPoste: false,
      codeNamePoste : "",
      libellePoste: ""
    }
  },
  methods:{
    submitPoste : function(evt){
        evt.preventDefault()
        db.collection('poste').doc('poste' + this.poste.length).set({CodeName : this.codeNamePoste, Libelle : this.libellePoste})
        this.getPoste()
    },
    addPoste : function(){
      this.formPoste = true;
    },
    cancelPoste: function(){
      this.codeNamePoste = ""
      this.libellePoste = ""
      this.formPoste = false
    },
    getPoste: function(){
      db.collection('poste').get().then(json => this.poste = json.docs.map(doc => doc.data()))
      this.libellePoste = ""
      this.codeNamePoste = ""
      this.formPoste = false
    }
  },
  mounted: function(){
    this.getPoste()
  }
}
</script>

<style scoped>
.settings{
  width:75%;
  text-align: center;
}
.okButton{
  margin-right: 20px;
}
</style>