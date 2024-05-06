import React from 'react';
import Image from 'next/image';
import instagram from '../../public/instagram.svg';
import whatsaap from '../../public/whatsapp.svg';
import style from '@/componentes/footer.module.css';
import envelope from '../../public/envelope.svg';
import Link from 'next/link';

function Footer() {
  return (
    <div className={style.footer} id="contactos">
        <div className={style.siguenos}>
            <div className={style.pagos}>
            <h1>MEDIOS DE PAGO</h1>
            <h2>Efectivo</h2>
            <h2>Transferencias</h2>
            <h2>NO recibimos tarjetas</h2>
            </div>
            <div className={style.envios}>
            <h1>ENVIOS | RETIROS</h1>
            <h2>Bermejo, Guaymallén</h2>
            <h2>Barrio Liceo, Luján de Cuyo</h2>
            <h2>Centro, Ciudad de Mendoza</h2>
            <h2>Envios a Domicilio <br></br>(consultar costo segun zona)</h2>
            </div>
            <div className={style.contactos}>
            <h1>CONTACTOS</h1>
            <div className={style.iconos}>
            <Link href='https://www.instagram.com/glowswim__/'><Image className={style.icono} src={instagram} alt="Instagram" ></Image> </Link>
            <Link href='https://api.whatsapp.com/send/?phone=2616005809&text&type=phone_number&app_absent=0'> <Image className={style.icono} src={whatsaap} alt="Whatsaap" ></Image> </Link>
            <Link href='glowswimm@gmail.com'> <Image className={style.icono} src={envelope} alt="envelope"></Image> </Link>
            </div>
            </div>
        </div>
    <div className={style.derechos}><h1>Derechos Reservados para Glow.</h1></div>
    </div>
  )
}

export default Footer