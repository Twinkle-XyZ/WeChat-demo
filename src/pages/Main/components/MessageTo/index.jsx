import './index.css'
import { Avatar, List } from 'antd'

function MessageTo(props) {
  return (
    <div className="message-to">
      <List
        itemLayout="horizontal"
        dataSource={props.messageList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(0, 0, 0, 0.45)',
                      backgroundColor: 'green',
                      width: '20%',
                      height: '15%',
                      lineHeight: 'normal',
                      marginTop: '10px',
                    }}
                  >
                    {item.message}
                  </div>
                  <Avatar src={item.avatar} alt="avatar"></Avatar>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
export default MessageTo
