export type CategoryType = {
  id?: string;
  title: string;
  subTitle: string;
  parent: string;
  permalink: string;
  metaTitle: string;
  metaDescription: string;
  metaKeyWord: string;
  schemaMarkup: string;
  sortOrder: string;
  isFeature: boolean;
  image1: any;
  image2: any;
  icon: any;
  icon2: any;
  status?: boolean;
};

export type CountryType = {
  id?: string;
  name: string;
  status?: boolean;
};

export type StateType = {
  id?: string;
  name: string;
  countryID: string;
  status?: boolean;
};

export type CityType = {
  id?: string;
  name: string;
  stateID: string;
  status?: boolean;
};

export type AuthType = {
  email: string;
  password: string;
};



