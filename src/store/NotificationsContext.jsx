import { createContext, useContext, useState, useEffect, useCallback } from "react";

const NOTIFICATIONS_STORAGE_KEY = "socialsphere_notifications_v1";

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif_1",
    type: "like",
    actor: {
      name: "Marcus Brody",
      handle: "@marcus_dev",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=MarcusDev",
      isVerified: true,
    },
    actionText: "liked your post",
    targetSnippet: "Vite 7 + CSS Custom Properties is pure speed 🚀",
    targetId: 9903,
    createdAt: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: "notif_2",
    type: "comment",
    actor: {
      name: "Elena Vance",
      handle: "@elena_v",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=ElenaV",
      isVerified: true,
    },
    actionText: "commented on your post",
    targetSnippet: "The glass blur effects and vibrant gradients look sublime!",
    targetId: 9901,
    createdAt: new Date(Date.now() - 16 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: "notif_3",
    type: "poll_vote",
    actor: {
      name: "Alex Rivera",
      handle: "@arivera",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=AlexR",
      isVerified: false,
    },
    actionText: "voted in your poll",
    targetSnippet: "Which styling approach does your team prefer in 2026? · CSS Tokens & Vanilla CSS",
    targetId: 9901,
    createdAt: new Date(Date.now() - 42 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: "notif_4",
    type: "mention",
    actor: {
      name: "Sarah Jenkins",
      handle: "@sarah_j",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=SarahJ",
      isVerified: true,
    },
    actionText: "mentioned you in a post",
    targetSnippet: "Excited to collaborate with @shubham on our next-gen responsive design system!",
    targetId: 9901,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: "notif_5",
    type: "repost",
    actor: {
      name: "Devon Vance",
      handle: "@devon_codes",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=DevonV",
      isVerified: true,
    },
    actionText: "reposted your thoughts",
    targetSnippet: "Building next-generation design systems with Glassmorphism & React 19 ✨",
    targetId: 9901,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: "notif_6",
    type: "follow",
    actor: {
      name: "Maya Lin",
      handle: "@mayalin_ux",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=MayaLin",
      isVerified: true,
    },
    actionText: "started following your sphere",
    targetSnippet: null,
    targetId: null,
    createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
];

const SIMULATED_COMMUNITY_ACTIONS = [
  {
    type: "like",
    actor: {
      name: "Liam O'Connor",
      handle: "@liam_oc",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=LiamOC",
      isVerified: false,
    },
    actionText: "liked your post",
    targetSnippet: "Building next-generation design systems with Glassmorphism & React 19 ✨",
    targetId: 9901,
  },
  {
    type: "poll_vote",
    actor: {
      name: "Chloe Dupont",
      handle: "@chloedupont",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=ChloeD",
      isVerified: true,
    },
    actionText: "voted on your poll",
    targetSnippet: "Autonomous test verification & regression checking",
    targetId: 9902,
  },
  {
    type: "comment",
    actor: {
      name: "Sophia Zhang",
      handle: "@sophiaz",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=SophiaZ",
      isVerified: true,
    },
    actionText: "commented",
    targetSnippet: "The performance and fluid typography in this update are phenomenal!",
    targetId: 9901,
  },
  {
    type: "mention",
    actor: {
      name: "Kai Takahashi",
      handle: "@kaitakahashi",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=KaiT",
      isVerified: true,
    },
    actionText: "tagged you in a discussion",
    targetSnippet: "@shubham Have you experimented with container queries in the sidebar layout?",
    targetId: 9903,
  },
  {
    type: "repost",
    actor: {
      name: "Zoe Sterling",
      handle: "@zoesterling",
      avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=ZoeS",
      isVerified: false,
    },
    actionText: "reposted your update",
    targetSnippet: "Vite 7 + CSS Custom Properties is pure speed 🚀",
    targetId: 9903,
  },
];

const NotificationsContext = createContext(null);

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load notifications from storage", e);
    }
    return INITIAL_NOTIFICATIONS;
  });

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        NOTIFICATIONS_STORAGE_KEY,
        JSON.stringify(notifications)
      );
    } catch (e) {
      console.error("Failed to persist notifications", e);
    }
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const markAsUnread = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: false } : n))
    );
  }, []);

  const toggleRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const deleteNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const addNotification = useCallback((data) => {
    const newNotif = {
      id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      createdAt: new Date().toISOString(),
      read: false,
      ...data,
    };
    setNotifications((prev) => [newNotif, ...prev]);
    return newNotif;
  }, []);

  const simulateLiveNotification = useCallback(() => {
    const randomIndex = Math.floor(
      Math.random() * SIMULATED_COMMUNITY_ACTIONS.length
    );
    const template = SIMULATED_COMMUNITY_ACTIONS[randomIndex];
    const newNotif = {
      id: `notif_${Date.now()}`,
      createdAt: new Date().toISOString(),
      read: false,
      ...template,
    };
    setNotifications((prev) => [newNotif, ...prev]);
    return newNotif;
  }, []);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAsUnread,
        toggleRead,
        markAllAsRead,
        deleteNotification,
        clearAllNotifications,
        addNotification,
        simulateLiveNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const ctx = useContext(NotificationsContext);
  if (!ctx) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return ctx;
};
