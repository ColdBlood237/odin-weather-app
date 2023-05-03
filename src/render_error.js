const error = document.querySelector(".error");

function render_error_msg(msg) {
  if (error.validity.valid) {
    error.textContent = "";
  } else {
    error.textContent = msg;
  }
}

export default render_error_msg;
