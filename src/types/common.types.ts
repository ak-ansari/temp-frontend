export interface ICustomColors {
  BLACK_25: string;
  BLACK_50: string;
  BLACK_100: string;
  BLACK_300: string;
  BLACK_500: string;
  BLACK_900: string;
  PRIMARY_25: string;
  PRIMARY_50: string;
  PRIMARY_200: string;
  PRIMARY_400: string;
  TEXT_PRIMARY: string;
  BRAND_BLUE_400: string;
  ALERT_25: string;
  ALERT_100: string;
  SUCCESS_600: string;
  SUCCESS_50: string;
  ALERT_600: string;
  LIGHT_BLUE_100: string;
  LIGHT_BLUE_800: string;
  WARNING_50: string;
  WARNING_300: string;
  WARNING_500: string;
  TERTIARY_50: string;
}

export interface IApiParams {
  page?: number;
  size?: number;
  search?: string;
  filters?: Record<string, any>;
  customFilters?: Record<string, any>;
}
export interface IPaginatedRes<T> {
  data: T;
  count: number;
  totalCount?: number;
}
export type IShowFilterConfig<T extends string | number | symbol = string> =
  Record<
    T,
    {
      label: string;
      renderer?: (...args: any[]) => any;
    }
  >;
