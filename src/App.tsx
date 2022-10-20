import { useState } from 'react';

import NotificationItem from './components/NotificationItem';
import Footer from './components/Footer';

import './App.scss';

const DUMMY_DATA = [
  {
    id: 1,
    img: 'avatar-mark-webber.webp',
    name: 'Mark Webber',
    text: 'reacted to your recent post',
    post: 'My first tournament today!',
    time: '1m ago',
    new: true,
  },
  {
    id: 2,
    img: 'avatar-angela-gray.webp',
    name: 'Angela Gray',
    text: 'followed you',
    time: '5m ago',
    new: true,
  },
  {
    id: 3,
    img: 'avatar-jacob-thompson.webp',
    name: 'Jacob Thompson',
    text: 'has joined your group',
    group: 'Chess Club',
    time: '1 day ago',
    new: true,
  },
  {
    id: 4,
    img: 'avatar-rizky-hasanuddin.webp',
    name: 'Rizky Hasanuddin',
    text: 'sent you a private message',
    private:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: '5 days ago',
    new: false,
  },
  {
    id: 5,
    img: 'avatar-kimberly-smith.webp',
    name: 'Kimberly Smith',
    text: 'commented on your picture',
    picture: 'image-chess.webp',
    time: '1 week ago',
    new: false,
  },
  {
    id: 6,
    img: 'avatar-nathan-peterson.webp',
    name: 'Nathan Peterson',
    text: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    new: false,
  },
  {
    id: 7,
    img: 'avatar-anna-kim.webp',
    name: 'Anna Kim',
    text: 'left the group',
    group: 'Chess Club',
    time: '2 weeks ago',
    new: false,
  },
];

const App: React.FC = () => {
  const [notifications, setNotifications] = useState(DUMMY_DATA);

  const markReadBtnHandler = () => {
    setNotifications(
      notifications.map((notification) => {
        if (notification.new) return { ...notification, new: false };
        return notification;
      })
    );
  };

  const newNotifications = notifications.filter(
    (notification) => notification.new
  );

  return (
    <main>
      <header>
        <h1 data-notifications={newNotifications.length}>Notifications</h1>
        <button className="mark-read" onClick={markReadBtnHandler}>
          Mark all as read
        </button>
      </header>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
      <Footer />
    </main>
  );
};

export default App;
