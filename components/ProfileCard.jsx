import { Button } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import Image from 'next/image';
import styles from '../styles/ProfileCard.module.css';

const ProfileCard = ({ profile }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <Image
                    src={profile.image}
                    alt={`${profile.platform} Logo`}
                    className={styles.profileImage}
                    width={380}
                    height={200}
                />
            </div>
            <div className={styles.content}>
                <h3>{profile.platform}</h3>
                <p>
                    <strong>Username:</strong> {profile.username}
                </p>
                <p>
                    <strong>Highest Rating:</strong> {profile.rating}
                </p>
                <br></br>
                <div className={styles.cta}>
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<OpenInNew />}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            backgroundColor: '#0066cc', // Custom background color
                            color: '#fff', // Text color
                            padding: '6px 12px', // Adjust padding
                            textTransform: 'none', // Disable uppercase text
                            borderRadius: '8px', // Rounded corners
                            fontSize: '14px', // Font size
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
                            '&:hover': {
                                backgroundColor: '#004c99', // Darker shade on hover
                            },
                            '&:focus': {
                                outline: '2px solidrgb(31, 69, 108)', // Focus outline
                                outlineOffset: '2px',
                            },
                        }}
                    >
                        Open Profile
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
