// import React from 'react';
import styles from './Profile.module.css';

interface ProfileProps {
    image: string;
    name: string;
    description: string;
}

export function Profile({ image, name, description }: ProfileProps) {
    return (
        <div className={styles.card}>
            <img src={image} alt={`Imagem de ${name}`} className={styles.profileImage} />
            <div className={styles.description}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.text}>{description}</p>
            </div>
        </div>
    );
}

// export default Profile;
