import { NextPage } from 'next';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Partner from '../../layout/partner'
import { Button, Card, Input, Select } from '../../components/ui-components'
import CardBlock from './components/card'
import { useState } from 'react';

const Catalog:  NextPage = () => {
    const [input, setInput] = useState<string>('')

    return (
        <div>
            <div className="catalog-background">
                <Header />
            </div>
            <div className="container mt-10">
                <Input
                    value={input}
                    onChange={setInput}
                    label="Вид спорта"
                />
                <br></br>
                <br></br>
                <Select
                    value={input}
                    onChange={setInput}
                    label="Вид спорта"
                />
                <br></br>
                <br></br>
                <div className="catalog-content">

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