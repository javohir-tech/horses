import React from 'react'

//images
import opa from "../assets/Images/opa2.png"

//react bootstrap
import { Container } from 'react-bootstrap'
import User from './user'

//components

export default function About() {
  return (
    <Container>
        <h1>О нашем клубе</h1>
        <div className="row">
            <div className="col-md-6">
                <img src={opa} className='img-fluid' alt="" />
            </div>
            <div className="col-md-6">
                <div className="row">
                    <User users={"1100+"} description={"Довольный посетителей за последний год"}/>
                </div>
            </div>
        </div>
    </Container>
  )
}
