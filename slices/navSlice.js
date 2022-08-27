import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentPosition: null,
  origin: null,
  destination: null,
  travelTimeInformation: null,
  userPhoneNumber: null,
  listVehiclesToRentSize: 0,
  listVehiclesToSellSize: 0,
  userName: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setUserPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },

    setListVehiclesToRentSize: (state, action) => {
      state.listVehiclesToRentSize = action.payload;
    },
    setListVehiclesToSellSize: (state, action) => {
      state.listVehiclesToSellSize = action.payload;
    },
  },
});

export const {
  setCurrentPosition,
  setOrigin,
  setDestination,
  setTravelTimeInformation,
  setUserPhoneNumber,
  setListVehiclesToRentSize,
  setListVehiclesToSellSize,
} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectCurrentPosition = (state) => state.nav.currentPosition;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectUserPhoneNumber = (state) => state.nav.userPhoneNumber;

export const selectListVehiclesToRentSize = (state) => state.nav.listVehiclesToRentSize;
export const selectListVehiclesToSellSize = (state) => state.nav.listVehiclesToSellSize;

export default navSlice.reducer;
