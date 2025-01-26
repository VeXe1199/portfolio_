import ProfileCard from '../components/ProfileCard'; // Replace with the appropriate ProfileCard component
import { getProfiles } from './api/profiles'; // Replace with the correct API function
import styles from '../styles/ProfilesPage.module.css'; // Update the CSS file name to match

const ProfilesPage = ({ profiles }) => {
    return (
        <>
            <h3>Competitive Programming Profiles</h3>
            <div className={styles.container}>
                {profiles.map((profile) => (
                    <ProfileCard key={profile.platform} profile={profile} />
                ))}
            </div>
        </>
    );
};

// Fetch the profiles data during build time
export async function getStaticProps() {
    const profiles = getProfiles();

    return {
        props: { title: 'Profiles', profiles },
    };
}

export default ProfilesPage;
