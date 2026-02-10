// Language Switcher for Yakupoğulları Petrol Website
// This script handles Turkish/English language switching across all pages

const translations = {
    // --- Common & Navigation ---
    'Ana Sayfa': 'Home',
    'Hizmetler': 'Services',
    'Tır Yıkama': 'Truck Wash',
    'Hakkımızda': 'About Us',
    'İletişim': 'Contact',
    'Anasayfa': 'Home', // Breadcrumb
    'Bize Ulaşın': 'Contact Us',
    'Hemen İletişime Geçin': 'Contact Us Now',
    'Daha Fazla Bilgi': 'More Information',
    'Hizmetlerimizi Keşfedin': 'Discover Our Services',
    'Bizi Ziyaret Edin': 'Visit Us',
    'Ana Sayfaya Dön': 'Back to Home',
    'Ürünlerimiz': 'Our Products',
    'Telefon': 'Phone',
    'E-Mail': 'E-Mail',
    'Adres': 'Address',
    'Konumumuz': 'Our Location',
    '7/24 Açık': 'Open 24/7',
    'İLETİŞİM': 'CONTACT', // Mobile widget

    // --- Header & Footer ---
    'Yakupoğulları Petrol': 'Yakupoğulları Petrol',
    'Sektörde 30 yılı aşkın tecrübemizle hizmetinizdeyiz.': 'We are at your service with over 30 years of experience in the sector.',
    'Güvenilir Petrol Ürünleri': 'Reliable Petroleum Products',
    'Hızlı Bağlantılar': 'Quick Links',
    'Sosyal Medya': 'Social Media',
    'Tüm hakları saklıdır.': 'All rights reserved.',
    'Velimeşe OSB, Ergene/Tekirdağ': 'Velimeşe OSB, Ergene/Tekirdağ',

    // --- Index Page ---
    'Yakupoğulları Petrol\'e Hoş Geldiniz': 'Welcome to Yakupoğulları Petrol',
    'Kaliteli akaryakıt ve madeni yağ ürünleriyle hizmetinizdeyiz': 'We are at your service with high quality fuel and lubricant products',
    'Modern Tesislerimiz': 'Our Modern Facilities',
    'Son teknoloji donanım ve güvenli hizmet': 'State-of-the-art equipment and safe service',
    'Geniş Hizmet Alanı': 'Wide Service Area',
    'Çerkezköy-Çorlu yolu üzerinde kolay erişim': 'Easy access on Cherkezkoy-Corlu road',
    'Güvenilir Marka': 'Reliable Brand',
    'M Oil ve Milangaz yetkili bayii': 'Authorized dealer of M Oil and Milangaz',
    'Market ve Cafe Hizmetimiz': 'Market and Cafe Service',
    'Soğuk içecekler ve yiyecek çeşitlerimizle yanınızdayız': 'We are with you with our cold drinks and food varieties',
    'Hizmetlerimiz': 'Our Services',
    'Size en iyi hizmeti sunmak için buradayız': 'We are here to provide you with the best service',

    // Services Cards (Index)
    'Akaryakıt Satışı': 'Fuel Sales',
    'Yüksek kaliteli benzin ve motorin ürünleriyle araçlarınıza en iyi performansı sağlıyoruz.': 'We provide the best performance for your vehicles with high quality gasoline and diesel products.',
    'Madeni Yağ': 'Lubricants',
    'Motor, şanzıman ve hidrolik yağlar dahil geniş ürün yelpazesi ile hizmetinizdeyiz.': 'We are at your service with a wide range of products including engine, transmission and hydraulic oils.',
    'Toptan Satış': 'Wholesale',
    'Kurumsal müşterilerimize özel avantajlı fiyatlar ve hızlı teslimat hizmeti sunuyoruz.': 'We offer special advantageous prices and fast delivery service to our corporate customers.',
    'Yakıtmatik': 'Fuelmatic', // Keeping Brand Name or "Fuel Card"
    'Pratik ödeme sistemi ile zamandan tasarruf edin, kolay ve güvenli ödemeler yapın.': 'Save time with practical payment system, make easy and secure payments.',
    'Teknik Destek': 'Technical Support',
    'Uzman ekibimiz ile ürün seçimi ve teknik konularda profesyonel danışmanlık hizmeti.': 'Professional consultancy service on product selection and technical issues with our expert team.',
    // Tır Yıkama description in index card
    'Modern yıkama sistemimiz ile ağır vasıta araçlarınız için profesyonel temizlik hizmeti.': 'Professional cleaning service for your heavy vehicles with our modern washing system.',

    // About Section (Index)
    'Moil – Yakupoğulları Petrol; Tekirdağ, Ergene/Velimeşe OSB’de konumlu bir akaryakıt istasyonudur. Eurodiesel, benzin ve AdBlue ürünleriyle bireysel ve kurumsal müşterilere hizmet verir. Yakıt tedariki Total Energies üzerinden sağlanmakta olup, kalite ve süreklilik önceliğimizdir. Lojistik, taşımacılık ve sanayi firmaları için faturalı satış, toplu alım ve planlı ikmal süreçleri yürütülür. Geniş araç alanı, kolay giriş-çıkış ve düzenli pompalarla kesintisiz hizmet sunulur. Kurumsal talepler ve iş birlikleri için iletişime açıktır.': 'Moil – Yakupoğulları Petrol is a gas station located in Tekirdağ, Ergene/Velimeşe OSB. It serves individual and corporate customers with Eurodiesel, gasoline and AdBlue products. Fuel supply is provided through Total Energies, and quality and continuity are our priority. Invoiced sales, bulk purchases and planned supply processes are carried out for logistics, transportation and industrial companies. Uninterrupted service is provided with a large vehicle area, easy entry-exit and regular pumps. It is open to communication for corporate demands and collaborations.',
    'Müşteri memnuniyetini ön planda tutarak, kaliteli ürünler ve güler yüzlü hizmet anlayışımızla sektörde fark yaratıyoruz. Geniş ürün yelpazemiz ve deneyimli kadromuzla her türlü ihtiyacınıza çözüm üretiyoruz.': 'We make a difference in the sector with our quality products and friendly service understanding by prioritizing customer satisfaction. We produce solutions for all your needs with our wide product range and experienced staff.',
    'Vizyonumuz, Türkiye\'nin önde gelen petrol ürünleri tedarikçilerinden biri olmak ve müşterilerimize en iyi hizmeti sunmaya devam etmektir.': 'Our vision is to be one of Turkey\'s leading petroleum product suppliers and to continue providing the best service to our customers.',

    // Brand Section
    'MOİL, TOTALENERGIES\'İN ALT KURULUŞUDUR': 'MOIL IS A SUBSIDIARY OF TOTALENERGIES',
    'Dünya çapında güvenilir enerji çözümleri sunan TotalEnergies\'in Türkiye\'deki gücü Moil ile tanışın. Yakupoğulları Petrol olarak, bu güçlü iş birliğiyle size en kaliteli akaryakıt ve petrol ürünlerini sunmanın gururunu yaşıyoruz.': 'Meet Moil, the power of TotalEnergies in Turkey, offering reliable energy solutions worldwide. As Yakupoğulları Petrol, we are proud to offer you the highest quality fuel and petroleum products with this strong cooperation.',

    // Truck Wash Section (Index & Page)
    'Tır Yıkama Hizmetimiz': 'Our Truck Wash Service',
    'Profesyonel ekipman ve deneyimli personelimizle ağır vasıta yıkama hizmeti': 'Truck washing service with professional equipment and experienced staff',
    'Modern Yıkama Tesisimiz': 'Our Modern Washing Facility',
    '7/24 hizmet veren son teknoloji tır yıkama sistemi': 'State-of-the-art truck washing system serving 24/7',
    'Profesyonel Yıkama': 'Professional Washing',
    'Tüm marka ve model ağır vasıta araçlar için uygun': 'Suitable for all brands and models of heavy vehicles',
    'Gece Hizmeti': 'Night Service',
    '24 saat kesintisiz hizmet ile her an yanınızdayız': 'We are with you at any moment with 24-hour uninterrupted service',
    'Otomatik Sistem': 'Automatic System',
    'Son teknoloji otomatik yıkama fırçaları ile detaylı temizlik': 'Detailed cleaning with state-of-the-art automatic washing brushes',
    'Yıkama Öncesi ve Sonrası': 'Before and After Washing',

    // Comparison Slider
    'ÖNCESİ': 'BEFORE',
    'SONRASI': 'AFTER',

    // --- Madeni Yağ Page ---
    'Madeni Yağ Çeşitleri': 'Lubricant Types',
    'Motor ve araç performansınız için en uygun madeni yağ çözümleri': 'The most suitable lubricant solutions for your engine and vehicle performance',
    'Aracınız İçin Doğru Yağı Seçin': 'Choose the Right Oil for Your Vehicle',
    'Uzman ekibimiz, aracınıza en uygun madeni yağ seçiminde size yardımcı olmaktan mutluluk duyar.': 'Our expert team is happy to assist you in choosing the most suitable lubricant for your vehicle.',

    // Oil Grades & Details
    '0W-20 Viskozite Derecesi': '0W-20 Viscosity Grade',
    'Özellikleri ve Kullanım Alanları': 'Features and Usage Areas',
    '0W-20, düşük viskoziteli bir motor yağıdır ve özellikle soğuk hava koşullarında mükemmel performans gösterir. "0W", yağın -35°C\'ye kadar düşük sıcaklıklarda bile akışkan kalabileceğini gösterir.': '0W-20 is a low viscosity motor oil and performs excellently especially in cold weather conditions. "0W" indicates that the oil can remain fluid even at low temperatures down to -35°C.',
    'Avantajları:': 'Advantages:',
    'Soğuk havada kolay motor çalıştırma': 'Easy engine starting in cold weather',
    'Gelişmiş yakıt ekonomisi': 'Improved fuel economy',
    'Motor aşınmasının azaltılması': 'Reduced engine wear',
    'Düşük emisyon değerleri': 'Low emission values',
    'Uygun Araçlar:': 'Suitable Vehicles:',
    'Modern benzinli ve hibrit araçlar, özellikle Japon markaları (Toyota, Honda, Mazda)': 'Modern gasoline and hybrid vehicles, especially Japanese brands (Toyota, Honda, Mazda)',

    '5W-30 Viskozite Derecesi': '5W-30 Viscosity Grade',
    '5W-30, çok yönlü bir motor yağıdır ve en yaygın kullanılan viskozite derecelerinden biridir. Hem soğuk hem de sıcak koşullarda mükemmel performans sağlar.': '5W-30 is a versatile motor oil and one of the most commonly used viscosity grades. It provides excellent performance in both cold and hot conditions.',
    'Geniş sıcaklık aralığında koruma': 'Protection in a wide temperature range',
    'İyi yakıt ekonomisi': 'Good fuel economy',
    'Motor temizliği': 'Engine cleanliness',
    'Uzun motor ömrü': 'Long engine life',
    'Çoğu modern binek otomobil, hafif ticari araçlar, hem benzinli hem dizel motorlar': 'Most modern passenger cars, light commercial vehicles, both gasoline and diesel engines',

    '5W-40 Viskozite Derecesi': '5W-40 Viscosity Grade',
    '5W-40, yüksek performanslı ve geniş sıcaklık aralığında koruma sağlayan bir motor yağıdır. Özellikle ağır yük koşullarında ve yüksek sıcaklıklarda mükemmel koruma sunar.': '5W-40 is a high performance motor oil that provides protection in a wide temperature range. It offers excellent protection especially under heavy load conditions and high temperatures.',
    'Yüksek sıcaklıkta üstün koruma': 'Superior protection at high temperatures',
    'Motor aşınmasına karşı maksimum koruma': 'Maximum protection against engine wear',
    'Ağır yük koşullarında dayanıklılık': 'Durability under heavy load conditions',
    'Turbo şarjlı motorlar için ideal': 'Ideal for turbocharged engines',
    'Yüksek performanslı araçlar, turbo motorlar, Avrupa markaları (BMW, Mercedes-Benz, Audi, Volkswagen)': 'High performance vehicles, turbo engines, European brands (BMW, Mercedes-Benz, Audi, Volkswagen)',

    '10W-40 Viskozite Derecesi': '10W-40 Viscosity Grade',
    '10W-40, ılıman ve sıcak iklim koşullarında kullanılan, yüksek kilometreli araçlar için ideal bir motor yağıdır. Geniş uygulama yelpazesi sunar.': '10W-40 is an ideal motor oil for high mileage vehicles used in temperate and hot climate conditions. It offers a wide range of applications.',
    'Yüksek kilometreli motorlarda aşınma koruması': 'Wear protection in high mileage engines',
    'Yağ tüketiminin azaltılması': 'Reduction of oil consumption',
    'Sıcak havalarda motor koruması': 'Engine protection in hot weather',
    'Ekonomik çözüm': 'Economical solution',
    'Yüksek kilometreli araçlar, eski model araçlar, ılıman iklim bölgeleri': 'High mileage vehicles, old model vehicles, temperate climate zones',

    '15W-40 Viskozite Derecesi': '15W-40 Viscosity Grade',
    '15W-40, ağır hizmet dizel motorları için özel olarak geliştirilmiş bir motor yağıdır. Kamyon, otobüs ve iş makineleri için idealdir.': '15W-40 is a motor oil specially developed for heavy duty diesel engines. It is ideal for trucks, buses and construction equipment.',
    'Ağır hizmet koşullarında üstün koruma': 'Superior protection under heavy duty conditions',
    'Dizel motorlar için optimize edilmiş': 'Optimized for diesel engines',
    'Yüksek yük taşıma kapasitesi': 'High load carrying capacity',
    'Uzun yağ değişim aralıkları': 'Long oil change intervals',
    'Kamyonlar, otobüsler, traktörler, iş makineleri, ağır hizmet dizel motorları': 'Trucks, buses, tractors, construction equipment, heavy duty diesel engines',

    '20W-50 Viskozite Derecesi': '20W-50 Viscosity Grade',
    '20W-50, yüksek viskoziteli bir motor yağıdır ve özellikle çok sıcak iklimlerde veya eski araçlarda kullanılır. Kalın film tabakası oluşturarak maksimum koruma sağlar.': '20W-50 is a high viscosity motor oil and is used especially in very hot climates or old vehicles. It provides maximum protection by creating a thick film layer.',
    'Çok sıcak havalarda üstün koruma': 'Superior protection in very hot weather',
    'Motor gürültüsünün azaltılması': 'Reduction of engine noise',
    'Yüksek yük kapasitesi': 'High load capacity',
    'Klasik araçlar için ideal': 'Ideal for classic vehicles',
    'Klasik araçlar, eski model araçlar, motorsikletler, çok sıcak iklim bölgeleri': 'Classic vehicles, old model vehicles, motorcycles, very hot climate zones',

    // --- Akaryakıt Satışı Page ---
    'Dünya standartlarında kaliteli yakıt, güvenilir hizmet': 'World standards quality fuel, reliable service',
    'Dünya Çapında Güvenilirlik ve Kalite Garantisi': 'Worldwide Reliability and Quality Guarantee',
    'TotalEnergies ve Moil Hakkında': 'About TotalEnergies and Moil',
    'TotalEnergies, Fransa merkezli küresel bir enerji şirketidir ve dünyanın en büyük petrol ve gaz şirketleri arasında yer almaktadır. 1924 yılında kurulan şirket, 130\'dan fazla ülkede faaliyet göstermekte ve 100.000\'den fazla çalışanı ile enerji sektörünün öncü markalarından biridir.': 'TotalEnergies is a France-based global energy company and is among the world\'s largest oil and gas companies. Founded in 1924, the company operates in more than 130 countries and is one of the leading brands in the energy sector with more than 100,000 employees.',
    'Moil, TotalEnergies\'in Türkiye\'deki önemli bayilerinden biri olarak, şirketin küresel kalite standartlarını yerel pazara taşımaktadır. TotalEnergies\'in 100 yılı aşkın tecrübesi ve Ar-Ge yatırımları, Moil markası altında sunulan yakıtların kalitesinin temelidir.': 'Moil, as one of TotalEnergies\' important dealers in Turkey, brings the company\'s global quality standards to the local market. TotalEnergies\' more than 100 years of experience and R&D investments are the basis of the quality of fuels offered under the Moil brand.',
    'Yakupoğulları Petrol olarak, Moil bayiliği ile TotalEnergies\'in dünya standartlarındaki kaliteli akaryakıtlarını müşterilerimize sunmanın gururunu yaşıyoruz.': 'As Yakupoğulları Petrol, we are proud to offer our customers TotalEnergies\' world-class quality fuels with Moil dealership.',
    'Yakıt Kalitemiz ve Standartlarımız': 'Our Fuel Quality and Standards',
    'TotalEnergies\'in gelişmiş rafinaj teknolojileri ile üretilen yakıtlarımız, uluslararası kalite standartlarının ötesinde özelliklere sahiptir. Her damla yakıt, motor performansını optimize etmek ve yakıt ekonomisi sağlamak için özenle formüle edilmiştir.': 'Our fuels, produced with TotalEnergies\' advanced refining technologies, have features beyond international quality standards. Every drop of fuel is carefully formulated to optimize engine performance and ensure fuel economy.',
    'Yakıtlarımız, motor temizliğini koruyarak, aşınmayı azaltarak ve yakıt tüketimini optimize ederek aracınızın ömrünü uzatır. TotalEnergies\'in patentli katkı maddeleri, motorunuzu karbon birikintilerinden korur ve optimal performans sağlar.': 'Our fuels extend the life of your vehicle by maintaining engine cleanliness, reducing wear and optimizing fuel consumption. TotalEnergies\' patented additives protect your engine from carbon deposits and ensure optimal performance.',
    'Tüm ürünlerimiz, düzenli olarak bağımsız laboratuvarlarda test edilmekte ve Avrupa Birliği (EN 228 ve EN 590) normlarına tam uyum göstermektedir.': 'All our products are regularly tested in independent laboratories and fully comply with European Union (EN 228 and EN 590) norms.',
    'Laboratuvar Testli': 'Laboratory Tested',
    'Her parti yakıt bağımsız laboratuvarlarda test edilir': 'Every batch of fuel is tested in independent laboratories',
    'Uluslararası Standartlar': 'International Standards',
    'AB ve dünya standartlarına tam uyum': 'Full compliance with EU and world standards',
    'Motor Koruması': 'Engine Protection',
    'İleri teknoloji katkı maddeleri ile maksimum koruma': 'Maximum protection with advanced additives',
    'Yakıt Ekonomisi': 'Fuel Economy',
    'Optimize edilmiş formül ile tasarruf': 'Savings with optimized formula',
    'Yakıt Kalitemizin Avantajları': 'Advantages of Our Fuel Quality',
    'TotalEnergies\'in 100 yıllık tecrübesi ve Ar-Ge birikimi': 'TotalEnergies\' 100 years of experience and R&D accumulation',
    'Gelişmiş rafinaj teknolojileri ile yüksek saflıkta yakıt': 'High purity fuel with advanced refining technologies',
    'Patentli katkı maddeleri ile motor temizliği ve koruması': 'Engine cleanliness and protection with patented additives',
    'Karbon birikintilerini önleyen özel formülasyon': 'Special formulation preventing carbon deposits',
    'Motor aşınmasını azaltarak araç ömrünü uzatma': 'Extending vehicle life by reducing engine wear',
    'Yakıt ekonomisi sağlayarak maliyetleri düşürme': 'Reducing costs by providing fuel economy',
    'Düşük emisyon değerleri ile çevre dostu yakıt': 'Environmentally friendly fuel with low emission values',
    'Soğuk havalarda kolay çalıştırma özelliği': 'Easy starting feature in cold weather',
    'Düzenli kalite kontrolleri ve sertifikasyonlar': 'Regular quality controls and certifications',
    '7/24 kesintisiz hizmet ve güvenilir tedarik': '24/7 uninterrupted service and reliable supply',
    'Kaliteli Yakıt İçin Bizi Tercih Edin': 'Choose Us For Quality Fuel',
    'TotalEnergies kalitesi ile aracınıza en iyisini sunun': 'Offer the best to your vehicle with TotalEnergies quality',

    // --- Tır Yıkama Page ---
    'Modern otomatik yıkama makinesi ve uzman personelimizle profesyonel hizmet': 'Professional service with modern automatic washing machine and expert staff',
    'Otomatik Yıkama Makinesi': 'Automatic Washing Machine',
    'Uzman Yıkamacılar': 'Expert Washers',
    'Profesyonel ekibimizle detaylı temizlik hizmeti': 'Detailed cleaning service with our professional team',
    'Video Tanıtım': 'Video Introduction',
    'Tır yıkama hizmetimizi videoda izleyin': 'Watch our truck washing service in the video',
    'Otomatik Makine ve Uzman Personel ile Profesyonel Yıkama': 'Professional Washing with Automatic Machine and Expert Staff',
    'Modern otomatik yıkama makinemiz ve deneyimli yıkamacı ekibimizle araçlarınıza en iyi temizlik hizmetini sunuyoruz': 'We offer the best cleaning service to your vehicles with our modern automatic washing machine and experienced washer team',
    'Hizmet Detayları': 'Service Details',
    'Yakupoğulları Petrol olarak, ağır vasıta araçlarınız için hem otomatik makine yıkama hem de uzman personelimizle manuel detaylı temizlik hizmeti sunuyoruz. Son teknoloji otomatik yıkama sistemimiz ve tecrübeli ekibimizle araçlarınız güvenli ellerde.': 'As Yakupoğulları Petrol, we verify both automatic machine washing and manual detailed cleaning service with our expert staff for your heavy vehicles. Your vehicles are in safe hands with our state-of-the-art automatic washing system and experienced team.',
    'Modern otomatik yıkama makinesi ile hızlı ve etkili temizlik': 'Fast and effective cleaning with modern automatic washing machine',
    'Uzman yıkamacı ekibimizle detaylı manuel temizlik': 'Detailed manual cleaning with our expert washer team',
    'Araç boyasına zarar vermeyen özel kimyasallar': 'Special chemicals that do not damage vehicle paint',
    'Çevre dostu temizlik ürünleri kullanımı': 'Use of environmentally friendly cleaning products',
    'Tır, kamyon, çekici ve tüm ağır vasıta araçlar için uygun': 'Suitable for truck, lorry, tow truck and all heavy vehicles',
    'Yüksek basınçlı yıkama sistemi': 'High pressure washing system',
    '24 saat kesintisiz hizmet': '24 hours uninterrupted service',
    'Uygun fiyatlandırma ve hızlı işlem süresi': 'Affordable pricing and fast transaction time',
    '⚠️ Önemli Not: Anlaşma İçin İşletmemize Gelin': '⚠️ Important Note: Come to Our Business for Agreement',
    'Firmalar için özel anlaşma ve avantajlı fiyatlandırma sunuyoruz.': 'We offer special agreements and advantageous pricing for companies.',
    'Toplu araç yıkama anlaşmaları için lütfen işletmemizi ziyaret edin veya bizi arayın.': 'Please visit our business or call us for bulk vehicle washing agreements.',
    'Tır Yıkama Tesisimizin Konumu': 'Location of Our Truck Washing Facility',

    // --- Toptan Satış Page ---
    'Kurumsal müşterilerimize özel avantajlı fiyatlar ve profesyonel hizmet sunuyoruz': 'We offer special advantageous prices and professional service to our corporate customers',
    'Toptan Satış İçin İletişime Geçin': 'Contact Us For Wholesale',
    'Kurumsal alımlarınız için özel fiyatlar ve avantajlı koşullar sunuyoruz. Bizimle iletişime geçerek detaylı bilgi alabilirsiniz.': 'We offer special prices and advantageous conditions for your corporate purchases. You can get detailed information by contacting us.',
    'Toptan Satış Avantajları': 'Wholesale Advantages',
    'Avantajlı Fiyatlar': 'Advantageous Prices',
    'Toplu alımlarda özel indirimli fiyatlar ve ödeme kolaylıkları': 'Special discounted prices and payment facilities in bulk purchases',
    'Hızlı Teslimat': 'Fast Delivery',
    'Geniş araç filomuz ile zamanında ve güvenli teslimat': 'On time and safe delivery with our wide vehicle fleet',
    'Özel Anlaşmalar': 'Special Agreements',
    'Firma ihtiyaçlarınıza özel esnek ödeme ve teslimat planları': 'Flexible payment and delivery plans specific to your company needs',
    'Kalite Garantisi': 'Quality Guarantee',
    'Moil ve Total Energies kalitesiyle güvenilir ürünler': 'Reliable products with Moil and Total Energies quality',
    'Özel Müşteri Temsilcisi': 'Special Customer Representative',
    'Size özel müşteri temsilciniz ile kesintisiz iletişim': 'Uninterrupted communication with your special customer representative',
    'Raporlama Sistemi': 'Reporting System',
    'Detaylı alım raporları ve online takip imkanı': 'Detailed purchase reports and online tracking opportunity',

    // --- Yakıtmatik Page ---
    'Yakıtmatik Nedir?': 'What is Fuelmatic?',
    'Bir akaryakıt denetim sistemi olan Yakıtmatik, istasyonda nakit/kredi ile ödeme yapmadan, fiş veya fatura almaya gerek kalmadan yakıt alımını sağlar. Dolum bilgilerini ve taşıt tüketim bilgilerini elektronik ortamda raporlar. Birçok değişik limitleme parametresi sayesinde akaryakıt tüketimini kontrol altına alır. Kilometre takibini, basit ve güvenli olarak yakıt alım anındaki zamana göre takip eder. Her 10 günde bir kesilen faturaya istinaden gönderilen raporlarla, hangi taşıtın hangi istasyondan, ne zaman, ne kadar, hangi tür yakıt aldığını bildirir.': 'Fuelmatic, a fuel control system, allows fuel purchase at the station without paying with cash/credit and without the need to receive a receipt or invoice. It reports detailed filling information and vehicle consumption information electronically. It keeps fuel consumption under control thanks to many different limiting parameters. It tracks mileage simply and securely based on the time of fuel purchase. With reports sent based on the invoice issued every 10 days, it reports which vehicle bought which type of fuel from which station, when, and how much.',
    'Yakıtmatik\'in Avantajları': 'Advantages of Fuelmatic',
    'Akaryakıt giderinizin kontrolünü kolayca sağlar.': 'Easily provides control of your fuel expenses.',
    'Zaman ve para tasarrufu sağlar.': 'Saves time and money.',
    'Filo ve yakıt yönetimini kolaylaştırır.': 'Facilitates fleet and fuel management.',
    'Sürücü ile filo yöneticisi arasında şeffaflık sağlar, iletişim konusunda çıkabilecek olan anlaşmazlıkları ortadan kaldırır.': 'Provides transparency between driver and fleet manager, eliminates disputes that may arise regarding communication.',
    'Ödeme ve fatura için her bir akaryakıt dolumu sonrasında beklemeyi ortadan kaldırır.': 'Eliminates waiting for payment and invoice after each fuel filling.',
    'Doğru ürün doğru depoya girmesini sağlayarak, yanlış dolum olasılığını ortadan kaldırır.': 'Eliminates the possibility of wrong filling by ensuring the right product goes into the right tank.',
    'Kredi kartı kullanmak, ödeme yapmak veya fatura almak için beklemezsiniz.': 'You do not wait to use a credit card, make a payment or get an invoice.',
    'Akaryakıt alımı için evrak vermemiz veya yapılan harcamalar için ödeme talep etmenize gerek yoktur.': 'You do not need to give documents for fuel purchase or request payment for expenses made.',
    'Faturayı tek bir noktadan alır, ödemeler tek bir noktaya yapılır.': 'Receives the invoice from a single point, payments are made to a single point.',
    'Yakıtmatik kurulu tüm istasyonlara online bağlantısı ile merkeze bağlı olması sayesinde her işlem kontrolleriň anında yapılabilir.': 'Thanks to its connection to the center with online connection to all stations where Fuelmatic is installed, every transaction control can be done instantly.',
    'Yakıtmatik sisteminin ileri bilgi işlem sitapının ve kullanıcısına sağladığı yüksek performans online altyapısı ile tüm bilgiler ve güvenli kısmında transfer edilir ve merkez bilgisayarlarda saklanır.': 'With the advanced information processing setup of the Fuelmatic system and the high performance online infrastructure it provides to its user, all information is transferred securely and stored in central computers.',
    'Yakıtmatik Hakkında Daha Fazla Bilgi': 'More Information About Fuelmatic',
    'Yakıtmatik sistemi hakkında detaylı bilgi almak ve başvuru yapmak için resmi web sitesini ziyaret edebilirsiniz.': 'You can visit the official website to get detailed information about the Fuelmatic system and to apply.'
};

