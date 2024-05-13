import React from 'react'
import Image from 'next/image';
import whatsaap from '../../public/whatsapp.svg';
import styles from '../componentes/whatsApp.module.css';

const WhatsApp = () => {
    const phoneNumber = '+5492616005809';
    const message = 'Hola, estoy interesado en un modelo.';
  
    const handleClick = () => {
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className={styles.contenedor}>
        <div className={styles.boton}>
          <Image className={styles.iconos} onClick={handleClick} src={whatsaap} alt="what"></Image>
          </div>
          </div>
      );
    };

export default WhatsApp
