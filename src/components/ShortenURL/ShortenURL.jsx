import { useState, useEffect, createRef } from 'react';
import ShortenAPI from '../API/ShortenAPI';
import { OutputCard } from '../OutputCard/OutputCard';
import { Form } from '../Form/Form';
import './shorten-url.css';

export const ShortenURL = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks();
  }, []);

  let references = {};

  const getOrCreateRef = (key) => {
    if (!references.hasOwnProperty(key)) {
      references[key] = createRef();
    }
    return references[key];
  };

  const fetchLinks = async () => {
    const links = JSON.parse(sessionStorage.getItem("links"))
    if (links) setLinks(links);
  }

  const getShortURL = async (link) => {
    const response = await ShortenAPI.getShortURL(link);
    const { result } = response;
    const linkExists = links.find(
      (link) => link.original_link === result.original_link
    );

    if (!linkExists) {
      setLinks([result, ...links]);
      sessionStorage.setItem("links", JSON.stringify([result, ...links]))
      return true;
    }
  };

  return (
    <>
      <div className='shorten-url-container'>
          <Form onHandleSubmit={getShortURL}/>
      </div>

      <div className="results-wrapper">
        {links.map((link) => (
            <OutputCard
              key={link.code}
              link={link}
              ref={getOrCreateRef(link.code)}
            />
          ))
        }
      </div>
    </>
  )
}
