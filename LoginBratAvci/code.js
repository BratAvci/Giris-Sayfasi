// Örnek kullanıcı adı ve şifre
var kullaniciAdi = "admin";
var sifre = "123";

function girisKontrolu(kullaniciAdiGirilen, sifreGirilen) {
    // Kullanıcı adı ve şifreyi kontrol et
    if (kullaniciAdiGirilen === kullaniciAdi && sifreGirilen === sifre) {
        alert("Giriş başarılı!"); // Kullanıcı adı ve şifre eşleşirse, başarılı giriş mesajı gösterilir
        return true; // Giriş başarılı olduğu için true döndürülür
    } else if (kullaniciAdiGirilen !== kullaniciAdi && sifreGirilen === sifre) {
        alert("Kullanıcı adı yanlış!"); // Kullanıcı adı yanlışsa hata mesajı gösterilir
    } else if (kullaniciAdiGirilen === kullaniciAdi && sifreGirilen !== sifre) {
        alert("Şifre yanlış!"); // Şifre yanlışsa hata mesajı gösterilir
    } else {
        alert("Kullanıcı adı ve şifre yanlış!"); // Hem kullanıcı adı hem de şifre yanlışsa hata mesajı gösterilir
    }
    return false; // Giriş başarısız olduğu için false döndürülür
}






