import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  hotel: {
    title: null,
    address: null,
    country: null,
    category:null,
    price: null,
    availability: {
      availableRooms: null,
      checkInTime: null,
      checkOutTime: null
    },
    contact: null,
    images: [],
    description: [
     
    ],
    reviews: [],
    roomFacilities: [
     
    ],
    hotelsFacilities: [
      
    ],
    ratings: {
      averageRating: null,
      totalReviews: null
    }
  }
}

const selectedHotelSlice = createSlice({
  name: 'selectedHotel',
  initialState,
  reducers: {
    setSelectedHotel: (state, action) => {
      state.hotel[action.payload.key] = action.payload.data;
      // Store the selected hotel data in Redux
      return action.payload;
    },
  },
});

export const { setSelectedHotel } = selectedHotelSlice.actions;

export default selectedHotelSlice.reducer;
