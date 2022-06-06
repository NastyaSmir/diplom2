import React, { Component } from 'react';
import {
    Container,
    FormControl,
    Nav,
    Navbar,
    Form,
    Button
} from "react-bootstrap";

import logo from "./logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import Сargo from '../Pages/Сargo';
import About from '../Pages/About';
import Service from '../Pages/Service';

export default class Header extends Component {
    render() {
        return (
            <div className='container'>
                <Router>
                    <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="50"
                                    width="80"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Главная</Nav.Link>
                                    <Nav.Link as={Link} to="/cargo">Сделать заказ</Nav.Link>
                                    <Nav.Link as={Link} to="/service">Услуги</Nav.Link>
                                    <Nav.Link as={Link} to="/about">О компании</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cargo' element={<Сargo />} />
                        <Route path='service/*' element={<Service />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </Router>
                {/* <h3 className='title'>ООО «Грузоперевозки»</h3>
                <p>ООО «Грузоперевозки» является всероссийским логистическим оператором, который оказывает полный спектр
                    транспортно-экспедиционных услуг во внутрироссийском сообщении.<br /><br />

                    В нашей работе мы всегда ориентируемся на потребности и приоритеты наших Клиентов, защищаем их от рисков,
                    стремимся выстраивать с ними долгосрочные партнерские отношения. Качественный сервис и индивидуальный подход
                    являются основополагающими факторами отношений с нашими Партнерами. Ваш успех – наша цель!<br /><br />

                    Вы можете пройти регистрацию, либо войти в свой аккаунт на вкладке "Сделать заказ".
                </p>
                <div className="form2">
                    <h5 className='title2'>Здесь вы можете зарегистрироваться</h5>
                    <form className="reg">
                        <div>
                            <label>
                                <input className='input2' type="text" name="surname" placeholder=' Фамилия' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input className='input2' type="text" name="name" placeholder=' Имя' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input className='input2' type="text" name="patronymic" placeholder=' Отчество' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input className='input2' type="text" name="login" placeholder=' Логин' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input className='input2' type="text" name="password" placeholder=' Пароль' />
                            </label>
                        </div>
                        <div>
                            <button type="registr" className='button3'>Зарегистрироваться</button>
                        </div>
                    </form>
                </div> */}

            </div>
        )
    }
}