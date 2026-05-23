# 🌸 BloomBalance

A cycle-aware fitness planner designed for women that generates personalized workout plans based on menstrual cycle phases, energy levels, symptoms, and fitness goals.

---

## ✨ Features

### 🧠 Intelligent Workout Generation

BloomBalance dynamically generates workout plans using:

* Menstrual cycle phase
* Energy levels
* Sleep patterns
* Symptoms
* Fitness goals
* Workout focus areas

---

## 📱 Core Functionality

### Multi-Screen Onboarding

* Welcome screen
* Goal selection
* Focus area selection
* Workout frequency setup
* User information collection

### Personalized Inputs

Users can provide:

* Age
* Height
* Weight
* Cycle start date
* Sleep hours
* Energy levels
* Symptoms
* Fitness goals
* Workout preferences

---

## 🔄 Cycle-Aware Logic

The app detects:

* Menstrual Phase
* Follicular Phase
* Ovulation Phase
* Luteal Phase

Workouts adapt automatically depending on the current phase.

---

## 🏋️ Dynamic Workout System

Workout plans include:

* Exercise recommendations
* Sets
* Reps
* Duration
* Intensity adjustments

The app intelligently adapts workouts based on:

* Low energy
* High energy
* Fatigue
* Cramps
* Recovery needs

---

## 📊 Progress Tracking

Users can:

* Mark workouts as completed
* Skip workouts
* Track workout consistency
* View analytics charts
* Monitor streaks
* Track estimated calories burned

---

## 💾 Persistent Local Storage

BloomBalance stores:

* Workout history
* Progress tracking
* Completed sessions
* User analytics

using AsyncStorage.

---

## 🔔 Notifications

The app supports local workout reminders using Expo Notifications.

---

## 🎨 UI & UX Highlights

* Modern dark-themed interface
* Animated cards and transitions
* Smooth scrolling layouts
* Bottom tab navigation
* Responsive mobile-first design
* Energy visualization bars
* Analytics dashboard

---

## 🛠️ Tech Stack

### Frontend

* React Native
* Expo
* TypeScript

### Navigation

* Expo Router

### Storage

* AsyncStorage

### Charts

* react-native-chart-kit

### Notifications

* expo-notifications

### Animations

* react-native-animatable

---

## 🚀 Future Improvements

* Firebase authentication
* Cloud sync
* AI-generated workout plans
* Nutrition recommendations
* Calendar workout tracking
* Social/community features
* Push notification scheduling
* Wearable integration

---

## 📂 Project Structure

```bash
app/
 ├── (tabs)/
 │    ├── index.tsx
 │    ├── progress.tsx
 │    ├── profile.tsx
 │    └── _layout.tsx
 │
 ├── goals.tsx
 ├── focus.tsx
 ├── frequency.tsx
 ├── userinfo.tsx
 ├── plan.tsx
 └── modal.tsx
```

---

## 📸 Screens Included

* Welcome Screen
* Goal Selection
* Focus Selection
* User Information Screen
* Personalized Workout Plan
* Progress Dashboard
* Profile & Notifications

---

## 🎯 Purpose

BloomBalance was built to address the lack of personalized fitness systems designed specifically around women's hormonal cycles and recovery needs.

The goal is to create a smarter, healthier, and more sustainable workout experience.

---

## 👨‍💻 Developer

Built using React Native + Expo.

---

## 📌 Repository

GitHub Repository:
[https://github.com/nikpfsgvi8h/BloomBalance](https://github.com/nikpfsgvi8h/BloomBalance)
