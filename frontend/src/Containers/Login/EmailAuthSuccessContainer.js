import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../../Components/Login/Modal";
import { useUser } from "../../Context/UserContext";
const EmailAuthSuccessComponent = ({ userEmail }) => {
  return (
    <>
      <section className="mx-auto flex h-full w-full max-w-[400px] flex-col justify-start lg:w-[400px]">
        <div className="mt-[62px] flex flex-col items-center justify-center lg:mt-[116px]">
          <svg
            viewBox="0 0 92 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[89px] w-[92px]"
          >
            <path
              d="M32.184 6.766c-7.26 8.91-16.463 17.367-21.765 27.61-.772 18.412-.938 34.915-.918 47.957.006 3.3 2.661 5.944 5.96 5.84 16.087-.512 50.737-2.493 64.31-3.287 3.164-.185 5.618-2.78 5.59-5.949-.114-13.396-.739-46.356-4.094-49.712-7.94-7.94-18.5-14.94-27.721-21.227-3.178-2.167-6.602-5.04-10.166-6.449-4.893-1.935-8.237 1.586-11.196 5.217Z"
              fill="#9D8DFF"
            ></path>
            <path
              d="M44.405 60.557c.749 0 1.094.443 2.931-.875C51.999 56.5 73.499 42.5 77.619 38.212c0-6.475.313-9.212.313-9.712 0 0-19.431 0-60.432.758.5 4.554 1.363 14.047 1.559 15.884C25.499 50.5 38.499 56 44.405 60.557Z"
              fill="#fff"
            ></path>
            <path
              d="M80.483 38.238a1 1 0 0 0-1.268-1.547c-3.573 2.928-7.38 5.506-11.257 8.042-.803.525-1.61 1.048-2.418 1.573l-.006.004c-3.081 2-6.187 4.017-9.195 6.18-.494.354-1.214.9-2.076 1.552l-.001.001c-2.184 1.654-5.277 3.995-7.895 5.672a.928.928 0 0 0-.026.018c-.54.038-1.09.106-1.649.205a.997.997 0 0 0-.232-.213c-4.164-2.772-8.849-5.513-13.522-8.248-.966-.566-1.932-1.131-2.892-1.696-5.627-3.31-11.081-6.621-15.533-10.019a1 1 0 1 0-1.213 1.59c4.558 3.48 10.109 6.845 15.732 10.153.97.57 1.942 1.14 2.912 1.707 4.219 2.47 8.397 4.915 12.195 7.38l-.05.017c-3.912 1.308-8.715 3.204-13.12 5.537-4.38 2.32-8.477 5.13-10.863 8.311a1 1 0 1 0 1.6 1.2c2.115-2.819 5.891-5.462 10.199-7.744 4.282-2.268 8.978-4.123 12.819-5.408 2.715-.908 5.067-.999 7.283-.537 2.235.465 4.386 1.503 6.683 2.933 1.711 1.065 3.457 2.317 5.361 3.683.668.479 1.355.971 2.067 1.475 2.724 1.927 5.763 3.976 9.316 5.88a1 1 0 1 0 .945-1.763c-3.447-1.847-6.408-3.841-9.106-5.75-.683-.483-1.352-.963-2.01-1.434-1.922-1.38-3.745-2.686-5.516-3.79-2.39-1.487-4.77-2.659-7.332-3.192a15.16 15.16 0 0 0-.71-.13c2.103-1.47 4.272-3.112 5.873-4.323a118.85 118.85 0 0 1 1.928-1.443c2.966-2.133 6.02-4.116 9.096-6.113l.003-.002c.815-.529 1.631-1.059 2.448-1.593 3.888-2.542 7.77-5.168 11.43-8.168Z"
              fill="#000"
            ></path>
            <path
              d="M55.95 39.53a1 1 0 1 0-.918-1.778c-.364.188-.656.452-.873.663-.114.111-.199.198-.274.275-.099.102-.181.186-.29.284-.737.665-1.497 1.304-2.273 1.956l-.272.228a64.21 64.21 0 0 0-2.595 2.27 49.01 49.01 0 0 0-2.788 2.81 109.779 109.779 0 0 1-4.82-3.878 1 1 0 0 0-1.295 1.525 110.81 110.81 0 0 0 5.164 4.14v.001c.098.073.237.177.381.257.154.085.418.203.756.176.34-.026.587-.184.736-.303a3.12 3.12 0 0 0 .37-.365 45.853 45.853 0 0 1 2.863-2.903 62.46 62.46 0 0 1 2.515-2.2l.273-.228c.772-.649 1.56-1.31 2.325-2.001.141-.128.314-.303.452-.443l.168-.168c.182-.178.302-.27.394-.318Z"
              fill="#000"
            ></path>
          </svg>
          <h1 className="content_primary font_headline_bold_lg mt-[40px] lg:mt-[25px]">
            이메일 인증 완료
          </h1>
          <p className="content_primary font_body_regular_md keep-all mt-[16px] text-center">
            {userEmail} 이메일 인증이 완료되었습니다.
          </p>
        </div>
        <div className="mx-[32px] mt-[98px]">
          <a href="/">
            <button
              aria-label="button"
              className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
              type="button"
            >
              메인으로
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

const EmailAuthSuccessContainer = () => {
  const { user } = useUser();
  /*
  const nav = useNavigate()
  const {token} = useParams();
  const option = {
    method : 'post',
    url : 'http://localhost:4000/EmailAuthAPI', // 임시 url
    // token 값 header에 담아서 보냄
    headers:{
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}` // bearer 이부분은 좀 알아볼 필요가 있을듯
    }
  }
  const [userEmail, setUserEmail] = useState('');
  const [checkModal, setCheckModal] = useState(false);
  const [emailAuthState, setEmailAuthState] = useState();

  // http request to server
  const emailAuth = () => {
    return axios(option).then(res => {
      if(res.status === 200){
        setEmailAuthState("successEmailAuth")
        setCheckModal(false)
        setUserEmail(res.data.email)
      }else{
        setEmailAuthState("failEmailAuth")
        setCheckModal(true)
      }
    }).catch(err => {
      console.log(err)
      setEmailAuthState("failEmailAuth")
      setCheckModal(true)
    })
  }

  // **** request to server
  // useEffect(() => {
  //   emailAuth()
  // }, []) // deps를 빈배열로 한번만 작동

  // 모달창 닫기위한 함수
  const closeModal = () => {
    setCheckModal(false);
    nav('/login/email-login')
  };

  // 임시 테스트 
  useEffect(()=> {
    setUserEmail('test@example.com')
    setCheckModal(false)
    setEmailAuthState("successEmailAuth")
  },[])

  return (
    <>
    {checkModal && <Modal type={emailAuthState} modalState={checkModal} closeModal={closeModal} />}
    {emailAuthState === 'successEmailAuth' && <EmailAuthSuccessComponent userEmail={userEmail}/>}
    </>
  );
  */
  return (
    <>
      <EmailAuthSuccessComponent userEmail={user.email} />
    </>
  );
};

export default EmailAuthSuccessContainer;
