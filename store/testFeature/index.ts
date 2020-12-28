import { createSlice, createSelector } from "@reduxjs/toolkit";

type testFeatureState = {
  asd: number;
  dsa: string;
};

const initialState: testFeatureState = {
  asd: null,
  dsa: null,
};

const testFeature = createSlice({
  name: "testFeature",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const testFeatureSelector = <
  S extends { testFeature: testFeatureState }
>(
  state: S
) => state.testFeature;

export const asdSelector = createSelector(
  testFeatureSelector,
  (state) => state.asd
);

export default testFeature;
