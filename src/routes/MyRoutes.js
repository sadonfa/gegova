import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Error } from '../componentes/Error';
import { Inicio } from '../componentes/Inicio';
import { Footer } from '../componentes/layout/Footer';
import { Header } from '../componentes/layout/Header';

export const MyRoutes = () => {
    return (
        <BrowserRouter>

            {/* Cabecera de la pagina  */}

            <Header />

            {/* Fin de la Cabecera */}

            {/* Contenido de la pagina */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to="/inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </section>
            
            {/* Pie de pagina  */}

            <Footer />

            {/* Fin de Pie de pagina  */}
        </BrowserRouter>

    )
}
