import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
outline: none;
&:focus: {
    outline: none;
}
@media ${props => props.theme.media.phone} {
    color: white;
}
@media ${props => props.theme.media.tablet} {
    text-shadow: 2px 4px 4px green;
}
`

export const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C/users/DENIS>'])
  
    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLines([...lines, 'C/users/DENIS>'])
        }
    }
    
    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
            {lines.map(line =>
                <Line color={color}>{line}</Line>    
            )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}
