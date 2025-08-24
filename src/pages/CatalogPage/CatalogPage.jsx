import React from 'react'
import CampersList from '../../components/CampersList/CampersList'
import Filters from '../../components/Filters/Filters'
import Container from '../../components/Container/Container'

const CatalogPage = () => {
  return (
    <Container>
      <div style={{ display: "flex", gap: "64px" }}>
        <Filters/>
        <CampersList/>
      </div>
    </Container>
  )
}

export default CatalogPage