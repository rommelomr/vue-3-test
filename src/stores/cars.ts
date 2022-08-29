import { defineStore } from 'pinia'

export const useCarsStore = defineStore('cars', {
    state: () =>  ({cars: []}),
    getters: {
        getCars: (state) => state
    },
    actions: {
        addCar(car){
            let newCar = {
                id: car.id,
                name: car.name
            }
            this.cars.push(newCar)
        }
    }

});