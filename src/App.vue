<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
<!-- getters  -->
<div class="cls" style="text-align:left">
  <ul>
    <li v-for="(item, index) in get_getter" :key="index">
    <a href="#" @click.prevent="myfunc(item.id)">
      {{item.id}} -- {{item.text}} -- {{item.done ? 'Yes' : 'No'}}
      
    </a>
    </li>
  </ul>
</div>

<!-- done todos getters -->
<div class="cls" style="text-align:left">
  <h5>Done Todos {{doneTodosCount}} </h5>

  <ul>
    <li v-for="(item, index) in doneTodos" :key="index">
      {{item.id}} -- {{item.text}} -- {{item.done ? 'Yes' : 'No'}}
    </li>
  </ul>
</div>

<!-- todoes By id -->
<div class="col" style="text-align:left" v-if="getTodoById">
  <h6>get data onbase of id: {{getTodoById.id}}</h6>
  <ul>
    <li>{{getTodoById.id}}</li>
    <li>{{getTodoById.text}}</li>
    <li>{{getTodoById.done}}</li>
  </ul>
</div>

<!-- End getters -->


<!-- state buttons -->
<hr>
  <h2> {{get_state_only}} </h2>
  <button @click="myinc()">add mutation</button> <br> <br>
  <button @click="myinc2()">add By 5 mu</button> <br> <br>
  <button @click="myinc3()">Asynic By action</button> <br> <br>
  <button @click="myinc4()">Action By action</button> <br> <br>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      getter_id: null
    }
  },
  // // States of the store
  computed:{
     ...mapState({
    get_state_only: state => state.count.count
  }),
   ...mapGetters({
      get_getter : 'get_todoes_list',
      doneTodos : 'doneTodos',
      doneTodosCount:'doneTodosCount',
   }),
    getTodoById(){
      return this.$store.getters.getTodoById(this.getter_id)
    }
  },
  // Mutations of the store
  methods: {
    ...mapMutations({
      myinc:'increment',
      myinc3: 'incrementAsync',
      myinc4: 'increment',
    }),
    // Actions of the store
    ...mapActions({
      myinc3: 'incrementAsync',
      myinc4: 'increment'
    }),
    myinc2(){
      return this.$store.commit('increment_by_payload', 5)
    },
    myfunc(id){
      this.getter_id = id;
      return console.log(id);
    }
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
