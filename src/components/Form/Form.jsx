import React, { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

const Form = () => {
    const [coutry, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Відправити дані'
        })
    }, [])
    
    useEffect(() => {
        if(!street || !coutry) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    },[coutry, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введіть ваші дані</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Країна'}
                value={coutry}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Вулиця'}
                value={street}
                onChange={onChangeCountry}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Фіз. лице</option>
                <option value={'legal '}>Юр. лице</option>
            </select>
        </div>
    );
};

export default Form;

