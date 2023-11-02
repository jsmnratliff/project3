import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    // Simulate an asynchronous operation (e.g., an API call) using useEffect
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Simulate a delay with setTimeout (remove this line in a real application)
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Simulate fetching user profile data (replace with actual API call)
                const userProfileData = {
                    username: 'JohnDoe',
                    email: 'johndoe@example.com',
                };

                // Set loading to false and update the user data
                setLoading(false);
                setUserData(userProfileData);
            } catch (error) {
                // Handle any errors here
                console.error('An error occurred:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            {loading ? (
                <p>Loading profile data...</p>
            ) : (
                <>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    {/* You can display other user profile content here */}
                </>
            )}
        </div>
    );
};

export default Profile;