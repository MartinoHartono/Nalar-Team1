export default function Page() {
  return (
    <div>

      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <svg className="search-icon size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        <div className="filter-container">
          <svg className="filter-icon size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
        </div>
      </div>

      <div className="categories-container">
        <p>Kategori</p>
        <ul>
          <li>Semua</li>
          <li>Komunitas</li>
          <li>Kursus</li>
          <li>Magang</li>
          <li>Magang</li>
          <li>Kerja</li>
        </ul>
      </div>

      <div className="content-container">
        <p className="heading">Kegiatan yang Ditemukan</p>
        <div className="card">
          <div className="figure">
            <img />
            <div>
              <p>Judul</p>
              <p>Nama Penyelenggara</p>
            </div>
          </div>
          <p>Lokasi</p>
          <p>Due date</p>
          <p>Lorem ipsum dolor sit amet consectetur. Tortor volutpat tincidunt neque donec. Lectus congue donec id orci auctor eget vitae nisl.</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="card">

        </div>
      </div>

    </div>
  );
}