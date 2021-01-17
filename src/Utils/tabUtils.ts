import { Tab, IndexToTabName } from '../types';

export const indexToTabName: IndexToTabName = {
    'repository': 0,
    'followers': 1
}

export const tabList: Tab[] = [
    { tab: 'repository' },
    { tab: 'followers' }
]