export type params = {
  routes: string;
  menuOptions: string;
};

export type menuOptions = Array<{
  key: string;
  label: string;
  disabled?: boolean;
  children?: Array<menuOptions>;
}>;

export type routerOptions = Array<{
  path: string;
  component: Function;
  redirect?: string;
  children?: routerOptions;
}>;
