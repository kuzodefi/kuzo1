import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledPancakeCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 200px;
  background-image: url('/images/banners/gate2.png');
  background-size: cover;
  background-position: center;
  padding: 0 10px;
  box-shadow: 0 0 10px 2px #bc381980;

  &:hover {
    background-image: url('/images/banners/gate1.png');
  }

  &:hover h2 {
    color: #0d192a;
  }
`

const Link = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const PancakeCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledPancakeCard>
      <Link
        href="https://app.pangolin.exchange/#/swap"
        target="_blank"
      />
      <CardBody>
        <Heading size="md" mb="24px">
          {TranslateString(999, '')}
        </Heading>
      </CardBody>
    </StyledPancakeCard>
  )
}

export default PancakeCard
