const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIcecreams:20
}

const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:state=>{
            state.numOfIcecreams--;
        },
        restocked:(state,action)=>{
            state.numOfIcecreams+=action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase('cake/ordered', (state) => {
          state.numOfIcecreams--
        })
      }
})

module.exports=iceCreamSlice.reducer
module.exports.icecreamActions=iceCreamSlice.actions