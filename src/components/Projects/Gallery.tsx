import { useEffect, useState } from 'react'
import Card from './Card';
import Loader from '../Loader';
import ProjetDataInterface from '../../interfaces/ProjetDataInterface';

export default function Gallery() {
    const [projects, setProjects] = useState([]);
    const [loader, setLoader] = useState(true);
        
    function fetchData() {
        return fetch('/data/projets.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setLoader(false);
                return setProjects(data);
            })
            .catch((error) => {
                console.error("There was an error with the fetch operation:", error);
            });
        }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div id="projets" className='w-full flex flex-col gap-9'>
            {
                loader ? (
                    <Loader />
                ) : projects.length <= 0 ? (
                    <div></div>
                ) : (
                    <div className="flex flex-row flex-wrap gap-10 justify-around">
                        {projects.map((e: ProjetDataInterface, i: number) => {
                            return (
                                <Card
                                    key={i}
                                    reverse={`${i % 2 !== 0}`}
                                    image={e.images[e.mainImg].src}
                                    imgAlt={e.images[e.mainImg].alt}
                                    name={e.name}
                                    id={e.id}
                                />
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}