import React from 'react';
import Iframe from 'react-iframe';

import Log_in from './Log_in';
import useToken from './useToken';

function Cargo() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Log_in setToken={setToken} />
    }

    return (
        <div className='container'>
            <h3 className='title'>Заказ</h3>
            <p>Мы рады, что вы с нами. </p>

            <div className='form'>
                <h4 className='title2'>Оставить заявку</h4>
                <div className='request'>
                    <div className='div1'>
                        <input className='input' title='ФИО' placeholder="ФИО/Организация*" required />
                        <input className='input' title='Телефон' placeholder="Телефон*" required />
                        <input className='input' title='Email' placeholder="Email*" required />
                    </div>
                    <div>
                        <input className='div2' title='Сообщение' placeholder="Сообщение" />
                    </div>
                </div>
                <button className='button2'>Отправить</button>
            </div>

            <div>
            <p className='title2'>Калькулятор стоимости доставки груза</p>
                <Iframe src="https://maintransport.ru/transportnye-kompanii/calc/external?preset=1" className='calculator'/>
            </div>

        </div>
    )
}
export default Cargo;

