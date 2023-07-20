import React from 'react'
import styled from "styled-components";
import Header from '../../components/Header';
import Gorilla from '../../views/Gorilla';
import Footer from '../../components/Footer';
import Roadmap from '../../views/Roadmap';

const Home = () => {
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap:32px;
        flex-direction: column;
        overflow: hidden;
    `
  return (
    <Container>
        <Header />
        <Gorilla />
        <Roadmap />
        <Footer />
    </Container>
  )
}

export default Home