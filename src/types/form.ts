/* eslint-disable @typescript-eslint/no-explicit-any */
export enum FieldType {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MULTISELECT = 'multiselect',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  DATE = 'date',
  TIME = 'time',
  FILE = 'file',
  PHONE = 'phone',
}

export type Option = {
  label: string;
  value: string;
};

export type Validation = {
  type: string;  //required, min ,max
  value: any; // true ....
  message?: string; // custom validation error
};

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  options?: Option[];
  validations?: Validation[];
  placeholder?: string;
  defaultValue?: any;
  description?: string;
  attributes?: Record<string, any>;
};

export type CreateFormRequest = {
  title: string;
  description?: string;
  fields: Field[];
};

export type UpdateFormRequest = Partial<CreateFormRequest>;