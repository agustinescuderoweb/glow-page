import React from 'react';
import styles from '../componentes/whatsappbutton.module.css';
import Image from 'next/image';
import whatsaap from '../../public/whatsapp.svg';

const WhatsAppButton = () => {
  const phoneNumber = '+5492616005809';
  const message = 'Hola Glow, estoy interesado en un modelo.';

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button className={styles.boton} onClick={handleClick}>
      Contactar <Image className={styles.iconos} src={whatsaap} alt="what"></Image>
    </button>
  );
};

export default WhatsAppButton;
