import { useState, useMemo } from "react";
import { useNotifications } from "../store/NotificationsContext";
import { useToast } from "./Toast";
import {
  FiHeart,
  FiMessageSquare,
  FiRepeat,
  FiUserCheck,
  FiTrash2,
  FiCheck,
  FiBell,
  FiZap,
} from "react-icons/fi";
import {
  MdHowToVote,
  MdDoneAll,
  MdMarkEmailRead,
  MdMarkEmailUnread,
} from "react-icons/md";
import { RiSparklingFill } from "react-icons/ri";

const formatRelativeTime = (isoString) => {
  if (!isoString) return "Recently";
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) return "Just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
};

const NotificationsView = ({ setSelectedTab }) => {
  const {
    notifications,
    unreadCount,
    markAsRead,
    toggleRead,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications,
    simulateLiveNotification,
  } = useNotifications();

  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNotifications = useMemo(() => {
    switch (activeFilter) {
      case "mentions":
        return notifications.filter((n) => n.type === "mention");
      case "reactions":
        return notifications.filter(
          (n) => n.type === "like" || n.type === "repost"
        );
      case "comments":
        return notifications.filter((n) => n.type === "comment");
      case "polls":
        return notifications.filter((n) => n.type === "poll_vote");
      default:
        return notifications;
    }
  }, [notifications, activeFilter]);

  const counts = useMemo(() => {
    return {
      all: notifications.length,
      mentions: notifications.filter((n) => n.type === "mention").length,
      reactions: notifications.filter(
        (n) => n.type === "like" || n.type === "repost"
      ).length,
      comments: notifications.filter((n) => n.type === "comment").length,
      polls: notifications.filter((n) => n.type === "poll_vote").length,
    };
  }, [notifications]);

  const handleSimulateAlert = () => {
    const newNotif = simulateLiveNotification();
    showToast({
      type: "info",
      title: "New Notification Received",
      message: `${newNotif.actor.name} ${newNotif.actionText}`,
    });
  };

  const handleMarkAllRead = () => {
    markAllAsRead();
    showToast({
      type: "success",
      title: "All Caught Up!",
      message: "All notifications have been marked as read.",
    });
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all notifications?")) {
      clearAllNotifications();
      showToast({
        type: "info",
        title: "Cleared Notifications",
        message: "Your notifications inbox is now empty.",
      });
    }
  };

  const renderTypeIcon = (type) => {
    switch (type) {
      case "like":
        return (
          <div className="notif-badge-icon badge-like">
            <FiHeart />
          </div>
        );
      case "comment":
        return (
          <div className="notif-badge-icon badge-comment">
            <FiMessageSquare />
          </div>
        );
      case "poll_vote":
        return (
          <div className="notif-badge-icon badge-poll">
            <MdHowToVote />
          </div>
        );
      case "mention":
        return (
          <div className="notif-badge-icon badge-mention">
            <RiSparklingFill />
          </div>
        );
      case "repost":
        return (
          <div className="notif-badge-icon badge-repost">
            <FiRepeat />
          </div>
        );
      case "follow":
        return (
          <div className="notif-badge-icon badge-follow">
            <FiUserCheck />
          </div>
        );
      default:
        return (
          <div className="notif-badge-icon badge-default">
            <FiBell />
          </div>
        );
    }
  };

  return (
    <div className="notifications-container">
      {/* Top Banner Header */}
      <div className="notifications-header-card">
        <div className="notifications-title-area">
          <div className="notifications-icon-wrap">
            <FiBell className="notif-main-icon" />
            {unreadCount > 0 && (
              <span className="notif-unread-glow-dot" />
            )}
          </div>
          <div>
            <div className="notifications-title-row">
              <h1 className="notifications-page-title">Notifications</h1>
              {unreadCount > 0 ? (
                <span className="notifications-counter-pill">
                  {unreadCount} unread
                </span>
              ) : (
                <span className="notifications-counter-pill caught-up">
                  All caught up
                </span>
              )}
            </div>
            <p className="notifications-page-desc">
              Real-time activity, reactions, comments, poll debates, and community interactions.
            </p>
          </div>
        </div>

        {/* Global Toolbar Actions */}
        <div className="notifications-actions-toolbar">
          <button
            type="button"
            className="btn-simulate-alert"
            onClick={handleSimulateAlert}
            title="Simulate incoming activity from fellow creators"
          >
            <FiZap />
            <span>Simulate Live Alert</span>
          </button>

          {unreadCount > 0 && (
            <button
              type="button"
              className="btn-mark-all-read"
              onClick={handleMarkAllRead}
              title="Mark all notifications as read"
            >
              <MdDoneAll />
              <span>Mark all read</span>
            </button>
          )}

          {notifications.length > 0 && (
            <button
              type="button"
              className="btn-clear-notifications"
              onClick={handleClearAll}
              title="Clear all notifications"
            >
              <FiTrash2 />
              <span>Clear inbox</span>
            </button>
          )}
        </div>
      </div>

      {/* Segmented Filter Navigation Pills */}
      <div className="notifications-filter-bar">
        <button
          className={`notif-filter-tab ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All Activity
          <span className="notif-tab-badge">{counts.all}</span>
        </button>

        <button
          className={`notif-filter-tab ${activeFilter === "mentions" ? "active" : ""}`}
          onClick={() => setActiveFilter("mentions")}
        >
          Mentions
          {counts.mentions > 0 && (
            <span className="notif-tab-badge">{counts.mentions}</span>
          )}
        </button>

        <button
          className={`notif-filter-tab ${activeFilter === "reactions" ? "active" : ""}`}
          onClick={() => setActiveFilter("reactions")}
        >
          Reactions & Reposts
          {counts.reactions > 0 && (
            <span className="notif-tab-badge">{counts.reactions}</span>
          )}
        </button>

        <button
          className={`notif-filter-tab ${activeFilter === "comments" ? "active" : ""}`}
          onClick={() => setActiveFilter("comments")}
        >
          Comments
          {counts.comments > 0 && (
            <span className="notif-tab-badge">{counts.comments}</span>
          )}
        </button>

        <button
          className={`notif-filter-tab ${activeFilter === "polls" ? "active" : ""}`}
          onClick={() => setActiveFilter("polls")}
        >
          Polls
          {counts.polls > 0 && (
            <span className="notif-tab-badge">{counts.polls}</span>
          )}
        </button>
      </div>

      {/* Notifications List */}
      <div className="notifications-feed-list">
        {filteredNotifications.length === 0 ? (
          <div className="notifications-empty-card">
            <div className="empty-notif-visual">
              <FiBell />
            </div>
            <h3 className="empty-notif-title">No notifications here</h3>
            <p className="empty-notif-text">
              {activeFilter === "all"
                ? "You're completely up to date! When creators interact with your posts, polls, or tag you, you'll see alerts here."
                : `No notifications matching the "${activeFilter}" filter at the moment.`}
            </p>
            <div className="empty-notif-action">
              <button
                type="button"
                className="btn-empty-simulate"
                onClick={handleSimulateAlert}
              >
                <FiZap /> Trigger Sample Activity
              </button>
            </div>
          </div>
        ) : (
          filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`notification-card ${notif.read ? "read" : "unread"}`}
              onClick={() => {
                if (!notif.read) markAsRead(notif.id);
              }}
            >
              {/* Type-specific Icon Indicator */}
              <div className="notification-icon-col">
                {renderTypeIcon(notif.type)}
              </div>

              {/* Actor Avatar */}
              <div className="notification-avatar-col">
                <img
                  src={notif.actor.avatarUrl}
                  alt={notif.actor.name}
                  className="notif-actor-avatar"
                  loading="lazy"
                />
              </div>

              {/* Core Notification Content */}
              <div className="notification-body-col">
                <div className="notif-body-line">
                  <span className="notif-actor-name">{notif.actor.name}</span>
                  <span className="notif-actor-handle">{notif.actor.handle}</span>
                  <span className="notif-action-phrase">{notif.actionText}</span>
                  <span className="notif-timestamp">
                    · {formatRelativeTime(notif.createdAt)}
                  </span>
                </div>

                {/* Target Snippet Preview (if applicable) */}
                {notif.targetSnippet && (
                  <div
                    className="notif-snippet-preview"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (setSelectedTab) {
                        setSelectedTab("Home");
                      }
                    }}
                    title="Click to view discussion in Feed"
                  >
                    <span className="snippet-quote-bar" />
                    <p className="snippet-text">{notif.targetSnippet}</p>
                  </div>
                )}
              </div>

              {/* Right Indicator and Action Menu */}
              <div className="notification-actions-col">
                {!notif.read && <span className="notif-active-dot" title="Unread" />}

                <button
                  type="button"
                  className="notif-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRead(notif.id);
                  }}
                  title={notif.read ? "Mark as unread" : "Mark as read"}
                  aria-label={notif.read ? "Mark as unread" : "Mark as read"}
                >
                  {notif.read ? <MdMarkEmailUnread /> : <MdMarkEmailRead />}
                </button>

                <button
                  type="button"
                  className="notif-action-btn delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(notif.id);
                  }}
                  title="Remove notification"
                  aria-label="Remove notification"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsView;
