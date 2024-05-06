'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '@/componentes/Navbar';
import Footer from '@/componentes/Footer';
import Powered from '@/componentes/Powered';
import WhatsAppButton from '@/componentes/WhatsAppButton';
import Layout from '../app/layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
import styles from '../app/productos.module.css';




interface Producto {
  id: string;
  URL: string;
  NOMBRE: string;
  PRECIO: number;
  TALLES: string[];
  COLORES: string[];
}

async function fetchDataFromFirestore(): Promise<Producto[]> {
  const querySnapshot = await getDocs(collection(db, "grow-tienda"));
  const data: Producto[] = [];
  querySnapshot.forEach((doc) => {
    const { URL, NOMBRE, PRECIO, TALLES, COLORES } = doc.data();
    data.push({ id: doc.id, URL, NOMBRE, PRECIO, TALLES, COLORES });
  });
  return data;
}

export default function Home() {
  const [userData, setUserData] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataFromFirestore();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);



  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <head>
          <title>Glow-Tienda</title>
        </head>
          <Navbar />
          <div className={styles.productContainer}>
            {userData.map((producto) => (
              <div key={producto.id} className={styles.productos}>
                <div className={styles.cajaimagen}>
                  <img className={styles.imagenes} src={producto.URL} alt={producto.NOMBRE} />
                </div>
                <div className={styles.datos}>
                  <p className={styles.nombre}>{producto.NOMBRE}</p>
                  <h1 className={styles.precio}><p>{producto.PRECIO}</p></h1>
                  <p className={styles.talles}>{producto.TALLES}</p>
                  <div className={styles.colores}>
                    {producto.COLORES.map((color, index) => (
                      <div key={index} className={styles.colorSquare} style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                  <WhatsAppButton />
                </div>
              </div>
            ))}
          </div>
          <Footer />
          <Powered />
        </>
      )}
    </Layout>
  );
}