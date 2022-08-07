export type AppRootParamList = {
  Home: any;
  Details: any;
  SignIn: any;
  SignUp: any;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}