export default function Media1() {
    return (
        <div>

            {/* HEADER */}
            <div className="flex w-103 h-13.25 gap-77 bg-red-400 ">
                <div className="flex size-6.75 mt-2.75 mb-3.75 ml-6.25 py-1.19525 px-2.17975 bg-blue-600 justify-center items-center shrink-0 aspect-square">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                        <path d="M9.31537 0.247129C9.61492 0.546679 9.64215 1.01543 9.39707 1.34574L9.31537 1.44037L2.03737 8.71875L9.31537 15.9971C9.61492 16.2967 9.64215 16.7654 9.39707 17.0957L9.31537 17.1904C9.01582 17.4899 8.54707 17.5172 8.21676 17.2721L8.12213 17.1904L0.247129 9.31537C-0.0524208 9.01582 -0.079653 8.54707 0.165433 8.21676L0.247129 8.12213L8.12213 0.247129C8.45163 -0.0823762 8.98587 -0.0823762 9.31537 0.247129Z" fill="black" />
                    </svg>
                </div>

                <div className="flex size-6.75 mt-2.75 mb-3.75 mr-6.25 py-1.19525 px-2.17975 bg-blue-600 justify-center items-center shrink-0 aspect-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={23}
                        height={24}
                        viewBox="0 0 23 24"
                        fill="none"
                    >
                        <mask
                            id="mask0_129_4059"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={22}
                            height={22}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H21.9114V21.9116H0V0Z"
                                fill="white"
                            />
                        </mask>
                        <g mask="url(#mask0_129_4059)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.9561 1.6875C5.84526 1.6875 1.68726 5.84437 1.68726 10.9552C1.68726 16.0661 5.84526 20.2241 10.9561 20.2241C16.0659 20.2241 20.2239 16.0661 20.2239 10.9552C20.2239 5.84437 16.0659 1.6875 10.9561 1.6875M10.9561 21.9116C4.91488 21.9116 -0.000244141 16.9965 -0.000244141 10.9552C-0.000244141 4.914 4.91488 0 10.9561 0C16.9974 0 21.9114 4.914 21.9114 10.9552C21.9114 16.9965 16.9974 21.9116 10.9561 21.9116"
                                fill="black"
                            />
                        </g>
                        <mask
                            id="mask1_129_4059"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={17}
                            y={17}
                            width={6}
                            height={7}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.145 17.6703H22.7971V23.3119H17.145V17.6703Z"
                                fill="white"
                            />
                        </mask>
                        <g mask="url(#mask1_129_4059)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.9536 23.3119C21.7387 23.3119 21.5227 23.2298 21.3573 23.0655L17.3928 19.1123C17.0632 18.7827 17.0621 18.2483 17.3917 17.9187C17.7202 17.5868 18.2546 17.589 18.5853 17.9164L22.5498 21.8708C22.8794 22.2004 22.8806 22.7337 22.5509 23.0633C22.3867 23.2298 22.1696 23.3119 21.9536 23.3119"
                                fill="black"
                            />
                        </g>
                    </svg>
                </div>
            </div>

            {/* CONTENT HEADER */}
            <div>
                <div className="flex flex-col w-103 h-60 pl-6.25 pt-33 pb-7.25 pr-7 justify-center shrink-0 bg-lime-600">
                    <div className="inline-flex w-19.25 h-8 py-2 px-3 flex-col justify-center items-center gap-1.5 rounded-2xl border border-solid border-(--primary)">
                        <p className="label-small text-(--primary)">Kategori</p>
                    </div>
                    <div className="flex justify-between mt-1.75">
                        <div>
                            <div className="mb-1.25">
                                <p className="font-judul">Judul</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="font-informasi">Nama Penyelenggara</p>
                                <p className="font-informasi">Lokasi</p>
                            </div>
                        </div>
                        <div className="w-6 h-6 my-auto ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M19 21L12 17L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                                    stroke="black"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT CONTAINER */}
            <div className="flex flex-col pl-7.25 bg-[tomato]">
                <div className="flex w-88.5 h-9 mt-4 items-center shrink-0 gap-[-1.5px]">
                    <div className="flex py-2.5 px-5 flex-col justify-center items-center gap-2.5 flex-[1_0_0] self-stretch bg-(--primary-subtle) rounded-[66px_0_0_66px] border-[1.5px] border-solid border-(--primary)">
                        <p className="label-medium text-(--primary)">Deskripsi</p>
                    </div>
                    <div className="flex py-2.5 px-5 flex-col justify-center items-center gap-2.5 flex-[1_0_0] self-stretch border-[1.5px] border-solid border-(--primary)">
                        <p className="label-medium text-(--primary)">Media</p>
                    </div>
                    <div className="flex py-2.5 px-5 flex-col justify-center items-center gap-2.5 flex-[1_0_0] self-stretch rounded-[0_66px_66px_0] border-[1.5px] border-solid border-(--primary)">
                        <p className="label-medium text-(--primary)">Q&A</p>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>

            {/* BUTTON */}

            <button className="flex sticky bottom-[18px] w-[370px] m-auto py-4 px-5 flex-col justify-center items-center gap-1.5 rounded-2xl bg-(--primary)">
                <p className="label-large text-white">Daftar Sekarang</p>
            </button>

        </div>
    );
}