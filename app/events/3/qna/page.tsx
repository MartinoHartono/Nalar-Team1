import Link from "next/link";

export default function QnA3() {
    return (
        <div className="flex flex-col h-100dvh bg-[#F9F9F9]">

            {/* HEADER */}
            <div className="flex w-full py-3 px-6 justify-between items-center bg-[F9F9F9]">
                <div className="w-6 h-6 shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15.5307 18.9693C15.6004 19.039 15.6557 19.1217 15.6934 19.2128C15.7311 19.3038 15.7505 19.4014 15.7505 19.4999C15.7505 19.5985 15.7311 19.6961 15.6934 19.7871C15.6557 19.8781 15.6004 19.9609 15.5307 20.0306C15.461 20.1002 15.3783 20.1555 15.2873 20.1932C15.1962 20.2309 15.0986 20.2503 15.0001 20.2503C14.9016 20.2503 14.804 20.2309 14.7129 20.1932C14.6219 20.1555 14.5392 20.1002 14.4695 20.0306L6.96948 12.5306C6.89974 12.4609 6.84443 12.3782 6.80668 12.2871C6.76894 12.1961 6.74951 12.0985 6.74951 11.9999C6.74951 11.9014 6.76894 11.8038 6.80668 11.7127C6.84443 11.6217 6.89974 11.539 6.96948 11.4693L14.4695 3.9693C14.6102 3.82857 14.8011 3.74951 15.0001 3.74951C15.1991 3.74951 15.39 3.82857 15.5307 3.9693C15.6715 4.11003 15.7505 4.30091 15.7505 4.49993C15.7505 4.69895 15.6715 4.88982 15.5307 5.03055L8.56041 11.9999L15.5307 18.9693Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                </div>
                <div className="w-6 h-6 shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M21.5306 20.4696L16.8365 15.7765C18.1971 14.1431 18.8755 12.048 18.7307 9.92715C18.5859 7.80629 17.629 5.82289 16.0591 4.38956C14.4892 2.95623 12.4271 2.18333 10.3019 2.23163C8.17663 2.27993 6.15181 3.14571 4.64864 4.64888C3.14547 6.15205 2.27968 8.17687 2.23138 10.3021C2.18308 12.4274 2.95599 14.4894 4.38932 16.0593C5.82265 17.6293 7.80604 18.5861 9.92691 18.7309C12.0478 18.8757 14.1428 18.1973 15.7762 16.8368L20.4693 21.5308C20.539 21.6005 20.6218 21.6558 20.7128 21.6935C20.8038 21.7312 20.9014 21.7506 21 21.7506C21.0985 21.7506 21.1961 21.7312 21.2871 21.6935C21.3782 21.6558 21.4609 21.6005 21.5306 21.5308C21.6003 21.4612 21.6556 21.3784 21.6933 21.2874C21.731 21.1963 21.7504 21.0988 21.7504 21.0002C21.7504 20.9017 21.731 20.8041 21.6933 20.713C21.6556 20.622 21.6003 20.5393 21.5306 20.4696ZM3.74997 10.5002C3.74997 9.16519 4.14585 7.86015 4.88755 6.75011C5.62925 5.64008 6.68346 4.77492 7.91686 4.26403C9.15026 3.75314 10.5075 3.61946 11.8168 3.87991C13.1262 4.14036 14.3289 4.78324 15.2729 5.72724C16.2169 6.67125 16.8598 7.87398 17.1203 9.18335C17.3807 10.4927 17.2471 11.8499 16.7362 13.0833C16.2253 14.3167 15.3601 15.3709 14.2501 16.1126C13.14 16.8543 11.835 17.2502 10.5 17.2502C8.71037 17.2482 6.99463 16.5364 5.72919 15.271C4.46375 14.0056 3.75196 12.2898 3.74997 10.5002Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex w-[89%] m-auto flex-col items-center gap-6">

                {/* CONTENT HEADER */}
                <div className="flex h-[226px] p-6 flex-col justify-end items-start gap-2 self-stretch rounded-[18px] bg-[rgb(212,205,222)]">
                    {/* <div className="w-[69%] h-[145px] aspect-269/145 bg-[url('/public/next.svg')] bg-[lightgray] bg-center bg-cover bg-no-repeat blur-md"></div> */}
                    <div className="flex py-2 px-3 flex-col justify-center items-center gap-1.5 rounded-2xl bg-[#2C2C2C]">
                        <p className="caption text-[#FEFEFE]">Lomba</p>
                    </div>
                    <div className="flex items-end gap-2 self-stretch">
                        <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
                            <p className="font-judul callout">Transporter</p>
                            <div className="flex items-center gap-2">
                                <p className="footnote text-[#2C2C2C]">Technoday</p>
                                <div className="w-1 h-1 aspect-square fill-[#2C2C2C]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={4}
                                        height={4}
                                        viewBox="0 0 4 4"
                                        fill="none"
                                    >
                                        <circle cx={2} cy={2} r={2} fill="#2C2C2C" />
                                    </svg>
                                </div>
                                <p className="footnote text-[#2C2C2C]">Gedung LPPP UNNES</p>
                            </div>
                        </div>
                        <div className="w-6 h-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M17.25 3H6.75C6.35218 3 5.97064 3.15804 5.68934 3.43934C5.40804 3.72064 5.25 4.10218 5.25 4.5V21C5.25007 21.1338 5.28595 21.2652 5.35393 21.3805C5.42191 21.4958 5.5195 21.5908 5.63659 21.6557C5.75367 21.7206 5.88598 21.7529 6.01978 21.7494C6.15358 21.7458 6.284 21.7066 6.3975 21.6356L12 18.1341L17.6034 21.6356C17.7169 21.7063 17.8472 21.7454 17.9809 21.7488C18.1146 21.7522 18.2467 21.7198 18.3636 21.655C18.4806 21.5902 18.5781 21.4953 18.646 21.3801C18.7139 21.2649 18.7498 21.1337 18.75 21V4.5C18.75 4.10218 18.592 3.72064 18.3107 3.43934C18.0294 3.15804 17.6478 3 17.25 3ZM17.25 19.6472L12.3966 16.6144C12.2774 16.5399 12.1396 16.5004 11.9991 16.5004C11.8585 16.5004 11.7208 16.5399 11.6016 16.6144L6.75 19.6472V4.5H17.25V19.6472Z"
                                    fill="#2C2C2C"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* TOOGLE */}
                <div className="flex p-1.5 justify-between items-center self-stretch rounded-[99px] bg-[#F2F2F2]">
                        <Link href="/events/3">
                            <div className="flex py-3 px-5 flex-col justify-center items-center gap-1.5 rounded-3xl">
                                <p className="footnote text-[#2C2C2C]">Deskripsi</p>
                            </div>
                        </Link>
                        <Link href="/events/3/media">
                            <div className="flex w-[26dvw] max-w-[114px] py-3 px-5 flex-col justify-center items-center gap-1.5 rounded-3xl bg-[#2C2C2C]">
                                <p className="footnote text-[#FEFEFE]">Media</p>
                            </div>
                        </Link>
                        <Link href="/events/3/qna">
                            <div className="flex w-[26dvw] max-w-[114px] py-3 px-5 flex-col justify-center items-center gap-1.5 rounded-3xl">
                                <p className="footnote text-[#2C2C2C]">QnA</p>
                            </div>
                        </Link>
                    </div>

                {/* CARDSLIDE */}
                <div></div>

            </div>

            {/* BUTTON */}
            <div className="fixed bottom-[34px] left-1/2 -translate-x-1/2 flex w-[89%] h-[54px] max-w-[392px] min-w-[108px] py-2.5 px-6 justify-center items-center gap-2.5 shrink-0 rounded-[99px] bg-[linear-gradient(90deg,var(--Colors-Peach,#FCA)_0%,var(--Colors-Orange,#FD825F)_96.36%)] shadow-[0_4px_12px_0_rgba(0,0,0,0.20)]">
                <p className="callout text-[#FEFEFE]">Daftar Sekarang</p>
            </div>

        </div>
    );
}