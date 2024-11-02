import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import { Home } from './pages/home/Home';
import { Logs } from './pages/logs/Logs';
import { Offers } from './pages/offers/Offers';
import { Individuals } from './pages/clients/individuals/Individuals';
import { Works } from './pages/works/Works';
import { NetflixUsers } from './pages/works/netflix/NetflixUsers';
import { GenelTekrar } from './pages/works/konular/GenelTekrar';
import { Videos } from './pages/works/youtube/Videos';
import { InstagramAnasayfa } from './pages/works/instagram/Anasayfa';
import { Cars } from './pages/works/arabam-calısması/Cars';
import { TyhProfil } from './pages/works/tyh/TyhProfil';
import { Users } from './pages/works/konular/users/Users';
import { UIKITAnasayfa } from './pages/works/ui-kit/UIKIT-Anasayfa';
import { CüneytCalismalari } from './pages/cüneyt/CüneytCalismalari';
import { GenelTekrarlar } from './pages/cüneyt/genel-tekrarlar/GenelTekrarlar';
import { Videolar } from './pages/works/youtube/Videolar';
import CüneytCars from './pages/cüneyt/bireysel-araba/CüneytCars';
import { HizalamaÖrnek } from './pages/works/konular/HizalamaÖrnek';
import { HizalamaÖrnekler } from './pages/cüneyt/hizalamaÖrnek/HizalamaÖrnekler';
import { ArabalarSayfası } from './pages/temel-konu-tekrarı/ArabalarSayfası';
import PrivateRoute from './pages/navigation/PrivateRoute';
import Frontend from './frontend_genel-tekrar/Frontend';

interface AppRouterProps {
    isAuthenticated: boolean; // Giriş durumunu prop olarak al
}

export default function AppRouter({ isAuthenticated }: AppRouterProps) {
    return (
        <Routes>
            {/* Eğer kullanıcı giriş yapmadıysa LoginPage */}
            <Route path="/" element={<LoginPage onLogin={() => {}} />} />

            {/* Giriş yapılması gereken sayfalar */}
            <Route path="anasayfa" element={<PrivateRoute isAuthenticated={isAuthenticated}><Home /></PrivateRoute>} />
            <Route path="kayitlar" element={<PrivateRoute isAuthenticated={isAuthenticated}><Logs /></PrivateRoute>} />
            <Route path="teklifler" element={<PrivateRoute isAuthenticated={isAuthenticated}><Offers /></PrivateRoute>} />
            <Route path="sahislar" element={<PrivateRoute isAuthenticated={isAuthenticated}><Individuals /></PrivateRoute>} />
            <Route path="calismalar" element={<PrivateRoute isAuthenticated={isAuthenticated}><Works /></PrivateRoute>} />
            <Route path="netflix" element={<PrivateRoute isAuthenticated={isAuthenticated}><NetflixUsers /></PrivateRoute>} />
            <Route path="genel-tekrar" element={<PrivateRoute isAuthenticated={isAuthenticated}><GenelTekrar /></PrivateRoute>} />
            <Route path="temel-genel-tekrar" element={<PrivateRoute isAuthenticated={isAuthenticated}><ArabalarSayfası /></PrivateRoute>} />
            <Route path="youtube" element={<PrivateRoute isAuthenticated={isAuthenticated}><Videos /></PrivateRoute>} />
            <Route path="instagram" element={<PrivateRoute isAuthenticated={isAuthenticated}><InstagramAnasayfa /></PrivateRoute>} />
            <Route path="arabalar" element={<PrivateRoute isAuthenticated={isAuthenticated}><Cars /></PrivateRoute>} />
            <Route path="türk-hava-yollari" element={<PrivateRoute isAuthenticated={isAuthenticated}><TyhProfil /></PrivateRoute>} />
            <Route path="kullanicilar" element={<PrivateRoute isAuthenticated={isAuthenticated}><Users /></PrivateRoute>} />
            <Route path="ui-kit-anasayfa" element={<PrivateRoute isAuthenticated={isAuthenticated}><UIKITAnasayfa /></PrivateRoute>} />
            <Route path="cüneyt-kendi-calismalari" element={<PrivateRoute isAuthenticated={isAuthenticated}><CüneytCalismalari /></PrivateRoute>} />
            <Route path="genel-tekrarlar" element={<PrivateRoute isAuthenticated={isAuthenticated}><GenelTekrarlar /></PrivateRoute>} />
            <Route path="youtube-bireysel" element={<PrivateRoute isAuthenticated={isAuthenticated}><Videolar /></PrivateRoute>} />
            <Route path="araba-bireysel" element={<PrivateRoute isAuthenticated={isAuthenticated}><CüneytCars /></PrivateRoute>} />
            <Route path="hizalama" element={<PrivateRoute isAuthenticated={isAuthenticated}><HizalamaÖrnek /></PrivateRoute>} />
            <Route path="hizalama-örnekler" element={<PrivateRoute isAuthenticated={isAuthenticated}><HizalamaÖrnekler /></PrivateRoute>} />
            <Route path="frontend" element={<PrivateRoute isAuthenticated={isAuthenticated}><Frontend /></PrivateRoute>} />
        </Routes>
    );
}
