// defaultProfileImage.js

const defaultProfileImageUrl = 'https://example.com/default-profile-image.png'; // Replace with a real placeholder URL

// List of sample random placeholder image URLs
const placeholderImages = [
    'https://via.placeholder.com/150/0000FF/FFFFFF?text=User1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=User2',
    'https://via.placeholder.com/150/00FF00/FFFFFF?text=User3',
    'https://via.placeholder.com/150/FFFF00/FFFFFF?text=User4',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=User5',
];

// Function to get a random placeholder image
export const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    return placeholderImages[randomIndex];
};

// Export the default profile image URL
export default defaultProfileImageUrl;
