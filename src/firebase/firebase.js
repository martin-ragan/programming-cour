import firebase from 'firebase';
import {ref, onUnmounted} from 'vue'

var firebaseConfig = {
    apiKey: "AIzaSyBFkSjaMlVYSwi-SoWzmOYwgs9myhPzSng",
    authDomain: "programmingcourse-2cc02.firebaseapp.com",
    projectId: "programmingcourse-2cc02",
    storageBucket: "programmingcourse-2cc02.appspot.com",
    messagingSenderId: "799503390892",
    appId: "1:799503390892:web:1df12bd01f590cde2aa709",
    measurementId: "G-27ZKXB8SFF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebaseApp.firestore();


  // export const loadTasks = (colName) => {
  //   const tasks = ref([])
  //   const close = db.collection(colName).onSnapshot(snapshot => {
  //     tasks.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  //   })
  //   onUnmounted(close)
  //   return tasks
  // }

  export const loadTasks = (docName) => {
    const docRef = db.collection("materials").doc(docName);
    const tasks = ref([])

    const close = docRef.onSnapshot(doc => {
        tasks.value = doc.data()
    })

    onUnmounted(close)
    return tasks
  }

  export const loadUsers = () => {
    const users = ref([])
    const close = db.collection('users').onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
  }

  export const addUser = (user) => {
    return db.collection('users').add(user)
  }
  export const getUser = async id  => {
      const user = await db.collection('admins').doc(id).get()
      return user.exists ? user.data() : null
  }

  export const createTask = (docName, task) => {
    const taskName = task.name
        return db.collection('materials').doc(docName).set({
          [taskName]: task
          }, { merge: true });
  }
  
  // export const delTask = id => {
  //   return db.collection
  // }