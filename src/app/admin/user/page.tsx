import UsersTable from '@/components/admin/user/UsersTable';
import React from 'react';

export default function CategoriesPage() {
  return (
    <div className='px-20 py-10'>
      <div className='text-primary font-bold text-4xl pb-8'>
        System Users
      </div>
      <UsersTable />
    </div>
  );
}
