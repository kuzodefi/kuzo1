import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'KUZO-WFTM LP',
  
    lpAddresses: {
      97: '',
      250: '0xb70244d1a6b7BDC49c95317037155a28B5485e00',
    },
    tokenSymbol: 'KUZO',
    tokenAddresses: {
      97: '',
      250: '0x09F956A0C414B670bB5FEA3D6734A10cEBd4f7D6',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    tokenDecimals: 18,
  },

  
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BOO-WFTM LP',
  
    lpAddresses: {
      97: '',
      250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      97: '',
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
 
  
 
  
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'WFTM-WETH LP',
  
    lpAddresses: {
      97: '',
      250: '0xf0702249F4D3A25cD3DED7859a165693685Ab577',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'WFTM-USDC LP',
  
    lpAddresses: {
      97: '',
      250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      97: '',
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'WFTM-SCREAM LP',
  
    lpAddresses: {
      97: '',
      250: '0x30872e4fc4edbFD7a352bFC2463eb4fAe9C09086',
    },
    tokenSymbol: 'SCREAM',
    tokenAddresses: {
      97: '',
      250: '0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'WFTM-WBTC LP',
  
    lpAddresses: {
      97: '',
      250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'WFTM-DAI LP',
  
    lpAddresses: {
      97: '',
      250: '0xe120ffbda0d14f3bb6d6053e90e63c572a66a428',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      250: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'WETH-USDC',
  //   lpAddresses: {
  //     250: '0x905dfCD5649217c42684f23958568e533C711Aa3',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     250: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KUZO',
  
    lpAddresses: {
      97: '',
      250: '0xb70244d1a6b7BDC49c95317037155a28B5485e00', // RECYCLE-BUSD LP
    },
    tokenSymbol: 'KUZO',
    tokenAddresses: {
      97: '',
      250: '0x09F956A0C414B670bB5FEA3D6734A10cEBd4f7D6',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WFTM',
  
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
  
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 6,
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
  
    lpAddresses: {
      250: '0xa572bdf049382f1f98f9a430788dadd51a303969',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
  
    lpAddresses: {
      250: '0xd92206379bd8203ac38225af006bb96bf1f12412',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DAI',
  
    lpAddresses: {
      250: '0x484237bc35ca671302d19694c66d617142fbc235',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'FUSDT',
  
    lpAddresses: {
      250: '0xfdef392adc84607135c24ca45de5452d77aa10de',
    },
    tokenSymbol: 'FUSDT',
    tokenAddresses: {
      250: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 6,
  },
  {
    pid: 15,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
  
    lpAddresses: {
      250: '0x30409563050c718fd083b646d8a07420e789cdb4',
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      250: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 8,
  },
  {
    pid: 16,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BOO',
  
    lpAddresses: {
      250: '0xf8cb2980120469d79958151daa45eb937c6e1ed6',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // {
  //   pid: 5,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     250: '0x971413902FFfa517456279aaf9f646eE4B11A8D9',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     250: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   tokenDecimals: 6,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     250: '0xcb0e5bfa72bbb4d16ab5aa0c60601c438f04b4ad',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     250: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   tokenDecimals: 6,
  // },
  // {
  //   pid: 7,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBTC',
  //   lpAddresses: {
  //     250: '0xff13348778cc2ced614f6f73a8e488ac11292f25', //  WBTC/eth
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     250: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   tokenDecimals: 8,
  // },
]

export default farms
