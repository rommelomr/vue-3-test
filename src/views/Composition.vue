<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3> There are {{carsCount}} cars stored</h3>
    <div>
      <input
        placeholder="Add a car"
        v-model="data.newCarName"
        @keyup.enter="addCar"
        type="text"
      >
    </div>
    <div>
      <ul>
        <li v-for="(car,i) in cars" :key="'car' + i">
          <span>{{car.name}}</span>
          <button @click="deleteCar(i)">Delete</button>
          <button @click="storeCar(i)">Store</button>
        </li>
      </ul>
    </div>
    <div>
      <button @click="seeStoredCars()">See stored cars</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, reactive, computed, watch} from 'vue';
  import { useCarsStore } from '@/stores/cars'
  
  let newCarName = ref('');


  //also can be used rective() function to set the same variables inside data (vue 2)

  let data = reactive({
    newCarName: ''
  });

  let cars = ref(
    [
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
    ]
  );

  const swearWords = ['penis', 'ass'];

  const addCar = () => {
    let car = {
      id:Date.now(),
      name: newCarName.value
    }
    cars.value.push(car)
    newCarName.value = '';
  }
  
  const deleteCar = (i: number) => {
    cars.value.splice(i,1);
  }

  const carsCount = computed(() => {
    return cars.value.length;
  });

  const seeStoredCars = () => {

    const carsStore = useCarsStore();
    console.log(carsStore.getCars);
  };
  const storeCar = (i: number) => {

    const carsStore = useCarsStore();
    carsStore.addCar({
      id: Date.now(),
      name: cars.value[i].name
    });
  };

  watch(data,(d)=>{
    console.log(d);
    if(swearWords.includes(d.newCarName.toLowerCase())){
      alert('AQUI NO SE DICE ESO!');
      data.newCarName = '';
    }
  });
  

</script>
