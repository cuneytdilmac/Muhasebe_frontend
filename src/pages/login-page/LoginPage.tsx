import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

interface LoginPageProps {
    onLogin: () => void; // LoginPage'e onLogin prop'unu ekle
}

export default function LoginPage({ onLogin }: LoginPageProps) {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();

    // Submit metodu
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);

        // Kullanıcı adı ve şifre kontrolü
        if (username === "cüneyt" && password === "123") {
            console.log("Giriş başarılı!");
            onLogin(); // Giriş yapıldığında onLogin'i çağır
            navigate('/anasayfa');
        } else {
            console.log("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        }
    };

    return (
        <div className='lg-container'>
            <div className='login-page'>
                <h2 className='lg-header'>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        className={`lg-input-field ${isSubmitted && !username ? 'lg-input-error' : ''}`} 
                        type="text" 
                        placeholder='Kullanıcı Adı' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {isSubmitted && !username && (
                        <span className="lg-error-message">Kullanıcı adı gerekli.</span>
                    )}
                    
                    <input 
                        className={`lg-input-field ${isSubmitted && !password ? 'lg-input-error' : ''}`} 
                        type="password" 
                        placeholder='Şifre' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSubmitted && !password && (
                        <span className="lg-error-message">Şifre gerekli.</span>
                    )}

                    <div className='lg-button-container'>
                        <button type="submit" className='lg-button-field'>Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
