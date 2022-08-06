export type AppRootParamList = {
  Home: any;
  Details: any;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}