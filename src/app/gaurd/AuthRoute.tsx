'use client';

import { sessionStatus } from '@/utils/session/session';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthRoute(Component: any) {
  return function AuthRouteComponent(props: any) {
    const session = sessionStatus();

    useEffect(() => {
      if (!session) {
        redirect('/login');
      }
    }, []);
    if (!session) return null;

    return <Component {...props} />;
  };
}
