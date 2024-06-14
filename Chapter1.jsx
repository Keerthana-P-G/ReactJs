import React from 'react';
import { useTranslation } from 'react-i18next';

const Chapter13 = () => {
  const { t } = useTranslation();

  const sentences = t('3chapter1', { returnObjects: true });


  return (
    <div>
      <br></br>{sentences.map((sentence, index) => (
        <p key={index} style={{ color: 'black',margin:"50px",fontSize:"25px" }}>
          {sentence}
        </p>
      ))}
    </div>
  );
};

export default Chapter13;