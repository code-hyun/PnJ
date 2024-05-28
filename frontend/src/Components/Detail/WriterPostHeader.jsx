import React from 'react';

const WriterPostHeader = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    const StTemp = {
        width: '0%',
        height: '3px',
    };

    return (
        <div className="sticky top-0 z-10">
            <nav className="sticky top-0 left-0 surface_primary_inverse z-20 flex h-[56px] w-full shrink-0 items-center justify-between px-[16px] lg:h-[58px] lg:px-[32px]">
                <div>
                    <div className="flex items-center">
                        <a href="/">
                            <svg
                                viewBox="0 0 32 16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_primary_inverse w-[31px] lg:hidden"
                            >
                                <path d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 115 16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_primary_inverse hidden w-[96px] lg:block"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M98.073 1.695a1.695 1.695 0 1 1 1.695 1.695 1.687 1.687 0 0 1-1.695-1.695Zm2.967 2.863v11.23h-2.539V4.556l2.539.002Zm-7.842 11.23h2.544V.102h-2.544v5.725h-.042a4.791 4.791 0 0 0-3.517-1.483c-2.925 0-5.214 2.332-5.214 5.828 0 3.496 2.29 5.827 5.214 5.827a4.79 4.79 0 0 0 3.517-1.483h.042v1.272Zm-3.054-2.162c-1.737 0-3.093-1.4-3.093-3.454 0-2.056 1.355-3.455 3.093-3.455 1.739 0 3.094 1.4 3.094 3.455s-1.356 3.454-3.094 3.454Zm-45.282 2.373c-3.709 0-6.167-1.867-6.336-4.978h2.925c.317 1.906 1.653 2.584 3.327 2.584 1.843 0 2.986-.847 2.986-1.927 0-1.376-1.604-1.75-3.542-2.202l-.462-.108C41.28 8.774 38.78 7.8 38.78 4.81c0-2.204 1.887-4.492 5.531-4.492 3.221 0 5.68 1.908 6.04 4.768h-2.884c-.296-1.292-1.207-2.374-3.094-2.374-1.674 0-2.839.827-2.839 1.93 0 1.49 1.468 1.83 3.482 2.298l.587.138c2.331.551 4.916 1.42 4.916 4.344 0 2.86-2.31 4.576-5.658 4.576Zm11.59-9.155v5.02c0 1.526.933 1.759 1.675 1.759.405.003.805-.091 1.166-.275v2.288c-.46.18-.948.272-1.441.276-2.14 0-3.942-1.06-3.942-4.108v-4.96h-2.328V4.556h2.33V1.32h2.543v3.236h2.843v2.288h-2.845Zm14.814 5.532h-2.739c-.516 1.113-1.329 1.377-2.516 1.377-1.441 0-2.712-.954-2.903-2.755h8.304c0-4.539-2.648-6.654-5.615-6.654-3.052 0-5.446 2.332-5.446 5.828 0 3.496 2.4 5.827 5.636 5.827 2.268 0 4.532-1.048 5.279-3.623Zm-2.67-3.328h-5.51c.277-1.415 1.42-2.437 2.756-2.437 1.335 0 2.479 1.018 2.754 2.437Zm14.135 6.74h-2.5a17.563 17.563 0 0 1-.063-1.442h-.044C79.107 15.597 77.837 16 76.564 16c-2.246 0-3.877-1.334-3.877-3.496 0-1.674 1.08-3.263 4.068-3.391 1.357-.064 3.327-.085 3.327-.085v-.571c0-1.378-1.144-2.035-2.331-2.035-1.188 0-2.097.657-2.24 1.695h-2.634c.125-2.395 2.098-3.772 4.895-3.772 2.819 0 4.854 1.76 4.854 4.408v3.39c0 2.035.02 2.946.105 3.645Zm-5.234-4.832c-1.59.085-2.183.678-2.183 1.505 0 .953.763 1.44 1.844 1.44 1.59 0 2.924-.975 2.924-2.628v-.423s-1.419.043-2.585.106Zm31.193-6.57c-3.242 0-5.742 2.522-5.742 5.807 0 3.289 2.498 5.805 5.741 5.805 3.243 0 5.744-2.521 5.744-5.805 0-3.285-2.501-5.808-5.743-5.808Zm.004 2.373c1.777 0 3.112 1.42 3.112 3.434 0 2.012-1.336 3.432-3.112 3.432s-3.111-1.419-3.111-3.432c0-2.014 1.334-3.434 3.111-3.434Z"
                                ></path>
                                <path d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"></path>
                            </svg>
                        </a>
                        <div className="content_primary_inverse font_body_regular_md mx-[10px]">|</div>
                        <div className="content_primary_inverse font_body_regular_lg flex items-center">
                            <span>Creator Center</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div className="relative">
                        <button className="surface_primary_active relative h-[32px] w-[32px] rounded-full">
                            <img
                                alt="프로필 이미지"
                                sizes="10vw"
                                srcset="
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=64&amp;q=75     64w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=96&amp;q=75     96w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=128&amp;q=75   128w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=256&amp;q=75   256w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=384&amp;q=75   384w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
                "
                                src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
                                decoding="async"
                                data-nimg="fill"
                                className="rounded-full"
                                loading="lazy"
                                style={StImg}
                            />
                        </button>
                    </div>
                </div>
            </nav>
            <header className="surface_primary border_primary flex h-[68px] items-center border-b">
                <div className="mx-auto flex min-w-desktop-grid items-center justify-between">
                    <div className="content_primary flex items-center">
                        <button className="surface_tertiary mr-[16px] flex h-[32px] w-[32px] items-center justify-center rounded-full">
                            <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" className="h-[16px] w-[16px]">
                                <path d="M13.833 8a.667.667 0 0 0-.666-.667H5.72L8.973 4.08a.667.667 0 1 0-.943-.943L3.167 8l4.863 4.863a.665.665 0 0 0 .94-.94L5.72 8.667h7.447A.667.667 0 0 0 13.833 8Z"></path>
                            </svg>
                        </button>
                        <h1 className="font_title_bold_lg">포스트 작성하기</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-[12px]">
                            <button
                                aria-label="button"
                                className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                                type="button"
                                disabled=""
                            >
                                임시저장
                            </button>
                        </div>
                        <div>
                            <button
                                aria-label="button"
                                className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
                                disabled=""
                                type="button"
                            >
                                게시
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="surface_accent translate-x-0 animate-slideLeftToRight" style={StTemp}></div>
        </div>
    );
};

export default WriterPostHeader;
