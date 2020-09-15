import styled from 'styled-components'
import { setRem} from '../../styles'

export const Section = styled.section`
    padding: ${setRem(64)} 0;
    background: ${ props => props.background};
    

`