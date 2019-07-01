function WriteAnimation (text, class_name, delay = 0 , callback = null) {
  console.log("1")
  $(class_name).empty().teletype( {
      text: text,
      typeDelay: 5,
      backDelay: 20,
      cursor: false,
      preserve: true,
      humanise: true,
      loop: 1,
      delay: delay,
      callbackFinished: function( teletype ) {
        if (callback != null) {
          callback();}
      }
    }
  );
}

function WriteHeader() {
  text = "Привет, Ирина Марковна!";
  class_name = ".letter-title";
  WriteAnimation(text, class_name, 20, WriteBody);
}

function WriteBody() {
  text = "Пишет Вам брат Лука Сергеевич Сотников.";
  class_name = ".letter-body";
  WriteAnimation(text, class_name, 20, WriteFooter);
}

function WriteFooter() {
  text = "Ваш Лука Сотников";
  class_name = ".letter-footer";
  WriteAnimation(text, class_name, 20, );
}


document.addEventListener("DOMContentLoaded", WriteHeader);
