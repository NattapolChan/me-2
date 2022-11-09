import { useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

const mainLinksMockdata = [
  { icon: IconHome2, label: 'About' , link: "/"},
  { icon: IconDeviceDesktopAnalytics, label: 'Project' },
  { icon: IconCalendarStats, label: 'Skill' },
  { icon: IconUser, label: 'Journey' },
  { icon: IconFingerprint, label: 'Resume' },
  { icon: IconSettings, label: 'Contact' },
];

export function Sidebar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Releases');
  const router = useRouter()

  const mainLinks = mainLinksMockdata.map((link) => (
    <a href={link.label} onClick={(e)=>{
      e.preventDefault()
      router.push(link.link ||link.label)
    }}>
    <Tooltip label={link.label} position="right">
      <UnstyledButton
        onClick={() => {
              setActive(link.label)
            }
          }
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <link.icon stroke={2} />
      </UnstyledButton>
    </Tooltip>
    </a>
  ));

  return (
    <Navbar className='xs:hidden sm:hidden md:flex min-h-full w-12 pb-8 justify-end space-y-4'>
      {mainLinks}
    </Navbar>
  );
}