import { defineStore } from 'pinia'
interface car{
    id: number,
    name: string
}
export const useCarsStore = defineStore('cars', {
    state: () =>  ({cars: [] as car[]}),
    getters: {
        getCars: (state) => state.cars
    },
    actions: {
        addCar(car: car){
            const newCar = {
                id: car.id,
                name: car.name
            }
            this.cars.push(newCar)
        }
    }

});