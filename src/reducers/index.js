import { ADD_ITEM } from '../actions';
import { REMOVE_ITEM } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log('made it here!')
            let features = state.car.features;
            features.push(action.payload);
            return {
                ...state,
                additionalPrice: (state.additionalPrice += action.payload.price),
                car: { ...state.car, features },
                additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload.id)
            }
        case REMOVE_ITEM:
            // let removedFeatures = state.car.store;
            // removedFeatures.splice(
            //     removedFeatures.findIndex(item => item.id === action.payload.id),
            //     1
            // );
            return {
                ...state,
                additionalPrice: (state.additionalPrice -= action.payload.price),
                car: { ...state.car, features: state.car.features.filter(feature => feature.id !== action.payload.id) },
                additionalFeatures: state.additionalFeatures.concat(action.payload)
            }
        default:
            return state;
    }
};