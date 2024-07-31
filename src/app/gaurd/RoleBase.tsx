'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RoleBasedAccessProps {
    children: React.ReactNode;
    allowedRoles: string[];
    session: { isLoggedIn: boolean; role: string };
}

const RoleBasedAccess = ({ children, allowedRoles, session }: RoleBasedAccessProps) => {
    const router = useRouter();

    useEffect(() => {
        if (!allowedRoles.includes(session.role)) {
            router.push('/not-authorized');
        }
    }, [allowedRoles, session.role, router]);

    if (!allowedRoles.includes(session.role)) {
        return null;
    }

    return <>{children}</>;
};

export default RoleBasedAccess;