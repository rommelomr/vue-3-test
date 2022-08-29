import { defineStore } from 'pinia'
interface car{
    id: number,
    name: string
}
export const useCarsStore = defineStore('cars', {
    state: () =>  ({cars: [] as car[]}),
    getters: {
        getCars: (state) => state
    },
    actions: {
        addCar(car: car){
            let newCar = {
                id: car.id,
                name: car.name
            }
            this.cars.push(newCar)
        }
    }

});