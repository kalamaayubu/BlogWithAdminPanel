// src/mockService.js

// Mock data
const mockArticles = [
  {
    id: '1',
    author: 'Joseph Murphy',
    authorImg: '/src/assets/joseph1.jpg',
    authorDescription: 'Dr. Joseph Murphy (1898–1981) was an influential author and speaker in the field of self-help and spirituality. Best known for his book "The Power of Your Subconscious Mind," he emphasized the transformative power of positive thinking and the subconscious mind in achieving personal goals and improving one’s life. Murphy blended concepts from psychology, religion, and metaphysics, advocating that individuals can unlock their potential through visualization, affirmation, and the power of belief. His teachings have inspired countless individuals to harness their inner strengths for personal and professional success.',
    image: '/assets/image2.jpeg',
    title: 'Mind & Soul',
    subtitle: 'Nourishement of all of your faculties',
    summary: 'Summary of the first article...',
    postDate: '2 sep, 2024',
    likes: 22,
    comments: 5,
    content: {
      hero: '/assets/image3.jpeg',
      text: 'Full content for the FIRST article...',
      images: ['/assets/image1.jpeg', '/assets/image2.jpeg'],
    },
  },
  {
    id: "2",
    author: "Orrison Marden",
    authorImg: "/assets/lady.jpeg",
    authorDescription: "Orison Swett Marden (1850–1924) was an American author, businessman, and inspirational speaker known for his writings on success and personal development. He founded the magazine Success and wrote several influential books, including Pushing to the Front and The Victorious Attitude. Marden's work emphasized the importance of a positive mindset, hard work, and perseverance in achieving success. His ideas contributed to the self-help movement and continue to inspire individuals seeking personal and professional growth.",
    image: "/assets/image3.jpeg",
    title: "Body & Fitness",
    subtitle: "Strenghthening the body, the house for both the mind & soul",
    summary: "Recent research show that the wellness (mind and soul) and poise of a physically fit person is 67% better than one who is weak and fllabby. Lets explore the exiting statistics",
    postDate: "20 sep, 2024",
    likes: 34,
    comments: 3,
    content: {
      hero: "/assets/image3.jpeg",
      text: "Full content for the SECOND article. Includes headings, subheadings, and more text.",
      images: [
        "/assets/image4.webp",
        "/assets/image5.webp"
      ]
    }
  }
  
  // Add more articles as needed
];

const mockUsers = [
  {
    id: '1',
    username: 'Ayubu',
    password: 'admin123',
    email: 'ayubu@gmail.com',
    role: 'Admin',
    status: 'active',
  },
  {
    id: '2',
    username: 'Kalama',
    password: 'contry',
    email: 'kalama@gmail.com',
    role: 'Contributor',
    status: 'Deactive',
  },
  {
    id: '3',
    username: 'Joe',
    password: 'isJoe',
    email: 'joe@gmail.com',
    role: 'User',
    status: 'active',
  },
  // Add more users as needed
];

// Function to create new article
export const createArticle = (newArticle) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = (mockArticles.length + 1).toString();
      mockArticles.push({ id, ...newArticle});
      resolve({ success: true, article: { id, ...newArticle }});
    }, 500); // Simulating API delay
  });
};

// Function to update an existing article
export const updateArticle = (id, updatedArticle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const articleIndex = mockArticles.findIndex((article) => article.id === id);
      if (articleIndex === -1) {
        reject({ success: false, message:'Article not found'})
      } else {
        mockArticles[articleIndex] = { id, ...updatedArticle};
        resolve({ success: true, article:mockArticles[articleIndex] });
      }
    }, 500); // Simulating API delay
  });
};

// Function to delete article
export const deleteArticle = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const articleIndex = mockArticles.findIndex((article) => article.id === id);
      if (articleIndex === -1) {
        reject({ success: 'false', message: 'Article not found' });
      } else {
        mockArticles.splice(articleIndex, 1);
        resolve({ success: true });
      }
    }, 500); // Simulating API delay
  })
}

// Mock authentication function
const mockAuthenticateUser = (email, password) => {
  const user = mockUsers.find(u => u.email === email);

  if (!user) {
    // If no user is found with the given email
    return { success: false, error: 'User email does not exist' };
  } else if (user.password !== password) {
    // If password is incorrect
    return { success: false, error: 'Invalid email or password' };
  }

  // If both email and password are correct
  return { success: true, user };
};

// Functions to fetch mock data
export const fetchArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArticles);
    }, 1000); // Simulate a delay
  });
};

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1000); // Simulate a delay
  });
};

export const authenticateUser = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAuthenticateUser(email, password));
    }, 1000); // Simulate a delay
  });
};
