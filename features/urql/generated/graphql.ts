import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Clinic = {
  __typename?: 'Clinic';
  id: Scalars['ID'];
  name: Scalars['ID'];
  originId: Scalars['ID'];
  patients: Array<Maybe<Patient>>;
};

export type Patient = {
  __typename?: 'Patient';
  clinic?: Maybe<Clinic>;
  clinicId: Scalars['ID'];
  dateOfBirth: Scalars['Date'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  originId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getClinic?: Maybe<Clinic>;
  getClinics: Array<Clinic>;
  getPatient?: Maybe<Patient>;
};


export type QueryGetClinicArgs = {
  id: Scalars['ID'];
};


export type QueryGetPatientArgs = {
  id: Scalars['ID'];
};

export type GetClinicQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClinicQuery = { __typename?: 'Query', getClinics: Array<{ __typename?: 'Clinic', id: string, originId: string, name: string, patients: Array<{ __typename?: 'Patient', id: string, originId: string, clinicId: string, firstName: string, lastName: string, dateOfBirth: any } | null> }> };

export type PatientFragmentFragment = { __typename?: 'Patient', id: string, originId: string, clinicId: string, firstName: string, lastName: string, dateOfBirth: any };

export const PatientFragmentFragmentDoc = gql`
    fragment PatientFragment on Patient {
  id
  originId
  clinicId
  firstName
  lastName
  dateOfBirth
}
    `;
export const GetClinicDocument = gql`
    query GetClinic {
  getClinics {
    id
    originId
    name
    patients {
      ...PatientFragment
    }
  }
}
    ${PatientFragmentFragmentDoc}`;

export function useGetClinicQuery(options?: Omit<Urql.UseQueryArgs<GetClinicQueryVariables>, 'query'>) {
  return Urql.useQuery<GetClinicQuery, GetClinicQueryVariables>({ query: GetClinicDocument, ...options });
};