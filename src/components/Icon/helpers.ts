import {
  lockIcon,
  plusIcon,
  gatewayBot,
  doubleChevron,
  share,
  trash,
  check,
  cross,
  chevron,
  eyeCrossed,
  eye,
  vestingBot,
  giveawayBot,
} from './icons';
import { IconTypeName } from './types';

export const getIcon = (name: IconTypeName) => {
  switch (name) {
    case 'lock':
      return lockIcon;
    case 'trash':
      return trash;
    case 'plus':
      return plusIcon;
    case 'gatewayBot':
      return gatewayBot;
    case 'doubleChevron':
      return doubleChevron;
    case 'share':
      return share;
    case 'check':
      return check;
    case 'cross':
      return cross;
    case 'chevron':
      return chevron;
    case 'eyeCrossed':
      return eyeCrossed;
    case 'vestingBot':
      return vestingBot;
    case 'giveawayBot':
      return giveawayBot;
    case 'eye':
      return eye;
  }
};
