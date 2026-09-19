import { useState } from "react";
import { useSearch } from "../store/SearchContext";
import { useToast } from "./Toast";
import { useChat } from "../store/ChatContext";
import { useNotifications } from "../store/NotificationsContext";
import { FiSearch, FiBell, FiX, FiCheck, FiMessageSquare, FiArrowRight } from "react-icons/fi";
import { RiSparklingFill } from "react-icons/ri";

const Header = ({ setSelectedTab }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { showToast } = useToast();
  const { totalUnreadCount, setIsChatDrawerOpen, setIsChatDrawerMinimized } = useChat();
  const { notifications, unreadCount, markAllAsRead, markAsRead } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleClearNotifications = () => {
    markAllAsRead();
    showToast({
      type: "info",
      title: "Notifications cleared",
      message: "All recent notifications marked as read.",
    });
  };

  return (
    <header className="app-header">
      {/* Search Bar with Keyboard Tag */}
      <div className="header-search-wrapper">
        <FiSearch className="header-search-icon" aria-hidden="true" />
        <input
          id="global-search"
          type="search"
          className="header-search-input"
          placeholder="Search thoughts, tags (#react), or creators..."
          aria-label="Search posts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery ? (
          <button
            type="button"
            className="header-search-clear"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search query"
          >
            <FiX />
          </button>
        ) : (
          <span className="search-kbd-tag">⌘K</span>
        )}
      </div>

      {/* Right Actions */}
      <div className="header-actions">
        {/* Live Network Status Indicator */}
        <div className="header-status-badge">
          <span className="live-status-dot" />
          <span className="live-status-text">Network Live</span>
        </div>

        {/* Notification Bell */}
        <div className="header-notification-wrapper">
          <button
            type="button"
            className="btn-header-icon"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="View notifications"
            aria-expanded={showNotifications}
          >
            <FiBell />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>

          {showNotifications && (
            <div className="notifications-flyout" role="dialog" aria-label="Notifications">
              <div className="flyout-header">
                <h4>Notifications</h4>
                {unreadCount > 0 && (
                  <button
                    type="button"
                    className="btn-mark-read"
                    onClick={handleClearNotifications}
                  >
                    <FiCheck /> Mark all read
                  </button>
                )}
              </div>
              <div className="flyout-list">
                {notifications.length === 0 ? (
                  <div className="flyout-empty">No notifications yet</div>
                ) : (
                  notifications.slice(0, 5).map((n) => (
                    <div
                      key={n.id}
                      className={`flyout-item ${!n.read ? "unread" : ""}`}
                      onClick={() => {
                        if (!n.read) markAsRead(n.id);
                        if (setSelectedTab) {
                          setSelectedTab("Notifications");
                          setShowNotifications(false);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <span className={`flyout-item-dot ${!n.read ? "unread-glow" : ""}`} />
                      <div className="flyout-item-body">
                        <p className="flyout-item-text">
                          <strong>{n.actor.name}</strong> {n.actionText}
                        </p>
                        {n.targetSnippet && (
                          <span className="flyout-item-snippet">{n.targetSnippet}</span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flyout-footer">
                <button
                  type="button"
                  className="btn-flyout-view-all"
                  onClick={() => {
                    if (setSelectedTab) {
                      setSelectedTab("Notifications");
                    }
                    setShowNotifications(false);
                  }}
                >
                  <span>Open Notifications Center</span>
                  <FiArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Direct Messages Quick Action */}
        <button
          type="button"
          className="btn-header-icon"
          onClick={() => {
            if (setSelectedTab) {
              setSelectedTab("Messages");
            } else {
              setIsChatDrawerOpen(true);
              setIsChatDrawerMinimized(false);
            }
          }}
          aria-label="Direct Messages"
          title="Direct Messages"
        >
          <FiMessageSquare />
          {totalUnreadCount > 0 && (
            <span className="notification-badge badge-unread-message">{totalUnreadCount}</span>
          )}
        </button>

        <button
          type="button"
          className="btn-header-login"
          onClick={() => {
            if (setSelectedTab) {
              setSelectedTab("Profile");
            } else {
              showToast({
                type: "info",
                title: "Profile",
                message: "Navigating to profile view.",
              });
            }
          }}
        >
          Profile
        </button>

        <button
          type="button"
          className="btn-header-signup"
          onClick={() =>
            showToast({
              type: "success",
              title: "VIP Status",
              message: "All premium features unlocked for pair session.",
            })
          }
        >
          <RiSparklingFill style={{ marginRight: 4 }} />
          Pro Member
        </button>
      </div>
    </header>
  );
};

export default Header;