// --- Core Language Switcher Logic ---

function getCurrentLanguage() {
    return localStorage.getItem('siteLanguage') || 'tr';
}

function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('siteLanguage', newLang);
    updateLanguage(newLang);
}

function updateLanguage(lang) {
    const button = document.getElementById('langToggle');
    // Update all toggles (desktop and mobile)
    document.querySelectorAll('#langToggle').forEach(btn => {
        btn.textContent = lang === 'tr' ? 'EN' : 'TR';
    });

    // Helper to escape special regex characters
    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    if (lang === 'en') {
        // Switch to English
        const elements = document.querySelectorAll('h1, h2, h3, h4, p, a, span, button, li, div, i, strong, b');

        elements.forEach(element => {
            // Skip script and style tags, and skip if no children
            if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return;

            // Handle simple text content
            // We want to replace only text nodes to preserve some HTML structure if possible, 
            // but for this site, explicit text replacement is safer for exact matches.

            const text = element.textContent.replace(/\s+/g, ' ').trim();
            // Check for exact match in translations
            if (translations[text]) {
                if (!element.hasAttribute('data-original-text')) {
                    element.setAttribute('data-original-text', text); // Save Turkish
                }
                // Only replace the text node content if it has single text node
                if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
                    element.textContent = translations[text];
                } else {
                    // Complexity: Element has children (icons, spans etc.)
                    // We try to replace specific text occurrences without breaking HTML
                    // But for this static site, simple textContent replacement usually works if the key matches the *whole* content.
                    // If the key matches the whole content (including child text), we can replace.
                    // HOWEVER, replacing innerHTML destroys child tags (like <i> in buttons).
                    // So we only replace if strict match found.

                    // Strategy: If the trimmed text matches a key exactly, replace it.
                    // If it breaks icons, we should have accounted for that in the HTML structure (e.g. icon + span).

                    // Exception: Mobile contact items might be tricky.
                    // Let's rely on the DOM structure. If an element has direct text that matches, replace it.

                    element.childNodes.forEach(node => {
                        if (node.nodeType === 3) { // Text node
                            const validText = node.nodeValue.replace(/\s+/g, ' ').trim();
                            if (validText && translations[validText]) {
                                if (!node.originalText) node.originalText = validText; // Store on node
                                node.nodeValue = translations[validText];
                            }
                        }
                    });
                }
            }
        });

    } else {
        // Switch back to Turkish
        // Restore from data attributes or originalText properties

        // 1. Restore elements with data-original-text
        document.querySelectorAll('[data-original-text]').forEach(element => {
            if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
                element.textContent = element.getAttribute('data-original-text');
            }
        });

        // 2. Restore text nodes with originalText property
        const allNodes = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
        let currentNode;
        while (currentNode = allNodes.nextNode()) {
            if (currentNode.originalText) {
                currentNode.nodeValue = currentNode.originalText;
            }
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Force default to Turkish on every page load as requested
    // "bütün sayfalar ilk açıldığında türkçe açılsın"
    localStorage.setItem('siteLanguage', 'tr');

    // Ensure button shows correct state
    const button = document.getElementById('langToggle');
    if (button) button.textContent = 'EN';

    // No need to call updateLanguage('tr') because HTML is already in Turkish
});
