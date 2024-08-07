import React from "react";
import { useNavigate } from "react-router-dom";

const ExpiredLinkPage = () => {
  const nav = useNavigate();

  const moveToMainPage = () => nav("/");

  const moveToFindPasswordPage = () => nav("/login/find-password");

  return (
    <section className="relative mx-auto flex w-full max-w-[400px] flex-col justify-start">
      <div className="mt-[62px] flex flex-col items-center">
        <svg
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[88px] w-[88px]"
        >
          <path
            d="M6.96 33.326a13.086 13.086 0 0 1 5.844-9.564l29.803-19.48a13.987 13.987 0 0 1 16.384.775l22.085 17.616a13.102 13.102 0 0 1 4.85 11.636l-4.94 46.198A5.018 5.018 0 0 1 76.003 85H7.011c-2.979 0-5.3-2.594-4.982-5.567l4.93-46.107Z"
            fill="#9D8DFF"
          ></path>
          <path
            d="M44.351 59.504S11.782 43.074 11 42.004c15.483.296 11.748-12.448 9.71-16.33-.262-.403-.52-.833-.774-1.292-.14-.251.245.285.774 1.292 7.538 11.605 18.01.36 26.637-9.91-1.19 8.265 10.69 17.764 22.63 8.622-.633 4.419-7.477 18.114 5.959 17.618 0 0-15.436 9.996-31.585 17.5Z"
            fill="#fff"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.091 32.147a1.5 1.5 0 0 1 .702 2.002c-1.658 3.451-2.958 6.799-3.917 10.441a1.5 1.5 0 0 1-2.901-.763c1.016-3.861 2.39-7.389 4.114-10.977a1.5 1.5 0 0 1 2.002-.703ZM43.153 48.178a1.5 1.5 0 0 1 1.203 1.747l-1.474-.271 1.474.271v.005l-.002.01-.006.032-.023.118-.089.431c-.077.367-.193.885-.346 1.496a1.5 1.5 0 1 1-2.91-.727 39.95 39.95 0 0 0 .42-1.88l.005-.023.001-.005m1.747-1.203a1.5 1.5 0 0 0-1.747 1.203l1.747-1.203Z"
            fill="#000"
          ></path>
          <path
            d="M76.287 42.359a1 1 0 0 0-1.267-1.547c-2.78 2.277-6.638 4.711-10.594 7.136l-1.783 1.089c-3.335 2.035-6.62 4.04-9.171 5.873-.217.157-.658.37-1.349.647-.489.197-1.045.405-1.654.631l-.002.001-.688.257c-1.715.644-3.73 1.436-5.273 2.42-.375.028-.755.074-1.141.14a1.01 1.01 0 0 0-.143-.116c-3.564-2.371-8.815-5.115-14.107-7.879l-1.853-.969c-5.949-3.115-11.693-6.2-15.15-8.838a1 1 0 1 0-1.213 1.59c3.62 2.763 9.534 5.93 15.435 9.02l1.843.964c4.674 2.441 9.215 4.814 12.6 6.92-3.17 1.14-7.95 3.753-13.022 6.719-3.156 1.846-6.481 3.862-9.65 5.784-2.154 1.306-4.237 2.569-6.146 3.705a1 1 0 1 0 1.023 1.718 893.23 893.23 0 0 0 6.19-3.731c3.152-1.912 6.44-3.906 9.593-5.75 5.325-3.113 10.114-5.707 13.043-6.686 2.098-.703 3.907-.77 5.608-.416 1.72.358 3.386 1.159 5.18 2.276 1.337.832 2.7 1.81 4.193 2.88.526.377 1.067.766 1.63 1.164 2.142 1.515 4.537 3.13 7.339 4.632a1 1 0 1 0 .944-1.763c-2.695-1.444-5.012-3.005-7.128-4.502-.533-.377-1.057-.752-1.572-1.122-1.511-1.084-2.952-2.117-4.35-2.987-1.745-1.087-3.497-1.968-5.37-2.432.72-.305 1.468-.594 2.2-.868l.661-.248c.618-.23 1.212-.45 1.727-.658.675-.272 1.33-.563 1.77-.879 2.483-1.785 5.69-3.742 9.03-5.78l.001-.001 1.8-1.1c3.94-2.414 7.914-4.916 10.816-7.294Z"
            fill="#000"
          ></path>
        </svg>
        <h1 className="content_primary font_headline_bold_lg mt-[40px] text-center">
          만료된 링크입니다.
        </h1>
        <p className="content_primary font_body_regular_md keep-all mt-[16px] text-center">
          비밀번호 찾기 링크를 다시 발송하여 재설정 해주세요.
        </p>
      </div>
      <div className="mx-[32px] mt-[136px] lg:mt-[97px]">
        <button
          aria-label="button"
          className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
          type="button"
          onClick={moveToFindPasswordPage}
        >
          비밀번호 재설정
        </button>
        <div className="mt-[12px]">
          <button
            aria-label="button"
            className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
            type="button"
            onClick={moveToMainPage}
          >
            메인으로
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpiredLinkPage;
