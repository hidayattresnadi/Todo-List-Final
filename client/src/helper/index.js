import Swal from 'sweetalert2'
export function successSwal(message){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: message
    })
}

export function failedSwal(error){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
}