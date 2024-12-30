import React from 'react';

import { useTheme } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';

import ReplyIcon from '@mui/icons-material/Reply';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import LoopIcon from '@mui/icons-material/Loop';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import LogoutIcon from '@mui/icons-material/Logout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Cart from '@mui/icons-material/ShoppingBag';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Settings from '@mui/icons-material/MiscellaneousServices';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';

import { Plus } from './plus';
import { RemoveIcon } from './remove';
import { UserInterface } from './user-interface';
import { Phone } from './phone';
import { Password } from './password';
import { Email } from './email';
import { RegisterForm } from './register-form';
import { Facebook } from './facebook';
import { Google } from './google';
import { ViewAll } from './view-all';
import { Language } from './language';
const icons = {
  //Material Icons
  'account-circle': AccountCircleOutlinedIcon,
  reply: ReplyIcon,
  mail: MailOutlineTwoToneIcon,
  edit: EditIcon,
  loop: LoopIcon,
  rotate: ScreenRotationIcon,
  'more-vert': MoreVertIcon,
  close: CloseIcon,
  plus: Plus,
  remove: RemoveIcon,
  home: HomeRoundedIcon,
  order: AddShoppingCartRoundedIcon,
  account: AccountCircleRoundedIcon,
  group: GroupsRoundedIcon,
  support: SupportAgentRoundedIcon,
  payment: PaymentIcon,
  check: CheckCircleIcon,
  'warning-circle': ErrorIcon,
  warning: ReportProblemIcon,
  'info-fill': InfoIcon,
  search: SearchIcon,
  sort: SortIcon,
  logout: LogoutIcon,
  view: RemoveRedEyeIcon,
  log: LibraryBooksIcon,
  settings: Settings,
  'order-error': ProductionQuantityLimitsIcon,
  lock: LockIcon,
  unlock: LockOpenIcon,
  up: ArrowUpwardIcon,
  delete: DeleteIcon,

  // Custom Icon
  'user-interface': UserInterface,
  cart: Cart,
  phone: Phone,
  password: Password,
  email: Email,
  'register-form': RegisterForm,
  facebook: Facebook,
  google: Google,
  'view-all': ViewAll,
  language: Language,
};

type ColorTypes =
  | 'action'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | undefined;

export type IconTypes = keyof typeof icons;

type Props = {
  name: IconTypes;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
  size?: string | number;
  color?: ColorTypes;
  fill?: string;
};

export const Icon = (props: Props) => {
  const theme = useTheme();
  const { name, ...others } = props;
  const Component: any = icons[name];
  const colors = {
    action: theme.palette.action.active,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
  };

  return (
    <Component {...others} style={{ ...props.sx }} color={others.color && colors[others.color]} />
  );
};
