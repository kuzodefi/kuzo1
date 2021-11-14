import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, LinkExternal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import StakeAssetCard from './components/StakeAssetCard'
import Timer from './components/Timer'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import PancakeCard from './components/PancakeCard'
import EarnAPRCard from './components/EarnAPRCard'
import AuditCard from './components/AuditCard'
import CountDown from "./CountDown";

const Hero = styled.div`
  
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;
  color: white;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

//
const HeroContainer = styled.div`
  margin-bottom: 62px;
  ${({ theme }) => theme.mediaQueries.sm} {
    background-color: #7A98F8;
    border: 0px solid;
    border-radius: 20px;
    margin-bottom: 32px;
  }
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 15px;
  display: none;
 // ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`
//
const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`

const Cards = styled(BaseLayout)`
  display: flex;

  align-items: stretch;
  justify-content: center;
  margin-bottom: 48px;

  & > div {
   // grid-column: span 6;
   grid-column: span 8;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const PageContainer = styled(Page)`
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-top: 20px;
`


const HeadingContainer = styled(Page)`
  width: 395px;
  height: 180px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
   
	<PageContainer>
 
	<Hero>
   <HeroContainer>
        <Hero>
          <Title>Welcome To</Title>
          <img src="images/home/logo.png" alt="logo" />
        </Hero>
      </HeroContainer>


   
<CountDown/>
 </Hero>
 
 
      <div>
        <Cards>
		  <FarmStakingCard />
          <CakeStats />
        </Cards>
      </div>
       <SecondRow>
  <div>
          <TotalValueLockedCard />
  </div>    
      
      

        <a href="/">
   <img src="images/egg/33.png"
         alt="Kuzo" /></a>
     
    <a href="/">
    <img src="images/egg/34.png"
         alt="Kuzo" /></a>
         


        </SecondRow>

	  <TwitterCard />
  
	</PageContainer>
  
  )
}

export default Home
