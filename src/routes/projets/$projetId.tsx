import { createFileRoute, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import HttpError from '../../components/HttpError';
import ProjetDataInterface from '../../interfaces/ProjetDataInterface';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Link from '../../components/Link';
import Tag from '../../components/Projects/Tag';
import ScreenShot from '../../components/Projects/ScreenShot';

export const Route = createFileRoute('/projets/$projetId')({
    component: RouteComponent,
})

function RouteComponent() {
    const {projetId} = useParams({from: '/projets/$projetId'});
    const projetState = useState({id: 0, name: '', description: '', date: '', mainImg: 0, technos: [], images: [{src: '', alt: ''}], urls: []});
    const projet: ProjetDataInterface = projetState[0];
    const setProjet = projetState[1];
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
              return setProjet(data.find((e: ProjetDataInterface) => {
                return e.id === parseInt(projetId);
              }));
          })
          .catch((error) => {
              console.error("There was an error with the fetch operation:", error);
          });
    }
    useEffect(() => {
        fetchData();
    }, []);
    if(loader) {
      return <Loader />
    } else if(projet) {
      return (
        <div className='w-full min-h-screen flex flex-col justify-start items-center text-center'>
          <img src={`/images/${projet.images[projet.mainImg].src}`} alt={projet.images[projet.mainImg].alt} className='w-full h-[40vh] object-cover shadow-lg' />
          <main className='w-full py-16 px-32 box-border min-h-full h-fit flex flex-col justify-start items-center gap-16'>
            <section id="infos" className='w-full flex flex-row justify-between items-start gap-16 h-fit'>
              <article className='w-full flex flex-col justify-start items-start gap-4'>
                <Title size={1}>{projet.name}</Title>
                <Title color='primary'>{projet.date}</Title>
                <Paragraph className='text-start'>{projet.description}</Paragraph>
                <div className='flex flex-row items-center justify-start gap-4'>{
                  projet.urls.map((e: string, i: number) => {
                    return (<Link key={i} to={e}>{e}</Link>)
                  })  
                }</div>
              </article>
              <div className='w-fit max-w-[25%] h-full flex flex-col items-center justify-start gap-2'>
                <Title>Technos</Title>
                <div className='w-full flex flex-row flex-wrap gap-2 h-full justify-center'>{
                  projet.technos.map((e: string, i: number) => {
                    return (<Tag key={i}>{e}</Tag>)
                  })
                }</div>
              </div>
            </section>
            <section id="screenshots" className="grid grid-cols-2 gap-8 w-full h-full">
              {projet.images.map((e: {src: string, alt: string, desc?: string}, i: number) => {
                return (<ScreenShot 
                  key={i}
                  reverse={`${i % 2 !== 0}`}
                  src={e.src}
                  alt={e.alt}
                >{e.desc ?? ''}</ScreenShot>)
              })}
            </section>
          </main>
        </div>
      );
    } else {
      return <HttpError code={404}>La page n'a pas été trouvée !</HttpError>;
    }
}
