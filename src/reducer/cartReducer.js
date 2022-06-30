import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "./constants/cartConstants"

const initialData = {
    cart_items: [],
    shipping_info: {}
}

const cartReducer = (state=initialData, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            let item = action.payload
            let itemExists = state.cart_items.find(i=>i.product==item.product)
            if(itemExists){
                return {
                    ...state, 
                    cart_items: state.cart_items.map(i=>i.product===item.product? item: i)
                }


            }
            else{
                return {
                    ...state,
                    cart_items: [...state.cart_items, item]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart_items: state.cart_items.filter(item => item.product != action.payload.product)
            }

        case CLEAR_CART:

        case SAVE_SHIPPING_INFO:
            return {
                ...state, 
                shipping_info: action.payload.shipping_info
            }

        default: 
        return state
    }
}

export default cartReducer