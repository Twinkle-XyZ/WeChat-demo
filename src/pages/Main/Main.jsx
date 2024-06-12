import { useState } from 'react'
import MessageFrom from './components/MessageFrom'
import MessageTo from './components/MessageTo'
import './index.css'
import { Button, Col } from 'antd'
import {
  SmileOutlined,
  FolderOpenOutlined,
  ScissorOutlined,
  CommentOutlined,
} from '@ant-design/icons'

const messageList = [
  {
    id: 1,
    is_from: true,
    messageFrom: 'lucy',
    messageTo: 'jack',
    message: 'hello',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 2,
    is_from: false,
    messageFrom: 'jack',
    messageTo: 'lucy',
    message: 'hi',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
    id: 3,
    is_from: true,
    messageFrom: 'lucy',
    messageTo: 'jack',
    message: 'Nice to meet to you!',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
]

function Main(props) {
  const [inputMsg, setInputMsg] = useState(messageList)
  const getMessge = () => {
    const el = document.querySelector('#other-msg')
    const msg = el.value
    setInputMsg(
      messageList.push({
        id: +new Date(),
        is_from: true,
        messageFrom: 'jack',
        messageTo: 'lucy',
        message: msg,
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      })
    )
    el.value = ''
  }
  const sendMessge = () => {
    const el = document.querySelector('#my-msg')
    const msg = el.value
    setInputMsg(
      messageList.push({
        id: +new Date(),
        is_from: false,
        messageFrom: 'lucy',
        messageTo: 'jack',
        message: msg,
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      })
    )
    el.value = ''
  }
  return (
    <div className="main">
      <div className="title">张三</div>
      <div className="content">
        {messageList.map((message, index) =>
          message.is_from ? (
            <Col span={8}>
              <MessageFrom
                key={message.is}
                avatar={message.avatar}
                message={message.message}
                messageList={[message]}
              ></MessageFrom>
            </Col>
          ) : (
            <Col span={8} offset={16}>
              <MessageTo
                key={message.is}
                avatar={message.avatar}
                message={message.message}
                messageList={[message]}
              ></MessageTo>
            </Col>
          )
        )}
      </div>
      <div className="send-message">
        <div className="handle">
          <SmileOutlined />
          <FolderOpenOutlined />
          <ScissorOutlined />
          <CommentOutlined />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Col span={8}>
            <div className="message">
              <textarea name="" id="other-msg" cols="65"></textarea>
            </div>
            <Button size="small" onClick={getMessge}>
              发送
            </Button>
          </Col>
          <div style={{ borderLeft: '1px solid #c3b9b9' }}></div>
          <Col span={8}>
            <div className="message">
              <textarea name="" id="my-msg" cols="65"></textarea>
            </div>
            <Button size="small" onClick={sendMessge}>
              发送
            </Button>
          </Col>
        </div>
      </div>
    </div>
  )
}
export default Main
