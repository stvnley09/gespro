interface UserMenuItem {
  id: number;
  title: string;
  icon: string;
  color?: string;
}

const userMenuItems: UserMenuItem[] = [
  {
    id: 1,
    title: 'Paramètres',
    icon: 'material-symbols:settings-account-box-rounded',
    color: 'text.primary',
  },
  {
    id: 2,
    title: 'Aide',
    icon: 'material-symbols:live-help',
    color: 'text.primary',
  },
  {
    id: 3,
    title: 'Se déconnecter',
    icon: 'material-symbols:logout',
    color: 'error.main',
  },
];

export default userMenuItems;
