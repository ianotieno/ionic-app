import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const Tab1: React.FC = () => {
  const [images, setImages] = useState<string[]>([]); // State to store multiple images

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });
    const newImage = `data:image/jpeg;base64,${image.base64String}`;
    
    // Append new image to the images array
    setImages(prevImages => [...prevImages, newImage]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Snap & Save</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton expand='full' onClick={takePicture} color="tertiary">Snap Notes</IonButton>
       
        {/* Display all images */}
        {images.length > 0 && (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px', marginTop: '10px' }}>
    {images.map((img, index) => (
      <img 
        key={index} 
        src={img} 
        alt={`Captured ${index}`} 
        style={{ width: '100%', objectFit: 'cover', borderRadius: '5px' }} 
      />
    ))}
  </div>
)}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
