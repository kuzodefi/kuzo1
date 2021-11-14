import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/swap?outputCurrency=0x09F956A0C414B670bB5FEA3D6734A10cEBd4f7D6',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Chart',
    icon: 'InfoIcon',
    href: 'https://kek.tools/t/0x09F956A0C414B670bB5FEA3D6734A10cEBd4f7D6',
  },
  {
    label: 'Buy Kuzo',
    icon: 'IfoIcon',
    href: 'https://spookyswap.finance/swap?outputCurrency=0x09F956A0C414B670bB5FEA3D6734A10cEBd4f7D6',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Documentation',
    icon: 'MoreIcon',
    href: 'https://kuzo-defi.gitbook.io/kuzo-defi/',
  },
  {
    label: 'Metamask Bridge',
    icon: 'NftIcon',
    href: 'https://kuzo-defi.gitbook.io/kuzo-defi/bridge/metamask',
  },
]

export default config
