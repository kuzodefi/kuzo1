import React from 'react'
import { Card, CardBody, LinkExternal, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const StyledAuditCard = styled(Card)`
  margin: 5px;
  height: 95px;
  width: 270px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const AuditCard = () => {
  return (
    <StyledAuditCard>
      <CardBody>
        <Text bold fontSize="14px" color="primary" style={{ marginTop: -18 }}>
          Review/KYC by JaGo Pending
        </Text>
        <StyledLinkExternal href="https://jagosafer.io/kuzodefi">
          <img
            alt="paladin"
            src="https://jagosafer.io/flags/kycflag.svg"
            style={{ width: 200, height: 61, marginTop: 0, marginLeft: 12 }}
          />
        </StyledLinkExternal>
      </CardBody>
    </StyledAuditCard>
  )
}

export default AuditCard
