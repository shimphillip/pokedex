import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faUndo } from '@fortawesome/free-solid-svg-icons';
import Container from './styles';

const Sprite = ({ sprites = {}, name = 'Pokemon Name' }) => {
  const [sprite, setSprite] = useState({
    front: true,
    female: false,
    shiny: false,
  });
  const [src, setSrc] = useState('');

  useEffect(() => {
    const source = buildImage(sprite);
    setSrc(sprites[source]);
  }, [sprite, sprites]);

  function buildImage(sprite) {
    const dir = sprite.front ? 'front' : 'back';
    const shiny = sprite.shiny ? '_shiny' : '_default';
    const gender = sprite.female ? '_female' : '';

    if (shiny === '_default' && gender === '_female') {
      return dir + gender;
    }
    return dir + shiny + gender;
  }

  const handleChange = (prop) => {
    // make a copy and update its state
    const spriteCopy = { ...sprite, [prop]: !sprite[prop] };
    const source = buildImage(spriteCopy);
    if (!sprites[source]) {
      return;
    }

    setSprite({ ...sprite, [prop]: !sprite[prop] });
  };

  return (
    <Container>
      <img src={src} alt={name} />
      <div className="controls">
        <div className="sprite-control" onClick={() => handleChange('female')}>
          <FontAwesomeIcon icon={faVenus} />
        </div>
        <div
          className="sprite-control sprite-control-shiny"
          onClick={() => handleChange('shiny')}
        >
          Shiny
        </div>
        <div className="sprite-control" onClick={() => handleChange('front')}>
          <FontAwesomeIcon icon={faUndo} />
        </div>
      </div>
    </Container>
  );
};

export default Sprite;
