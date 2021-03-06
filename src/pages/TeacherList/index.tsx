import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

import TeatcherItem from '../../components/TeatcherItem';

function TeatcherList() {
    return ( 
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teatcher">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeatcherItem/>
                <TeatcherItem/>
                <TeatcherItem/>
                <TeatcherItem/>
                <TeatcherItem/>
                <TeatcherItem/>
            </main>
        </div>
    );
}

export default TeatcherList;