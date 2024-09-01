# Healthy 24

The Doctor's Office Management System enables doctors to efficiently handle appointments, manage patient records, and maintain detailed medical histories, streamlining the administrative aspects of healthcare for improved patient care and organizational efficiency.

# Getting Started

To run the project in development mode
`npm install --force`

To intergration the interface with the backend, you can first create a file, for example **_patients.ts_**, called something like this in the `/src/axios` folder, and then create a file **_patients.ts_** in the `/src/query` folder.

### `/src/axios/patients.ts`

```tsx
import { axiosAPI } from './axios';

// Get Patients API
export const getPatientsAPI = async () =>
  axiosAPI()
    .get(`/patients`)
    .then((res) => res.data);
```

### `/src/query/patients.ts`

```tsx
import { useQuery } from '@tanstack/react-query';
import * as patientsAPI from '../axios/patients';

/*
=====================================================================================
 Get Patients Query
=====================================================================================
*/
export const useGetPatientsQuery = (option?: any) => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    ...option,
    queryKey: ['get-patients'],
    queryFn: () => patientsAPI.getPatientsAPI(filter),
  });
  return { data: data, isLoading, isError, refetch, isFetching };
};
```

### `/src/pages/patients-list/index.ts`

```tsx
import HeaderTitle from '../../components/HeaderTitle';

export default function Home() {
  const { data, isLoading, isError, refetch, isFetching } = useGetPatientsQuery();
  console.log('Patients list: ', data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="p-4 bg-white border border-t-0 border-gray-300">
        <HeaderTitle size="lg" bordered={false} uppercase title="Patients list" />
      </div>
    </>
  );
}
```

# Pages

## Index page

Home page contains statistics and reservations.
**Path:** `{{BASE_URL}}/home`

## Messages page

Message page Doctor can talk to patients very easily

### **Index Path:** `{{BASE_URL}}/messages`

### **Message details Path:** `{{BASE_URL}}/messages/{patient_id}`

## Patients page

The Patients Page displays and manages patient details

### **Index Path:** `{{BASE_URL}}/patients-list`

### **Patients details Path:** `{{BASE_URL}}/patients-list/{patient_id}`

### **Message details Path:** `{{BASE_URL}}/messages/{patient_id}`

## Auth Pages

### Login Page `{{BASE_URL}}/login`

### Register Page `{{BASE_URL}}/auth/register`

### OTP Verification Page `{{BASE_URL}}/send-otp`

### Forget Password Page `{{BASE_URL}}/reset`

[View Home page ⚡](https://healthy-24.vercel.app/home)

```

```
