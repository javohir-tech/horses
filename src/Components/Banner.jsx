//bootstrap react
import { Container } from 'react-bootstrap'

//images
import opa from "../assets/Images/horse.png"

export default function Banner() {
    return (
            <Container className='mt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='banner-header mb-3'>Окунитесь в мир
                            лошадей вместе с нами</h1>
                        <p className='banner-description mb-3'>Уроки верховой езды, фотосессии и мероприятия
                            в частном конном клубе г. Санкт-Петербург</p>
                        <button className='btn btn-warning px-4 py-2 banner-btn'>записаться</button>
                    </div>
                    <div className="col-md-4 offset-1">
                        <img src={opa} alt="" className='img-fluid' />
                    </div>
                </div>
            </Container>
    )
}
