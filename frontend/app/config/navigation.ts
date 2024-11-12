import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  AddContact: undefined;
  Contacts: undefined;
  Settings: undefined;
  TermsOfUse: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
