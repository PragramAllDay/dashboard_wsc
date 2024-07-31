'use client';

import { sessionStatus } from '@/utils/session/session';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function AuthRoute(Component: React.ComponentType<any>) {
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
