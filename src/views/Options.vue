<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{carsCount}} cars</h3>
    <div>
      <input
        placeholder="Add a car"
        v-model="newCarName"
        @keyup.enter="addCar"
        type="text"
      >
    </div>
    <div>
      <ul>
        <li v-for="(car,i) in cars" :key="'car' + i">
          <span>{{car.name}}</span>
          <button @click="deleteCar(i)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  
  export default {
    name: 'options',
    data: () => ({
      newCarName: '',
      cars:[
        {
          id: 1,
          name: 'car one'
        },
        {
          id: 2,
          name: 'car two'
        },
        {
          id: 3,
          name: 'car three'
        }
      ],
      swearWords:['penis', 'ass']
    }),
    watch:{
      newCarName(value){
        if(this.swearWords.includes(value.toLowerCase())){
          this.newCarName = '';
          alert('The ' + value + ' word can\'t be used');
        }
      }
    },
    computed:{
      carsCount(){
        return this.cars.length;
      }
    },
    methods:{
      addCar(){
        let newCar = {
          id: Date.now(),
          name:this.newCarName
        }
        this.cars.push(newCar);
        this.newCarName = "";
      },
      deleteCar(i: number){
        this.cars.splice(i,1);
      }
    }
  }
</script>
