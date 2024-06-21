
import './Chatbox.css';
import ChatBot from 'react-simple-chatbot'

function Chatbox() {
  return (
    <ChatBot
        steps={[
          {
            id: '1',
            message: 'Chào bạn bạn cần gì với tôi, vui lòng nhập  tên?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Chào {previousValue}, chúc bạn ngày mới tốt lành!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'Vui lòng liên hệ chúng tôi qa đây?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Facebook', trigger: '7' },
              { value: 2, label: 'Zalo', trigger: '6' },
              { value: 3, label: 'Số Điện Thoại', trigger: '6' },
              { value: 4, label: 'Kết Thúc', trigger: '8' },
            ],
          },
          {
            id: '6',
            message: '082 541 5305',
            trigger: '5',
          },
          {
            id: '7',
            message: 'fb.com/dua.mun.90',
            trigger: '5',
          },
          {
            id: '8',
            message: 'Cảm ơn quý khách đã liên hệ tôi!!!',
            end: true,
          },
        ]}
        floating={true}
      />
  );
}

export default Chatbox;