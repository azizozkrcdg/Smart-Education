# Smart-Education

Smart Education, modern ve akıllı eğitim sistemleri için tasarlanmış bir web uygulamasıdır. Bu proje, Node.js, Express.js ve MongoDB kullanılarak MVC mimarisi ile geliştirilmiştir. Kullanıcı dostu bir arayüz sağlamak için EJS template engine kullanılmıştır.

## Özellikler

- Kullanıcı kayıt ve giriş sistemi
- Eğitim materyallerini yükleme ve görüntüleme
- Kategorilere ayrılmış ders içeriğini yönetme
- Dinamik veri işlemleri MongoDB ile entegre edilmiştir
- Responsive ve modern bir tasarım

## Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımlar gereklidir:

- [Node.js](https://nodejs.org/) (v20.18.0 veya üzeri)
- [MongoDB](https://www.mongodb.com/)
- Paket yöneticisi olarak npm

## Kurulum

1. Bu projeyi bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/kullanici_adi/smart-education.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd smart-education
   ```

3. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

4. Ortam değişkenlerini ayarlamak için `.env` dosyası oluşturun ve aşağıdaki değerleri doldurun:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/smart-education
   SESSION_SECRET=your_secret_key
   ```

5. Uygulamayı başlatın:
   ```bash
   npm start
   ```

6. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## Proje Yapısı

```plaintext
smart-education/
├── controllers/   # Uygulama mantığını yöneten dosyalar
├── models/        # MongoDB modelleri
├── routes/        # Uygulama rotaları
├── views/         # EJS şablon dosyaları
├── public/        # Statik dosyalar (CSS, JS, resimler)
├── app.js         # Ana uygulama dosyası
├── package.json   # Proje bilgileri ve bağımlıklar
└── .env           # Ortam değişkenleri
```

## Kullanılan Teknolojiler

- **Node.js:** Sunucu tarafı uygulamalarını geliştirmek için
- **Express.js:** Web uygulama framework'ü
- **MongoDB:** Veri tabanı yönetimi
- **EJS:** Dinamik HTML şablonları oluşturmak için

## Katkıda Bulunma

1. Bu repoyu forklayın
2. Özellik dalı oluşturun: `git checkout -b ozellik-adi`
3. Değişikliklerinizi commit edin: `git commit -m 'Yeni bir özellik ekledim'`
4. Dalı push edin: `git push origin ozellik-adi`
5. Bir Pull Request oluşturun

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

Herhangi bir sorunuz veya öneriniz varsa, lütfen benimle iletişime geçmekten çekinmeyin.

