import ChallengesTable from '@/components/admin/challenges/ChallengesTable';
import React from 'react';

export default function ChallengesPage() {
  return (
    <div className='px-20 py-10'>
      <div className='text-primary font-bold text-4xl pb-8'>
        Challenges
      </div>
      <ChallengesTable />
    </div>
  );
}
