import { ToastContainer, Toast } from 'react-bootstrap'
import { AiOutlineLoading } from 'react-icons/ai'

const NotificationToast = ({ bg, title, icon, small }) => {
  return (
    <>
      <ToastContainer className="p-3" position='bottom-end'>
        <Toast bg={bg}>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title}</strong>
            <small>{small}</small>
            {icon}
          </Toast.Header>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default NotificationToast
