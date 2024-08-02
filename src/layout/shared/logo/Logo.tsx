import { FC } from 'react';
import { useSelector } from '@/store/hooks';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { AppState } from '@/store/store';
import Image from 'next/image';

const Logo = (session: any) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    // width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));
  console.log(session);

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled href={session?.session?.session?.role === 'STORE_OWNER' ? '/store-owner' : '/'}>
        {customizer.activeMode === 'dark' ? (
          <Image src="/images/logos/logo.webp" alt="logo" height={customizer.TopbarHeight} width={250} priority />
        ) : (
          <Image src={'/images/logos/logo.webp'} alt="logo" height={customizer.TopbarHeight} width={250} priority />
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href={session?.session?.session?.role === 'STORE_OWNER' ? '/store-owner' : '/'}>
      {customizer.activeMode === 'dark' ? (
        <Image src="/images/logos/logo.webp" alt="logo" height={customizer.TopbarHeight} width={250} priority />
      ) : (
        <Image src="/images/logos/logo.webp" alt="logo" height={customizer.TopbarHeight} width={250} priority />
      )}
    </LinkStyled>
  );
};

export default Logo;
