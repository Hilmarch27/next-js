import { SignIn } from '@/features/signin';
import React from 'react'

export default async function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <SignIn />
      </div>
    </main>
  );
}
