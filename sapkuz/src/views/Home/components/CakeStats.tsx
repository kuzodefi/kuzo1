import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  font-color: white;
  background-color: #3E0880;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-color: white;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const platinPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = platinPrice.times(circSupply);

  let fKuzoPerBlock = 0;
  if(farms && farms[0] && farms[0].fKuzoPerBlock){
    fKuzoPerBlock = new BigNumber(farms[0].fKuzoPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px" color="white">
          KUZO Stats
        </Heading>
        <Row>
          <Text fontSize="14px" color="white">Market Cap</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$ " />
        </Row>
        <Row>
          <Text fontSize="14px" color="white">Total Minted</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
		<Row>
          <Text fontSize="14px" color="white">Total Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px" color="white">Circulating Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px" color="white">Maximum Supply</Text>
          10,000
        </Row>		
        <Row>
          <Text fontSize="14px" color="white">New KUZO/block</Text>
          <Text bold fontSize="14px" color="white">{TranslateString(539, '0.001')}</Text>
        </Row>
      </CardBody>
	  

  
        <a href="/pools">
    <img src="images/egg/32.png"
         alt="RugDoc Review" width="624" height="241" /></a>
         


    </StyledCakeStats>
  )
}

export default CakeStats
