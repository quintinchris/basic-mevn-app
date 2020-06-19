<template>
  <div class="hello">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    // getModels() calls Axios to GET the /models endpoint and store data of it's response to 'models' variable
    getModels() {
      axios
        .get('http://localhost:3000/models')
        .then(response => (this.models = response.data));
    },
  },
  mounted() {
    this.getModels();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
