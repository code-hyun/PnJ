import React from "react";
import InputCommentComponent from "./InputCommentComponent";

const ReplyComponent = ({
  showReply,
  hideReply,
  StBtn,
  StImg,
  replies,
  formatDateTime,
}) => {
  /* 
    Post 작성자의 id와 댓글 작성자의 id를 매칭하는 로직 필요 
    적절한 데이터 값을 받아오면 54번째 줄 아래와 같이 수정 필요
    reply.userInfo.id === Post.작성자id && (별표시)
    */
  const isAuthor = true;
  const type = "reply";

  const replyCallback = () => {
    hideReply();
  };

  return (
    <div className="pl-[41px]">
      <div>
        <ul>
          {replies.map((reply, i) => (
            <li
              className="py-[12px] first:pt-[12px] border_secondary pl-[10px] first:border-t-0"
              key={reply.id}
            >
              <div className="flex gap-[10px]">
                <div className="shrink-0">
                  <div>
                    <button
                      aria-label="profile image"
                      className="relative flex h-full w-full items-center justify-center rounded-full"
                      type="button"
                      style={StBtn}
                    >
                      <img
                        alt="뉴크로셰"
                        sizes="(max-width: 240px) 100vw, 240px"
                        srcSet=""
                        src=""
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-full"
                        loading="lazy"
                        style={StImg}
                      />
                      <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-full border"></div>
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[4px]">
                      <div className="content_primary font_label_bold_lg">
                        {reply.User.name}
                      </div>
                      {isAuthor && (
                        <div
                          className="surface_accent inline-flex h-[14px] w-[14px] items-center justify-center rounded-[4px] p-[2px]"
                          data-testid="creator-badge"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_primary_inverse h-[14px] w-[14px]"
                          >
                            <path d="M5.567 1.748a.5.5 0 0 1 .866 0L7.499 3.59a.5.5 0 0 0 .329.238l2.082.445a.5.5 0 0 1 .268.823L8.754 6.681a.5.5 0 0 0-.125.386l.22 2.118a.5.5 0 0 1-.7.51L6.203 8.83a.5.5 0 0 0-.406 0l-1.946.864a.5.5 0 0 1-.7-.509l.22-2.118a.5.5 0 0 0-.125-.386L1.822 5.097a.5.5 0 0 1 .268-.823l2.082-.445a.5.5 0 0 0 .329-.238l1.066-1.843Z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    {isAuthor && (
                      <button
                        aria-label="remove comment button"
                        type="button"
                        value="db7a9a37-cf74-47d5-99a1-8b50fccec0c7"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="content_quaternary_inverse h-[20px] w-[20px]"
                        >
                          <path d="M5.707 5.707a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414l-4.95-4.95 4.95-4.95a1 1 0 1 0-1.414-1.414l-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0Z"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="h-[5px]"></div>
                  <div className="font_label_regular_lg whitespace-pre-wrap break-all content_secondary">
                    <p>
                      <span>{reply.content}</span>
                    </p>
                  </div>
                  <div className="h-[8px]"></div>
                  <div className="flex gap-[13px]">
                    <div className="flex items-center">
                      <span className="content_quaternary font_label_regular_sm">
                        {formatDateTime(reply.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {showReply && (
          <div className="reply-input-section">
            <InputCommentComponent type={type} replyCallback={replyCallback} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReplyComponent;
