import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "",
    databaseURL: "https://fifadb.firebaseio.com",
    projectId: "fifadb-818a5",
    messagingSenderId: "715283929582"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const teamCollection = db.collection('equipe')
const playerCollection = db.collection('joueur')
const leagueCollection = db.collection('ligue')
const matchCollection = db.collection('match')
const posteCollection = db.collection('poste')

export {
    db,
    teamCollection,
    playerCollection,
    leagueCollection,
    matchCollection,
    posteCollection
}