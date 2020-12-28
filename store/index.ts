import { configureStore } from "@reduxjs/toolkit";

import testFeature from "./testFeature";

export { testFeature };

export { testFeatureSelector, asdSelector } from "./testFeature";

const store = configureStore({
  reducer: {
    testFeature: testFeature.reducer,
  },
  devTools: true,
});

export default store;
