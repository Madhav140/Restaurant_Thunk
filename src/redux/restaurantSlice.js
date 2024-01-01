import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchrestaurant = createAsyncThunk('RestaurantList/fetchrestaurant',()=>{
   const result =  axios.get('/restaurant.json').then(response=>response.data.restaurants)
   console.log(result);
   return result
})


const restaurantSlice = createSlice({
    name:'RestaurantList',
    initialState:{           //this is based on promise class
        loading:false,  //pending state
        allrestaurant:[], 
        searchrestaurant:[], //resolve
        error:""           //reject
    },
    extraReducers:(builder)=>{
         //builder holds the value/response from thunk
         builder.addCase(fetchrestaurant.pending,(state)=>{
            state.loading=true
         })
         builder.addCase(fetchrestaurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allrestaurant = action.payload
            state.searchrestaurant =action.payload
            state.error = ""
         })
         builder.addCase(fetchrestaurant.rejected,(state,action)=>{
            state.loading = false
            state.allrestaurant = ""
            state.error = action.error.message
         })
    },
    reducers:{
      search:(state,action)=>{
         state.allrestaurant = state.searchrestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
      }
      
    }

})

export const {search} = restaurantSlice.actions

export default restaurantSlice.reducer