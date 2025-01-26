import React from 'react';
import { Card } from '../ui/card';
import Image from "next/image";
import Link from "next/link";

export default function MapLocation() {
  return (
    <div className="mt-16">
      <Card className="p-4">
        <Link href={'https://goo.gl/maps/FijBfhTC5rHXELVA7'}>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/site-image.png"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg" alt={'map image'} />
          </div>
        </Link>
      </Card>
    </div>
  );
}

