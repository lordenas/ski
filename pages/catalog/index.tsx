import { NextPage } from 'next';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Partner from '../../layout/partner'
import { Button, Tag, Input, Select } from '../../components/ui-components'
import CardBlock from './components/card'
import { useState } from 'react';

const Catalog:  NextPage = () => {
    const [input, setInput] = useState<string>('')

    return (
        <div>
            <div className="catalog-background">
                <Header />
                <div className="container">
                    <div className="main-title mt-5" style={{color: '#FFF'}}>Научим кататься<br />
                        на горных лыжах <br />
                        и сноубордах
                    </div>
                </div>
            </div>
            <div className="container mt-10">
                <div className="row">

                    <div className="col-md-3 pr-2">
                        <Select
                            value={input}
                            onChange={setInput}
                            label="Выберите город"
                            placeholder="Выберите город"
                            dataOption={[{label: 'Красная поляна', value: 0}, {label: 'Роза хутор', value: 1}, {label: 'Горки город', value: 2}, {label: 'Мезмай', value: 3}]}
                        />
                    </div>

                    <div className="col-md-3 pr-2">
                        <Select
                            value={input}
                            onChange={setInput}
                            label="Выберите вид спорта"
                            placeholder="Выберите вид спорта"
                            dataOption={[{label: 'Горные лыжи', value: 0}, {label: 'Сноуборд', value: 1}, {label: 'Горные санки', value: 2}]}
                        />
                    </div>

                    <div className="col-md-3 pr-2">
                        <Input
                            value={input}
                            onChange={setInput}
                            label="Дата"
                            type="date"
                            placeholder="00.00.0000"
                        />
                    </div>

                    <div className="col-md-3">
                        <Select
                            value={input}
                            onChange={setInput}
                            label="Вид занятий"
                            placeholder="Вид занятий"
                            dataOption={[{label: 'Индивидуальные', value: 0}, {label: 'Групповые', value: 1}]}
                        />
                    </div>

                </div>
                <div className="d-flex mt-5">
                    <Tag 
                        onRemove={() => {}}
                        className="mr-2"
                    >
                        Красная Поляна
                    </Tag>
                    <Tag 
                        onRemove={() => {}}
                    >
                        Сноуборд
                    </Tag>
                </div>
               
 
                <div className="catalog-content mt-10">

                    {
                        testData.map((item, index) => (
                            <CardBlock
                                onClick={() => {}}
                                info={item}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <Partner />
            <Footer />
        </div>
    )
}

export default Catalog;


const testData = [
{
    image: "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/bwp-peppertree-at-bend/media/man-carrying-snow-skis-5be4a2eed0758.jpg",
    name: "Михаил Соболь",
    location: "Красная поляна",
    sport: "Сноуборд",
    age: "32",
    experience: '12',
},
{
    image: "https://www.socialmoms.com/wp-content/uploads/2016/06/ski-selfie.jpg",
    name: "Михаил Соболь",
    location: "Красная поляна",
    sport: "Сноуборд",
    age: "32",
    experience: '12',
},
{
    image: "https://ak.picdn.net/shutterstock/videos/30407146/thumb/1.jpg",
    name: "Михаил Соболь",
    location: "Красная поляна",
    sport: "Сноуборд",
    age: "32",
    experience: '12',
},
{
    image: "https://media.gettyimages.com/photos/girl-snowboarding-low-angle-view-sun-valley-idaho-usa-picture-id10190760?s=612x612",
    name: "Михаил Соболь",
    location: "Красная поляна",
    sport: "Сноуборд",
    age: "32",
    experience: '12',
},
{
    image: "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/bwp-peppertree-at-bend/media/man-carrying-snow-skis-5be4a2eed0758.jpg",
    name: "Михаил Соболь",
    location: "Красная поляна",
    sport: "Сноуборд",
    age: "32",
    experience: '12',
},
{
    image: "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/bwp-peppertree-at-bend/media/man-carrying-snow-skis-5be4a2eed0758.jpg",
    name: "Михаил Соболь",
    location: "Красная поляна",
    sport: "Сноуборд",
    age: "32",
    experience: '12',
},
]