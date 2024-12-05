# Rehber Uygulaması

---

## Proje Amacı
Bu projede, kullanıcı bilgilerini bir rehber dizisine ekleyen, listeleyen ve belirli bir kullanıcıyı ada göre bulan bir fonksiyon seti yazılacaktır. Kullanıcı bilgileri, ad, soyad, telefon numarası gibi bilgilerden oluşacak ve bu bilgilerle çeşitli işlemler yapılacaktır.

---

## Kullanılacak Değişkenler ve Anahtar Kelimeler

### Değişkenler:
- **`rehber`**: Kullanıcıların bilgilerini tutacak diziyi temsil eder. Bu dizide her kullanıcı bir nesne olarak yer alır.
- **`kullanici`**: Her bir kullanıcıyı temsil eden nesne. Bu nesne, kullanıcının adı, soyadı ve telefon numarasını içerir.
- **`ad`**: Kullanıcının adını saklayan değişken.
- **`soyad`**: Kullanıcının soyadını saklayan değişken.
- **`telefon`**: Kullanıcının telefon numarasını saklayan değişken.
- **`kullaniciAdi`**: Kullanıcının adı ile yapılan aramalarda kullanılan değişken.

### Anahtar Kelimeler:
- **`function`**: İşlemleri fonksiyonlar içinde düzenlemek için kullanılır.
- **`let`**: Değişkenleri tanımlamak için kullanılır.
- **`push()`**: Yeni bir kullanıcıyı rehber dizisine eklemek için kullanılır.
- **`for`**: Dizideki her bir kullanıcıyı kontrol etmek için kullanılır.
- **`find()`**: Belirli bir kullanıcıyı bulmak için kullanılır.
- **`return`**: Fonksiyondan bir değer döndürmek için kullanılır.
- **`console.log()`**: Rehberdeki kullanıcıları listelemek için sonuçları konsola yazdırmak için kullanılır.

---

## İzlenecek Adımlar

1. **Rehber Dizisini Tanımla:**
   - İlk olarak, tüm kullanıcı bilgilerini tutacak boş bir `rehber` dizisi oluşturun.

2. **Kullanıcı Ekleme Fonksiyonu (`rehbereEkle`):**
   - Bu fonksiyon, kullanıcının adı, soyadı ve telefon numarasını alarak bir kullanıcı nesnesi oluşturur ve bu nesneyi `rehber` dizisine ekler.
   - Fonksiyona girilen bilgilerle yeni bir kullanıcı nesnesi oluşturulacak ve `push()` metodu ile rehbere eklenecektir.

3. **Kullanıcıları Listeleme Fonksiyonu (`rehberiListele`):**
   - Bu fonksiyon, rehberdeki tüm kullanıcıları sırasıyla konsola yazdıracaktır.
   - Fonksiyon, `rehber` dizisini bir döngüyle gezecek ve her bir kullanıcının bilgilerini yazdıracaktır.

4. **Kullanıcıyı Ada Göre Arama Fonksiyonu (`kullaniciBul`):**
   - Bu fonksiyon, rehberdeki kullanıcıları ada göre arar.
   - `find()` metodunu kullanarak, istenilen adı içeren kullanıcıyı bulacak ve bu kullanıcının bilgilerini döndürecektir.
   - Fonksiyon, kullanıcının adı eşleştiğinde ilgili kullanıcıyı döndürecektir.

5. **Test Etme:**
   - Fonksiyonları test etmek için farklı kullanıcılar ekleyin, listeleyin ve belirli bir kullanıcıyı ada göre arayın.
   - Konsolda, kullanıcıların doğru bir şekilde listelendiğinden ve aramaların doğru sonuçlar döndürdüğünden emin olun.

---

## Örnek Beklenen Çıktı

Kullanıcıları ekledikten sonra:

```javascript
rehber = [
    { ad: "Ali", soyad: "Yılmaz", telefon: "1234567890" },
    { ad: "Ayşe", soyad: "Demir", telefon: "0987654321" }
];
