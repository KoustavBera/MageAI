# MageAI - AI Image Generation Platform

A full-stack web application that generates AI images from text descriptions using the ClipDrop API.

## Features

- **AI Image Generation**: Convert text descriptions into high-quality images
- **User Authentication**: Secure login/signup system
- **Credit System**: Purchase and manage credits for image generation
- **Payment Integration**: Secure payments via Razorpay
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- React Router for navigation
- Framer Motion for animations
- Axios for API calls
- React Toastify for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Razorpay for payment processing
- ClipDrop API for image generation

## Project Structure

```
project/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   └── assets/      # Static assets
│   └── public/          # Public assets
└── server/              # Backend Node.js application
    ├── config/          # Configuration files
    ├── controllers/     # Request handlers
    ├── middleware/      # Custom middleware
    ├── models/          # MongoDB models
    └── routes/          # API routes
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Razorpay account
- ClipDrop API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd client
npm install
```

4. Create `.env` files:

Server `.env`:
```
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIPDROP_APIKEY=your_clipdrop_api_key
```

Client `.env`:
```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Running the Application

1. Start the server:
```bash
cd server
npm run server
```

2. Start the client:
```bash
cd client
npm run dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ClipDrop API](https://clipdrop.co/apis) for image generation
- [Razorpay](https://razorpay.com/) for payment processing
- [Tailwind CSS](https://tailwindcss.com/) for styling
