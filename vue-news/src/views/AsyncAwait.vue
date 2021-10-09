<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item, idx in items" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { handleException } from '../utils/handler'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
          if(res.data.id == 1) {
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
              this.items = res.data;
            });
          }
        })
        .catch(err => {
          console.log(err);
        })
    },
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if(response.data.id == 1) {
          var list = await  axios.get('https://jsonplaceholder.typicode.com/todos')
          this.items = list.data
        }
      } catch (err){
        handleException(err)
        console.log(err);
      }
    
    }
  },
  
}
</script>