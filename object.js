// membuat object
// 1.  Object Literal
let mhs1 = {
  nama: "Taufik Nurrahman",
  nim: "19051397019",
  email: "taufik.nurrahmanmaster980@gmail.com",
  prodi: "Manajemen Informatika",
};

let mhs2 = {
  nama: "Donal",
  nim: "19051397018",
  email: "donal.master980@gmail.com",
  prodi: "Manajemen Informatika",
};

// 2. Function Declaration
function buatObjectMahasiswa(nama, nim, email, prodi) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.prodi = prodi;
  return mhs;
}
// object
let mhs3 = buatObjectMahasiswa(
  "Imelda Sunita Ababil",
  "032131221",
  "imelda.s@gmail.com",
  "Teknik Mesin"
);

// 3. Constructor
class Mahasiswa {
  constructor(nama, nim, email, prodi) {
    // var this = {}
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.prodi = prodi;
    // return this;
  }
}

let mhs4 = new Mahasiswa(
  "Elma Catarina Davy",
  "3213123",
  "elma.catadav@gmail.com",
  "Tata Boga"
);
