/*$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engeller

    // Form verilerini al
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var date = $("#date").val(); // Date alanını da al

    // İsim alanı boş ise uyarı göster ve işlemi sonlandır
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // E-posta alanı boş ise uyarı göster ve işlemi sonlandır
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    // E-posta formatı doğrulaması yap
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mesaj alanı boş ise uyarı göster ve işlemi sonlandır
    if (message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    // Tarih alanı boş ise uyarı göster ve işlemi sonlandır
    if (date.trim() === "") {
      alert("Please enter a date.");
      return;
    }

    // Formun başarılı bir şekilde gönderildiğini kullanıcıya bildir
    alert(
      "Message sent successfully!\n\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message +
        "\nDate: " +
        date
    );

    // Formun geri yüklenmesini engellemek için form alanlarını temizle
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    $("#date").val("");
  });
});
*/


/*$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engeller

    // Form verilerini al
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // İsim alanı boş ise uyarı göster ve işlemi sonlandır
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // E-posta alanı boş ise uyarı göster ve işlemi sonlandır
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    // E-posta formatı doğrulaması yap
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mesaj alanı boş ise uyarı göster ve işlemi sonlandır
    if (message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    // Formun başarılı bir şekilde gönderildiğini kullanıcıya bildir
    alert(
      "Message sent successfully!\n\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message +
        "\nDate: " +
        date
    );

    // Formun geri yüklenmesini engellemek için form alanlarını temizle
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    $("#date").val("");
  });
});
*/