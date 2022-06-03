import { brandColors, P } from "@giveth/ui-design-system";
import styled from "styled-components";


interface KPIType{
  title: string
  value: number
  currency: boolean
}

export function KPI(props: KPIType){
  const StringfiedNumber = props.value.toString().replace(/\d(?=(?:\d{3})+$)/g, '$&.')
  
  return(
    <KPICard>
      <Content>
        <Title>{props.title}</Title>
        <Value>
          <Number>{StringfiedNumber}</Number>
          {props.currency && <Currency>USD</Currency >}
        </Value>
      </Content>
    </KPICard>
  )
}

const KPICard = styled.div`
  background-color:${brandColors.giv[700]};
  height: 100px;
  width: 240px;
  border-radius: 8px;
`

const Content = styled.div`
  padding: 18px 24px;
`

const Value = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled(P)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${brandColors.deep[100]}
`

const Number = styled(P)`
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
`
  
const Currency = styled(P)`
  font-weight: 400;
  font-size: 20px;
  color: ${brandColors.deep[100]};
  margin-left: 8px;
` 

