# SocialSphere — Modern React 19 Social Media Platform

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **SocialSphere** is a modern, responsive social media platform built with **React 19**, **Vite**, and an ultra-refined **glassmorphic OLED dark UI**. It features dynamic feeds, interactive community polls, AI-assisted content generation, 24-hour ephemeral stories, real-time simulated messaging, a dedicated activity & notifications center, and customizable user profiles with persistent storage.

---

## 📸 Overview & Key Highlights

SocialSphere brings together essential social platform mechanics with fluid micro-interactions and contemporary aesthetics:

- 🌟 **Dynamic Multi-Tab Feed**: Seamlessly toggle between *Trending*, *For You*, *Following*, *Polls & Debates*, and *Bookmarks* views.
- 📊 **Interactive Community Polls**: Create and vote on polls with custom options, animated percentage bars, vote withdrawal/toggling, and expiry tracking.
- 🤖 **AI Magic Assistant & Summaries**: Generate high-engagement posts across 5 creator personas, evaluate live viral potential scores, and view 3-bullet AI Takeaways on any post.
- 🔔 **Interactive Notifications Center**: Dedicated activity center with category filters (*All*, *Mentions*, *Reactions & Reposts*, *Comments*, *Polls*), unread counters, live simulation triggers, and header flyout integration.
- ⚡ **24-Hour Ephemeral Stories**: Interactive stories carousel with multi-segment timed progress bars, pause on hold/hover, like reactions, and a custom story creator.
- 💬 **Omnipresent Messaging System**: Full-page `/Messages` conversation center plus a dockable floating chat drawer for messaging from any view with simulated intelligent replies.
- 👤 **Customizable User Profile**: Live profile editor with customizable bio, avatar seeds ([DiceBear](https://dicebear.com/)), banner wallpapers, follower statistics, and persistent `localStorage` support.
- 🔍 **Real-Time Global Search & Tag Filtering**: Instant search across post titles, bodies, authors, and hashtags with filter pills.
- 🎨 **Glassmorphism Design System**: Dark OLED palette (`#080811`), vibrant indigo-violet-cyan gradients, backdrop-blur surfaces, and custom-styled scrollbars.

---

## ✨ Features in Detail

### 1. 📰 Feed & Post Interactions
- **Multi-Tab Feed Views**: Filter posts by *Trending*, *For You*, *Following*, *Polls & Debates*, or saved *Bookmarks*.
- **Quick Compose**: Share thoughts instantly directly from the top of the feed without leaving the page, with built-in poll creation and AI assistance triggers.
- **Dedicated Create Post Page**: Full-screen post creation with title, body, hashtag generation, mood tag selection, live image URL preview, and optional poll attachments.
- **Threaded Commenting**: Expand comments on any post, view timestamps, and post replies with live feedback.
- **Post Engagements**: Animated heart likes, repost counter increments, bookmarks, post deletion, and image modal previews.
- **AI Takeaway Summaries**: Expandable 3-bullet smart summaries highlighting core insights of any post.
- **Toast Feedback System**: Real-time feedback for publishing, liking, bookmarking, poll voting, and deleting posts.

### 2. 📊 Interactive Polls & Community Debates
- **Custom Poll Creation**: Add, remove, and customize poll options (2 to 5 options) directly from Quick Compose or the Create Post page.
- **Real-Time Vote Tracking**: Click to vote with instant calculation of vote totals and animated CSS percentage bars.
- **Vote Withdrawal & Switching**: Click your selected choice again to unvote or switch to another option seamlessly.
- **Polls Feed Filter**: Dedicated sidebar and feed navigation tab to view and participate in all active community debates.
- **Expiration Status**: Visual badges indicating whether a poll is actively running or concluded.

### 3. 🤖 AI Magic Assistant & Content Generator
- **Persona & Tone Selector**: Craft posts in 5 distinct creator voices:
  - 🚀 *Tech Influencer* (High energy, viral hooks, and formatting)
  - 💼 *SaaS Founder* (Metrics, building in public, and honest lessons)
  - 🤓 *Dev Humor* (Witty bugs, terminal jokes, and coffee memes)
  - ⚡ *Concise & Punchy* (No fluff, high-signal actionable takeaways)
  - 💡 *Thought Leader* (Macro trends, architectural depth, and future outlook)
- **Preset Prompt Library**: 1-click prompt seeds for React 19, AI Pair Programming, Modern CSS & Glassmorphism, Fast Builds with Vite 7, and Senior Dev Advice.
- **Live Viral Score Analyzer**: Real-time metric gauge grading title hooks, content length, formatting quality, and hashtag relevance with actionable optimization tips.
- **1-Click Application**: Automatically populate post forms with generated titles, bodies, hashtags, and poll questions.

### 4. 🔔 Notifications Center & Activity Feed
- **Dedicated Notifications Page**: Full-page notifications center accessible from the left navigation sidebar.
- **Multi-Category Filter Pills**: Filter notifications by:
  - **All Activity**: Complete stream of platform interactions.
  - **Mentions**: Direct creator tags and discussion callouts.
  - **Reactions & Reposts**: Likes and repost activity.
  - **Comments**: Replies and feedback on your posts.
  - **Polls**: Votes cast on your polls and debate milestones.
- **Interactive Micro-Actions**: Toggle read/unread status per notification, remove individual alerts, or mark all as read.
- **Header Flyout Dropdown**: Bell icon with unread badge counter, animated ping indicator, quick-view dropdown, and direct link to the Notifications Center.
- **Live Activity Simulation**: Built-in "Simulate Live Alert" trigger to generate realistic incoming community interactions for demonstrations.
- **Persistent Storage**: Read statuses and notification history persist across sessions via `localStorage`.

### 5. ⏳ Ephemeral Stories
- **Stories Bar**: Horizontal scrollable stories shelf with unread gradient rings and creator avatars.
- **Interactive Story Viewer**: Fullscreen modal with auto-advancing slides, multi-segment progress timers, tap-to-skip, hover/press-to-pause, and direct message reply shortcuts.
- **Story Creator Modal**: Upload image URLs or generate dynamic gradient slides with custom tags and captions.

### 6. 💬 Direct Messaging & Chat Drawer
- **Full-Page Messages View**: Multi-conversation thread list, message history, timestamp formatting, active search, and unread badges.
- **Floating Chat Drawer**: Collapsible floating widget at the bottom-right corner of every screen with unread indicators and quick messaging capabilities.
- **Simulated Real-Time Replies**: Automated intelligent responses simulate live conversation for an engaging demo experience.

### 7. 👤 Profile & Activity Hub
- **Profile Customization**: Edit display name, handle, bio, location, and website with immediate `localStorage` persistence.
- **Avatar & Banner Presets**: Switch between multiple DiceBear avatar styles and Unsplash gradient wallpapers.
- **Activity Metrics**: Live counts for authored posts, bookmarks, likes received, followers, and following.
- **Segmented History**: Tabbed browsing for authored posts, liked posts, saved bookmarks, and media.

### 8. 🧭 Explore & Discover Sidebar
- **Trending Topics**: Live hashtags with post counts and click-to-filter functionality.
- **Who to Follow**: Recommended creators with interactive follow/unfollow states.
- **Network Status**: Platform activity counters and system status indicator.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI library utilizing Context API, `useReducer`, and modern hooks |
| **Vite 7** | Ultra-fast development server and optimized build tool |
| **Bootstrap 5** | Responsive layout scaffolding and utility primitives |
| **React Icons** | Iconography from Feather, Remix, Bootstrap, Material Design, and Ionicons |
| **DiceBear API** | Dynamic SVG avatar generation |
| **CSS3 Glassmorphism** | Custom dark mode design tokens, backdrop filters, and keyframe animations |
| **ESLint 9** | Code quality and linting |

---

## 📁 Project Structure

```
social-media/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                     # Static media and assets
│   ├── components/                 # Reusable UI components
│   │   ├── AiMagicModal.jsx        # AI post generation modal with tone selector & viral score
│   │   ├── CreatePost.jsx          # Dedicated full-page post and poll creator
│   │   ├── CreateStoryModal.jsx    # Modal to publish image or gradient stories
│   │   ├── FloatingChatDrawer.jsx  # Global dockable floating messenger
│   │   ├── Footer.jsx              # App footer with copyright and navigation links
│   │   ├── Header.jsx              # Sticky header with search, notifications flyout & user menu
│   │   ├── LoadingSpinner.jsx      # Loading state spinner and skeletons
│   │   ├── MessagesView.jsx        # Full-screen conversation center
│   │   ├── NotificationsView.jsx   # Dedicated notifications feed with category filters
│   │   ├── PollCard.jsx            # Interactive poll card with vote percentage bars
│   │   ├── Post.jsx                # Individual post card with comments, polls & reactions
│   │   ├── PostList.jsx            # Feed with stories, tabs, filters, and pagination
│   │   ├── QuickCompose.jsx        # Inline quick post & poll composer for the feed
│   │   ├── RightSidebar.jsx        # Trending hashtags, creator suggestions & stats
│   │   ├── Sidebar.jsx             # Left navigation sidebar with active tab links & badges
│   │   ├── StoriesBar.jsx          # Horizontal carousel of active user stories
│   │   ├── StoryViewerModal.jsx    # Fullscreen timed story player modal
│   │   ├── Toast.jsx               # Global toast notification container & context
│   │   ├── UserProfile.jsx         # Profile dashboard with edit modal & tabs
│   │   └── WelcomeMessage.jsx      # Zero-state empty feed placeholder
│   ├── store/                      # Global Context state management
│   │   ├── ChatContext.jsx         # Direct messaging, conversations & bot replies
│   │   ├── NotificationsContext.jsx# Notifications feed, unread counters & live alerts
│   │   ├── post-list-store.jsx     # Posts, polls, likes, reposts, comments, and filters
│   │   ├── SearchContext.jsx       # Global search input & query provider
│   │   ├── StoriesContext.jsx      # Stories data, active slides, timer & views
│   │   └── UserProfileContext.jsx  # Profile information & local storage sync
│   ├── App.css                     # Comprehensive glassmorphic stylesheet & animations
│   ├── App.jsx                     # App root layout, routing, and context wrappers
│   └── main.jsx                    # React application entry point
├── index.html                      # HTML entry point with Inter font & meta tags
├── package.json                    # Project dependencies and npm scripts
├── vite.config.js                  # Vite bundler configuration
├── eslint.config.js                # ESLint rules and plugins configuration
└── README.md                       # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shubhamax7/social-media.git
   cd social-media
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the Vite local development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Bundles the application for production in the `dist/` directory. |
| `npm run preview` | Locally serves the production build to preview performance and assets. |
| `npm run lint` | Runs ESLint to inspect codebase for syntax and style issues. |

---

## 🧠 State Architecture

SocialSphere organizes application state into modular, decoupled React Context providers:

```
<PostListProvider>            // Posts, polls, likes, reposts, comments, active filters
  <UserProfileProvider>       // User profile, bio, avatars, local storage sync
    <SearchProvider>          // Global search query, tag filtering
      <ChatProvider>          // Conversations, unread badges, simulated responses
        <StoriesProvider>     // Active stories, progression timer, seen states
          <NotificationsProvider> // Activity notifications, category filters, unread counts
            <ToastProvider>   // Global toast feedback across all interactions
              <App />
            </ToastProvider>
          </NotificationsProvider>
        </StoriesProvider>
      </ChatProvider>
    </SearchProvider>
  </UserProfileProvider>
</PostListProvider>
```

---

## 🎨 Design System & OLED Aesthetics

SocialSphere implements a custom dark glassmorphism aesthetic built on native CSS variables:

- **Deep OLED Background**: `#080811` surface with subtle violet and cyan undertones.
- **Glassmorphic Cards**: `rgba(255, 255, 255, 0.04)` with `backdrop-filter: blur(16px)` and delicate luminous borders (`rgba(255, 255, 255, 0.07)`).
- **Vibrant Accent Gradients**: Multi-stop linear gradient (`linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)`).
- **Fluid Micro-Animations**: Smooth keyframe transitions for heart likes, poll bar expansions, flyout scale-ins, and toast alerts.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
