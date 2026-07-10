# GymMate - Fitness Workout Tracker App

A modern, feature-rich React Native fitness application built with TypeScript and Expo. GymMate helps users discover workouts, track their progress, and achieve their fitness goals with an intuitive and beautiful UI.

## 📱 Features

### Core Features
- **User Authentication**: Welcome screen and mock login with validation
- **Home Dashboard**: Personalized greeting, today's workout plan, and weekly summary
- **Workout Library**: Browse workouts by category (Strength, Cardio, Yoga, HIIT)
- **Workout Details**: View exercise lists with sets, reps, and duration
- **Progress Tracking**: Visual charts showing weekly activity and statistics
- **Profile Management**: User profile with fitness goals and settings
- **Search & Filter**: Find workouts quickly with search functionality
- **Responsive Design**: Optimized for various mobile screen sizes

### Technical Features
- TypeScript for type safety
- React Navigation for seamless screen transitions
- Mock data architecture with separation of concerns
- Reusable components (Buttons, Cards, Headers)
- Consistent theme and color palette
- Form validation
- Clean, maintainable code structure

## ️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Native Stack)
- **Icons**: Ionicons
- **State Management**: React Hooks (useState)
- **Styling**: StyleSheet with custom theme

## 📂 Project Structure

    GYM_APP/
    ├── App.tsx
    ├── package.json
    ├── README.md
    ├── assets/
    │ ├── workout1.jpeg
    │ ├── workout2.jpeg
    │ ├── workout3.jpeg
    │ ├── workout4.jpeg
    │ └── workout5.jpeg
    └── src/
    ├── navigation/
    │ └── AppNavigator.tsx
    ├── screens/
    │ ├── WelcomeScreen.tsx
    │ ├── LoginScreen.tsx
    │ ├── HomeScreen.tsx
    │ ├── WorkoutListScreen.tsx
    │ ├── WorkoutDetailScreen.tsx
    │ ├── ProgressScreen.tsx
    │ └── ProfileScreen.tsx
    ├── data/
    │ └── workouts.ts
    ├── components/
    │ └── (Reusable components)
    └── theme/
    └── colors.ts

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for mobile testing)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/DISHAN-cyber/GYM_APP.git
   cd GYM_APP
      npm install
   # or
   yarn install
      npx expo start
   # or
   npm start
   # or
   yarn start

   Run on your device
   Android: Press a in the terminal or use Expo Go app
   iOS: Press i in the terminal (Mac only) or use Expo Go app
   QR Code: Scan the QR code with Expo Go app
   
📸 Screenshots
Welcome Screen

Login Screen

Home Dashboard

Workout List

Workout Detail

Progress Tracking

Profile

📱 App Navigation Flow

    Welcome Screen
    ↓
    Login Screen (Mock authentication)
    ↓
    Home Dashboard
    ├── Workout List Screen
    │       ↓
    │   Workout Detail Screen
    │
    ├── Progress Screen
    │
    └── Profile Screen
    
    🔑 Key Features Explained
     1. Mock Authentication
    Email validation (checks for @ symbol)
    Password validation (non-empty fields)
    Error messages for invalid inputs
    No backend required
    2. Workout Data
    5 different workout programs
    Categories: Strength, Cardio, Yoga, HIIT
    Difficulty levels: Beginner, Intermediate, Advanced
    Duration and calorie information
    Exercise details with sets and reps
    3. Progress Tracking
    Weekly workout statistics
    Visual progress bars
    Activity chart (weekly view)
    Goal completion percentage
    Day streak counter
    4. User Profile
    User information display
    Fitness goals
    Level badge (Intermediate/Advanced)
    Settings and preferences
      
    Task Completion Checklist
    ✅ Welcome/Onboarding screen
    ✅ Login screen with validation
    ✅ Home dashboard with today's workout
    ✅ Workout list with categories
    ✅ Workout detail with exercise list
    ✅ Progress screen with statistics
    ✅ Profile screen
    ✅ TypeScript implementation
    ✅ Reusable components
    ✅ Clean folder structure
    ✅ Mock data separation
    ✅ Responsive design
    ✅ Proper navigation 
    ✅ TypeScript for type safety
    ✅ Clean, modern UI design
    ✅ Smooth animations and transitions
    ✅ Consistent color theme
    ✅ Proper error handling
    ✅ Loading states
    ✅ Interactive elements
    
    Notes
    This is a frontend-only application
    All data is mocked and stored locally
    No backend or API integration
    Designed for mobile devices (iOS/Android)
    Built with Expo for easy testing
    
    ‍💻   Developer
    Dishan
    GitHub: @DISHAN-cyber
📄 License
This project is created as part of a React Native internship assignment.
Acknowledgments
React Native documentation
Expo documentation
React Navigation library
Ionicons icon library
