import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema stili
import 'primereact/resources/primereact.min.css';          // PrimeReact bileşen stili
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, yellow } from '@mui/material/colors';
import { ResponseBar } from './pages/navigation/ResponseBar';
import AppRouter from './AppRouter';
import LoginPage from './pages/login-page/LoginPage';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[900]
    },
    secondary: {
      main: yellow[500]
    }
  }
});

function App() {
  const navigate = useNavigate(); // Yönlendirme fonksiyonunu al
  // localStorage'dan oturum durumunu kontrol et
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedAuthState = localStorage.getItem('isAuthenticated');
    return savedAuthState ? JSON.parse(savedAuthState) : false;
  });

  useEffect(() => {
    // Oturum durumu değiştiğinde localStorage'a kaydet
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));

    // Eğer oturum açıldıysa, 10 saniye sonra tekrar login sayfasına yönlendir
    if (isAuthenticated) {
      const timeoutId = setTimeout(() => {
        setIsAuthenticated(false); // Oturum durumunu kapat
        navigate('/login'); // Login sayfasına yönlendir
      }, 3600000); // 1 saat (3600000 milisaniye)

      // Cleanup fonksiyonu
      return () => clearTimeout(timeoutId);
    }
  }, [isAuthenticated, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Eğer kullanıcı giriş yapmadıysa LoginPage'i göster */}
        {!isAuthenticated ? (
          <LoginPage onLogin={() => setIsAuthenticated(true)} />
        ) : (
          <>
            <ResponseBar />
            <AppRouter isAuthenticated={isAuthenticated} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
