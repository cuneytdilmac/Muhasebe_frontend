import { MenuItem } from 'primereact/menuitem';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/cüneyt-logo.png';

export const ResponseBar = () => {
  const navigate = useNavigate();
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
        {
          label: 'ÇALIŞMALAR',
          command: () => navigate('/calismalar')
        },
        {
          label: 'Genel Tekrar',
          command: () => navigate('/genel-tekrar')
        },
        {
          label: 'Temel Genel Tekrar',
          command: () => navigate('/temel-genel-tekrar')
        },
        {
          label: 'Netflix',
          command: () => navigate('/netflix')
        },
        {
          label: 'Youtube',
          command: () => navigate('/youtube')
        },
        {
          label: 'Instragram',
          command: () => navigate('/instagram')
        },
        {
          label: 'Arabalar',
          command: () => navigate('/arabalar')
        },
        {
          label: 'Türk Hava Yolları',
          command: () => navigate('/türk-hava-yollari')
        },
        {
          label: 'Kullanıcılar',
          command: () => navigate('/kullanicilar')
        },
        {
          label: 'Hizalama',
          command: () => navigate('/hizalama')
        },
        {
          label: 'UI-Kit-Anasayfa',
          command: () => navigate('/ui-kit-anasayfa')
        },
      ]
    },
    {
      label: 'BİREYSEL ÇALIŞMALAR',
      className: 'mr-2',
      items: [
        {
          label: 'Cüneyt ÇALIŞMALARI',
          command: () => navigate('/cüneyt-kendi-calismalari')
        },
        {
          label: 'Hizalama Örnekler',
          command: () => navigate('/hizalama-örnekler')
        },
        {
          label: 'Genel Tekrarlar',
          command: () => navigate('/genel-tekrarlar')
        },
        {
          label: "Youtube",
          command: () => navigate('/youtube-bireysel')
        },
        {
          label: "Bireysel Araba",
          command: () => navigate('/araba-bireysel')
        },
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
  ]
  return (
    <div className='card'>
      <Menubar model={items} start={<img style={{
        width: 120,
        height: 80,
        borderRadius: 16

      }} src={logo} alt="Cüneyt Logo" />} />
    </div>
  )
}