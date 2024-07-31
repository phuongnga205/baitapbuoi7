import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => (
  <div className={styles.card}>
    <img src={image.url} alt={image.title} className={styles.image} />
    <div className={styles.title}>{image.title}</div>
  </div>
);

export default ImageCard;
