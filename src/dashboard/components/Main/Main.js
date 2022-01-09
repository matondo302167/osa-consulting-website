import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import DataDocument from './Deposits/DataDocument'
import DataAnagraphic from './Deposits/DataAnagraphic'

const Container = styled.div`
    width: auto;
   
    position: relative;
    padding: 0 4rem;
    
`


const Main = () => {
    return (
        <Container>
            <Navbar/>
            <DataAnagraphic title="Données personnelles"  />
            <DataDocument title="documments chargés"  />
        </Container>

    )
}

export default Main