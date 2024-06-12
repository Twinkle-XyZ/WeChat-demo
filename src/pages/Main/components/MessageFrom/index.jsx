import { Avatar, List } from 'antd'
import './index.css'

function MessageFrom(props) {
  return (
    <div className="message-from">
      <List
        itemLayout="horizontal"
        dataSource={props.messageList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} alt="avatar" />}
              title={
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      color: 'rgba(0, 0, 0, 0.45)',
                      backgroundColor: '#f5f5f5',
                      height: '15%',
                      lineHeight: 'normal',
                    }}
                  >
                    {item.message}
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
export default MessageFrom
