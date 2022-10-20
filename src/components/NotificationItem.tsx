import './NotificationItem.scss';

type Notification = {
  id: number;
  img: string;
  name: string;
  text: string;
  time: string;
  new: boolean;
  post?: string;
  group?: string;
  private?: string;
  picture?: string;
};

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  return (
    <article className={notification.new ? 'notification new' : 'notification'}>
      <img src={notification.img} alt={notification.name} />
      <div className="notification-body">
        <div>
          <a href="#" className="notification-name">
            {notification.name}
          </a>{' '}
          {notification.text}{' '}
          {notification.group && (
            <a href="#" className="notification-group">
              {notification.group}
            </a>
          )}
          {notification.post && (
            <a href="#" className="notification-post">
              {notification.post}
            </a>
          )}
        </div>
        <div className="notification-time">{notification.time}</div>
        {notification.private && (
          <a href="#" className="notification-private">
            {notification.private}
          </a>
        )}
      </div>
      {notification.picture && (
        <a href="#" className="notification-picture">
          <img src={notification.picture} alt="Demo picture" />
        </a>
      )}
    </article>
  );
};

export default NotificationItem;
