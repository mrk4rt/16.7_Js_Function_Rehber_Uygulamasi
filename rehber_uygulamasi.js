// Rehber dizisi
let rehber = [];

// Kullanıcı ekleme fonksiyonu
function rehbereEkle(ad, soyad, telefon) {
  // Yeni kullanıcı nesnesi oluşturma
  let kullanici = {
    ad: ad,
    soyad: soyad,
    telefon: telefon,
  };

  // Kullanıcıyı rehber dizisine ekleme
  rehber.push(kullanici);
}

// Kullanıcıları listeleme fonksiyonu
function rehberiListele() {
  // Rehberdeki her bir kullanıcıyı listeleme
  for (let kullanici of rehber) {
    console.log(`${kullanici.ad} ${kullanici.soyad} - ${kullanici.telefon}`);
  }
}

// Kullanıcıyı ada göre arama fonksiyonu
function kullaniciBul(kullaniciAdi) {
  // Kullanıcı adı ile eşleşen kullanıcıyı bulma
  let bulunanKullanici = rehber.find(
    (kullanici) => kullanici.ad.toLowerCase() === kullaniciAdi.toLowerCase()
  );

  // Kullanıcı bulunduysa bilgilerini döndürme
  if (bulunanKullanici) {
    return bulunanKullanici;
  } else {
    console.log("Kullanıcı bulunamadı.");
    return null;
  }
}

// Fonksiyonları test etme

// Kullanıcı ekleme
rehbereEkle("Ali", "Yılmaz", "1234567890");
rehbereEkle("Ayşe", "Demir", "0987654321");
rehbereEkle("Mehmet", "Kaya", "1112233445");

// Kullanıcıları listeleme
rehberiListele();

// Belirli bir kullanıcıyı arama
let aramaSonucu = kullaniciBul("Ayşe");
console.log(aramaSonucu);
