export type menuOptions = Array<menu>;

type menu = {
  key: string;
  label: string;
  disabled?: boolean;
  children?: Array<menu>;
};

export type routerOptions = Array<route>;

type route = {
  path: string;
  component: Function;
  redirect?: string;
  children?: Array<route>;
};
