import React from 'react';

interface CuneytCar1Props {
  imageUrl?: string;
  carName?: string;
  carDetails?: string;
}

// CSS sınıf adlarını doğrudan nesne olarak tanımladık
const styles = {
  carContainer: 'car-container',
  carImage: 'car-image',
  carDetails: 'car-details',
};

// React.memo ile bileşeni optimize et
const CuneytCar1: React.FC<CuneytCar1Props> = React.memo(
  ({ imageUrl = 'https://via.placeholder.com/295x270', carName = 'CuneytCar', carDetails = 'This is a great car!' }) => {
    return (
      <div className={styles.carContainer}>
        <img className={styles.carImage} src={imageUrl} alt={`${carName} car`} />
        <div className={styles.carDetails}>
          <h3>{carName}</h3>
          <p>{carDetails}</p>
        </div>
      </div>
    );
  }
);

export default CuneytCar1;
