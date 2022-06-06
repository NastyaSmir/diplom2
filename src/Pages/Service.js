import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom';

import backgroundImg from '.././assets/background3.jpg';
import '../App.css';
import LTL from './LTL';
import LFL from './LFL';
import Express from './Express';

function Service() {
    return (
        <div className='container'>
            <h3 className='title'>Автомобильные грузоперевозки</h3>
            <div class="bulletedList">
                <nav>
                    <ul class="example" >
                        <li><Link to="lTL">Автомобильные перевозки сборных грузов (LTL)</Link></li>
                        <li><Link to="lFL">Автомобильные перевозки генеральных грузов (FTL)</Link></li>
                        <li><Link to="express">Экспресс-доставка грузов</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='service'>
                <Routes>
                    <Route path="/LTL" element={<LTL />} />
                    <Route path="/LFL" element={<LFL />} />
                    <Route path="/Express" element={<Express />} />
                </Routes>

            </div>
        </div>
    )
}
export default Service 