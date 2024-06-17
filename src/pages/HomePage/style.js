import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Row } from "antd";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
`

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    align-items: center;
    /* Các điều chỉnh cho thiết bị di động */

`
export const WrapperTextHeader = styled.span`
    font-size: 30px;
    color: #fff;
    font-weight: 900;
    text-align: left;
    color: rgb(9,120,41);
    padding:10px 0px;
    text-transform:uppercase;
    grid-area:auto;

`
    

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: rgb(9,120,41);
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
`
export const WrapperTextHeaderSmall = styled.span`
        font-size: 12px;
        color: rgb(9,120,41);
        font-weight: 700;
        font-size: px;

`
export const WrapperTextHeaderIcon = styled.span`
        font-size:'30px';
        color: rgb(9,120,41);
        font-weight: 700;
`

export const WrapperMenuHeader =styled.div`
    display: flex;
    align-items:center;
    grid-area: auto;
    line-height:25.6px;
    
    min-height: 55px;
    z-index: 9;
    position: relative;
`
export const WrapperNavHeader =styled.ul`
    align-items: center;
    color: black;
    display: flex;
    justify-content:space-between;
    line-height: 25.6px;
    margin: 0px 134.6px;
    padding: 0px 15px;
    height: 100%;
    max-width:1250px;
    margin:0 auto;
`
export const WrapperItemHeader =styled.span`
    align-items: center;
    display:inline-flex;
    flex-wrap: wrap;
    font-weight: 700;
    grid-area: auto;
    letter-spacing: 0.32px;
    line-height: 24px;
    padding: 0px 12px;
    text-align: left;
    text-transform:uppercase ;
    font-size: 18px;
    margin:0 11px;
  
`