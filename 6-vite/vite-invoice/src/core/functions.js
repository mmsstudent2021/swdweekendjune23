import Swal from "sweetalert2";

export const toast = (title, icon = "success") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon,
    title,
  });
};

export const confirmBox = (
  callback,
  title = "Are you sure to delete?",
  text = "You won't be able to revert this!",
  icon = "question"
) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};
