import Swal from 'sweetalert2';

export class NotifyService {
  emptyQrcField() {
    throw new Error('Method not implemented.');
  }
  showLoading = () => {
    Swal.fire({
      title: 'Memuat',
      html: 'Harap Tunggu...',
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };
  emptyInputField = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Perhatian',
      html: 'Harap Lengkapi Data Yang Masih Kosong',
      confirmButtonText: `<span id="btn-confirm">OK</span>`,
    });
  };

  confirmationReset = () => {
    return new Promise((resolve) => {
      Swal.fire({
        title: 'Apakah Anda Yakin ?',
        text: 'Data Yang Anda Inputkan Akan Dibersihkan',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fbbf24',
        cancelButtonColor: '#d33',
        confirmButtonText: `<span id="btn-confirm">Saya Yakin !</span>`,
        cancelButtonText: `<span id="btn-cancel">Batalkan</span>`,
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  };

  confirmationCreate = () => {
    return new Promise((resolve) => {
      Swal.fire({
        title: 'Apakah Anda Yakin ?',
        text: 'Data Yang Anda Masukan Akan Disimpan',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fbbf24',
        cancelButtonColor: '#d33',
        confirmButtonText: `<span id="btn-confirm">Saya Yakin !</span>`,
        cancelButtonText: `<span id="btn-cancel">Batalkan</span>`,
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  };

  confirmationDelete = () => {
    return new Promise((resolve) => {
      Swal.fire({
        // confirmation before data deleted
        title: 'Apakah Anda Yakin ?',
        text: 'Data Anda Akan Dihapus !!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fbbf24',
        cancelButtonColor: '#d33',
        confirmButtonText: `<span id="btn-confirm">Saya Yakin !</span>`,
        cancelButtonText: `<span id="btn-cancel">Batalkan</span>`,
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  };

  confirmationUpdate = () => {
    return new Promise((resolve) => {
      Swal.fire({
        title: 'Apakah Anda Yakin ?',
        text: 'Data Anda Sebelumnya akan Diperbaharui',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fbbf24',
        cancelButtonColor: '#d33',
        confirmButtonText: `<span id="btn-confirm">Saya Yakin !</span>`,
        cancelButtonText: `<span id="btn-cancel">Batalkan</span>`,
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  };

  successCreate = () => {
    Swal.fire({
      title: 'Sukses',
      text: 'Data Anda Berhasil Terupload',
      icon: 'success',
    });
  };

  successUpdate = () => {
    Swal.fire({
      title: 'Sukses',
      text: 'Data Anda Berhasil Terupdate',
      icon: 'success',
    });
  };
}
