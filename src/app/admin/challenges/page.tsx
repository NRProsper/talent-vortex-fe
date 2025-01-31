import ChallengesTable from '@/components/admin/challenges/ChallengesTable';
import JoinCommunity from '@/components/global/JoinCommunity';
import React from 'react';

export default function ChallengesPage() {
  return (
    <div className='px-20 py-10'>
      <div className='text-primary font-bold text-4xl pb-8'>
        Challenges
        <div className="mt-48">
          <JoinCommunity whatsappLink="https://chat.whatsapp.com/invite/123456" />
        </div>
      </div>
      <ChallengesTable />
    </div>
  );
}
