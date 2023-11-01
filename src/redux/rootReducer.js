import { baseApi } from "./api/baseApi";
import {setSelectedHotel} from './features/selectedHotelSlice'

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    setSelectedHotel
    
}