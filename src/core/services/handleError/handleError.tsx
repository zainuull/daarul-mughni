import Swal from 'sweetalert2';

export const HandleError = (err: any) => {
  const errRes = err.response;
  const message = (errRes && errRes?.data.message) || err.statusText || err.message || '';
  const status = err.status || errRes?.data.statusCode || errRes?.status || err['statusCode'] || 0;

  switch (status) {
    case 400:
      if (typeof message == 'string') {
        switch (message) {
          case 'Nama atau NO.Urut Sudah Ada':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Nama atau No Urut Sudah Ada',
            });
            break;
          case 'nama atau nomor urut sudah di gunakan':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Nama atau No Urut Sudah Ada',
            });
            break;
          case 'Nama Sudah Ada':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Nama Sudah Ada',
            });
            break;
          case 'category must fill':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Kategori wajib di isi',
            });
            break;
          case 'Witness already added':
          case 'Witness Coordinator already added':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'No KTP sudah terdaftar',
            });
            break;
          case 'Sequence Sudah Ada':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Mohon Masukan No. Urut Yang Berbeda',
            });
            break;
          case 'Nomor urut already exist':
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Mohon Masukan No. Urut Yang Berbeda',
            });
            break;
          default:
            Swal.fire({
              icon: 'error',
              title: 'Error !',
              text: 'Terdapat kesalahan',
              footer: `err: (${status}) ${message || ''}`,
            });
            break;
        }
      } else {
        message.forEach((el: string) => {
          switch (el) {
            case 'description should not be empty':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Deskripsi tidak boleh kosong',
              });
              break;
            case 'name should not be empty':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Nama wajib di isi',
              });
              break;
            case 'id_card must be longer than or equal to 16 characters"':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'No KTP harus 16 karakter',
              });
              break;
            case 'id_card should not be empty':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'No KTP tidak boleh kosong',
              });
              break;
            case 'name must match ^[a-zA-Z-,]+(s{0,1}[a-zA-Z-, ])*$ regular expression':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Nama tidak boleh terdapat simbol',
              });
              break;
            case 'phone must be a valid phone number':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'No Telp harus berisi nomor',
              });
              break;
            case 'level must be a valid enum value':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Level tidak terdaftar',
              });
              break;
            case 'level should not be empty':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Level tidak boleh kosong',
              });
              break;
            case 'ordinal must be a positive number':
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Ordinal Harus Lebih Dari 0',
              });
              break;
            default:
              Swal.fire({
                icon: 'error',
                title: 'Error !',
                text: 'Terdapat Kesalahan Di Input Anda',
                footer: `err: (${status}) ${el || ''}`,
              });
              break;
          }
        });
      }
      break;

    case 401:
      Swal.fire({
        icon: 'error',
        title: 'Error !',
        text: 'Token Anda Kadaluarsa',
      });
      break;
    case 403:
      Swal.fire({
        icon: 'error',
        title: 'Error !',
        text: 'Anda Tidak Mempunyai Hak Akses',
      });
      break;
    case 404:
      switch (message) {
        case 'Data not found':
          Swal.fire({
            icon: 'error',
            title: 'Error !',
            text: 'Data Tidak Ditemukan',
          });
          break;

        default:
          Swal.fire({
            icon: 'error',
            title: 'Error !',
            text: 'Terdapat Kesalahan Di Input Anda',
            footer: `err: (${status}) ${message || ''}`,
          });
          break;
      }
      break;

    case 406:
      switch (message) {
        case 'user Coordinator exsist':
        case 'user exsist':
          Swal.fire({
            icon: 'error',
            title: 'Error !',
            text: 'No Telp sudah Terdaftar',
          });
          break;

        default:
          Swal.fire({
            icon: 'error',
            title: 'Error !',
            text: 'Terdapat kesalahan',
            footer: `err: (${status}) ${message || ''}`,
          });
          break;
      }
      break;

    case 500:
      Swal.fire({
        icon: 'error',
        title: 'Error !',
        text: 'Terdapat Kesalahan di Server',
      });
      break;

    default:
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Terdapat Kesalahan',
        footer: `err: (${status}) ${message || ''}`,
      });
      break;
  }
};
