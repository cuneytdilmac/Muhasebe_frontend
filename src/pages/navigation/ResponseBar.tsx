import { MenuItem } from 'primereact/menuitem';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/cüneyt-logo.png';
import { useRef } from 'react';
import { Menu } from 'primereact/menu';

interface ResponseBarProps {
  onLogout: () => void;
}

export const ResponseBar = (props: ResponseBarProps) => {
  const navigate = useNavigate();
  const menu = useRef<Menu>(null);

  // Ana menü öğeleri
  const items: MenuItem[] = [
    {
      label: 'ANASAYFA',
      command: () => navigate('/anasayfa')
    },
    {
      label: 'TEKLİFLER',
      command: () => navigate('/teklifler')
    },
    {
      label: 'ŞAHISLAR',
      command: () => navigate('/sahislar')
    },
    {
      label: 'GENEL ÇALIŞMALAR',
      className: 'mr-2',
      items: [
        { label: 'ÇALIŞMALAR', command: () => navigate('/calismalar') },
        { label: 'Genel Tekrar', command: () => navigate('/genel-tekrar') },
        { label: 'Temel Genel Tekrar', command: () => navigate('/temel-genel-tekrar') },
        { label: 'Netflix', command: () => navigate('/netflix') },
        { label: 'Youtube', command: () => navigate('/youtube') },
        { label: 'Instagram', command: () => navigate('/instagram') },
        { label: 'Arabalar', command: () => navigate('/arabalar') },
        { label: 'Türk Hava Yolları', command: () => navigate('/türk-hava-yollari') },
        { label: 'Kullanıcılar', command: () => navigate('/kullanicilar') },
        { label: 'Hizalama', command: () => navigate('/hizalama') },
        { label: 'UI-Kit-Anasayfa', command: () => navigate('/ui-kit-anasayfa') },
      ]
    },
    {
      label: 'BİREYSEL ÇALIŞMALAR',
      className: 'mr-2',
      items: [
        { label: 'Cüneyt ÇALIŞMALARI', command: () => navigate('/cüneyt-kendi-calismalari') },
        { label: 'Hizalama Örnekler', command: () => navigate('/hizalama-örnekler') },
        { label: 'Genel Tekrarlar', command: () => navigate('/genel-tekrarlar') },
        { label: "Youtube", command: () => navigate('/youtube-bireysel') },
        { label: "Bireysel Araba", command: () => navigate('/araba-bireysel') },
      ]
    },
    {
      label: 'KAYITLAR',
      command: () => navigate('/kayitlar')
    },
    {
      label: 'FRONTEND',
      command: () => navigate('/frontend')
    },
  ];

  // Profil ve logout menü öğeleri
  const menuItems = [
    {
      label: 'Profil',
      icon: 'pi pi-user',
      command: () => navigate('/profil'),
    },
    {
      label: 'Oturumu Kapat',
      icon: 'pi pi-sign-out',
      command: () => {
        props.onLogout();
      },
    },
  ];

  return (
    <div className="card">
      <Menubar
        model={items}
        start={
          <img
            style={{
              width: 120,
              height: 80,
              borderRadius: 16,
            }}
            src={logo}
            alt="Cüneyt Logo"
          />
        }
        end={
          <div>
            <button
              style={{
                width: 50,
                height: 50,
                borderRadius: '100%',
                backgroundColor: '#155B63',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={(event) => menu.current?.toggle(event)}
            >
              C
            </button>
            <Menu model={menuItems} popup ref={menu} />
          </div>
        }
      />
    </div>
  );
};
