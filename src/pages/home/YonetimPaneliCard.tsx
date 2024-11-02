import { ProgressSpinner } from 'primereact/progressspinner';
import { useNavigate } from 'react-router-dom';

interface YonetimPaneliCardProps {
    label: string,
    numberOfElement?: number,
    path: string,
}

export default function YonetimPaneliCard(props: YonetimPaneliCardProps) {
    const navigate = useNavigate();
    const onNavigatePage = () => navigate(props.path);

    return (
        <button
            onClick={onNavigatePage}
            style={{
                width: 250,
                height: 250,
                border: "1px solid #0D4552",  // 2. rengi kenar çizgisi olarak kullandım
                borderRadius: "15px",
                background: "linear-gradient(270deg, #242337 5%, #0D4552 95%)",  // Logo renkleriyle gradient
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                margin: 20,
                cursor: 'pointer'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
        >
            <h2 style={{
                fontSize: "24px",  // Daha büyük başlık
                fontWeight: "bold",  // Kalın font
                color: "#fff",  // Beyaz başlık
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",  // Başlık için gölge efekti
                borderBottom: "2px solid #fff",  // Beyaz alt çizgi
                paddingBottom: "10px",  // Alt çizgi ile başlık arasına boşluk
                display: "inline-block"  // Çizginin başlık genişliğinde olması için
            }}>
                {props.label}
            </h2>
            <p style={{
                fontSize: "40px",  // Daha büyük sayı
                fontWeight: "600",  // Sayıyı daha belirgin yapar
                color: "#FFD700",  // Altın rengi ile sayıyı öne çıkar
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",  // Derinlik efekti
                transition: "color 0.3s ease",  // Hover için geçiş efekti
                borderBottom: "2px solid #FFD700",
                paddingBottom: "10px",
                display: "inline-block"
            }}
                onMouseEnter={e => e.currentTarget.style.color = "#FF4500"}  // Hover'da kırmızıya geçiş
                onMouseLeave={e => e.currentTarget.style.color = "#FFD700"}  // Hover'dan çıkıldığında tekrar altın rengi
            >
                {
                    props.numberOfElement
                        ?
                        props.numberOfElement
                        :
                        <ProgressSpinner />
                }
            </p>
        </button>
    )
}
