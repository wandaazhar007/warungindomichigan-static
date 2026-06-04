/* =============================================
   WARUNG INDO MICHIGAN — javascript.js
   Products embedded directly (no fetch needed)
   ============================================= */

'use strict';

// ─── CONFIG ───────────────────────────────────
const WA_NUMBER = '16264614963';   // ganti dengan nomor WA asli (tanpa +)
const WA_GROUP  = 'https://chat.whatsapp.com/REPLACE_WITH_REAL_LINK'; // ganti dengan link grup
const FB_LINK   = 'https://www.facebook.com/levi.chen.11503/reels/';

// ─── PRODUCT DATA (embedded, no fetch) ────────
const PRODUCT_DATA = {
  "categories": [
    {
      "id": "mie-bubur", "name": "Mie & Bubur", "icon": "🍜",
      "items": [
        { "name": "Indomie Rendang 3 bgs", "price": "$5.00" },
        { "name": "Indomie Goreng Jumbo 3 bgs", "price": "$5.00" },
        { "name": "Sarimi Ayam Bawang 3 bgs", "price": "$5.00" },
        { "name": "Sarimi Goreng Jumbo 3 bgs", "price": "$5.00" },
        { "name": "Supermi Ayam Bawang 3 bgs", "price": "$5.00" },
        { "name": "Supermi Semur Ayam Pedas", "price": "$5.00" },
        { "name": "Sakura Goreng 3 bgs", "price": "$5.00" },
        { "name": "Sakura Kuah Seblak Jeletot 3 bgs", "price": "$5.00" },
        { "name": "Popmie Ayam Bawang", "price": "$3.50" },
        { "name": "Popmie Pedas Dower", "price": "$3.50" },
        { "name": "Mie 3 Ayam", "price": "$2.50" },
        { "name": "Mie Atom Bulan", "price": "$2.50" },
        { "name": "Mie Fuksiu / Miansian Hijau, Kuning 400gr", "price": "$10.00" },
        { "name": "Super Bubur isi 10", "price": "$8.00" },
        { "name": "Super Bubur", "price": "$7.00" },
        { "name": "Miesoa Paket Kacang Teri", "price": "$3.00" }
      ]
    },
    {
      "id": "minuman-kopi", "name": "Minuman & Kopi", "icon": "☕",
      "items": [
        { "name": "Luwak White Coffee isi 10", "price": "$6.00" },
        { "name": "Good Day Moccacino / Capucino 10 bgs", "price": "$6.00" },
        { "name": "Energen Vanilla / Cokelat 10 bgs", "price": "$7.50" },
        { "name": "Kapal Api Mix Gula 10 bgs", "price": "$4.50" },
        { "name": "Kapal Api ABC Susu 10 bgs", "price": "$6.00" },
        { "name": "Kapal Api Special 160gr", "price": "$5.00" },
        { "name": "Milo isi 10 bungkus", "price": "$10.00" },
        { "name": "Milo Malaysia 1.500gr", "price": "$19.00" },
        { "name": "Adem Sari 24 sachet", "price": "$8.00" },
        { "name": "Extra Joss 12 sachet", "price": "$3.00" },
        { "name": "Kukubima Energy 6 sachet", "price": "$3.00" },
        { "name": "Susu Jahe", "price": "$5.00" },
        { "name": "Nutrisari 10 bungkus", "price": "$3.00" },
        { "name": "Teh Sariwangi isi 50", "price": "$5.00" },
        { "name": "Teh Sosro isi 30", "price": "$4.00" },
        { "name": "Teh Sariwangi isi 25", "price": "$3.00" },
        { "name": "Teh Sariwangi 3 sachet @4pcs", "price": "$2.00" },
        { "name": "Kopi Cap Jangkar 500gr", "price": "$16.00" },
        { "name": "Kopi Cap Jangkar 1kg", "price": "$30.00" },
        { "name": "Kopi Aming 500gr", "price": "$18.00" },
        { "name": "Kopi Setia Bali 400gr", "price": "$15.00" },
        { "name": "Sonkit Jeruk Nipis 250ml", "price": "$7.00" },
        { "name": "Sonkit 90ml", "price": "$3.50" },
        { "name": "Vegeta 6 sachet", "price": "$4.00" }
      ]
    },
    {
      "id": "susu-dairy", "name": "Susu & Dairy", "icon": "🥛",
      "items": [
        { "name": "Susu Bendera Sachet Putih / Coklat 6 bgs", "price": "$4.00" },
        { "name": "Dancow Sachet isi 10", "price": "$13.00" },
        { "name": "Keju Chedar Kraft", "price": "$6.00" },
        { "name": "Margarin Palmia", "price": "$5.00" },
        { "name": "Blueband Cookie / Serbaguna", "price": "$5.00" },
        { "name": "Mentega Wisman 200gr", "price": "$10.00" }
      ]
    },
    {
      "id": "sambal-saus", "name": "Sambal & Saus", "icon": "🌶️",
      "items": [
        { "name": "Sambal Terasi Nusantara ABC 10 sachet", "price": "$5.00" },
        { "name": "Sambal Uleq Terasi / Bawang / Kemiri / Rawit / Cabe Hijau / Rendang 10 sachet", "price": "$5.00" },
        { "name": "Sambal Stick Belibis isi 24", "price": "$5.00" },
        { "name": "Sambal Stick ABC isi 10 bgs", "price": "$4.50" },
        { "name": "Sambal ABC Botol Plastik", "price": "$4.50" },
        { "name": "Sambal ABC Botol Extra Hot / Original 335ml", "price": "$6.00" },
        { "name": "Sambal Cabe Rawit 88", "price": "$12.00" },
        { "name": "Sambal Cabe Rawit Kaisar", "price": "$12.00" },
        { "name": "Sambal Ny. Lily Lampung 350gr", "price": "$12.00" },
        { "name": "Sambal Ebi Serai 300ml", "price": "$14.00" },
        { "name": "Sambal Ebi Pedas", "price": "$12.00" },
        { "name": "Sambal Terasi Susan 250gr", "price": "$9.00" },
        { "name": "Sambal Terasi Liemoy 250gr", "price": "$9.00" },
        { "name": "Sambal Pecel Mrs. Lim 250gr", "price": "$5.00" },
        { "name": "Sambal Eat Cumi / Cakalang / Teri / Ayam Suwir", "price": "$6.50" },
        { "name": "Kecap Bango Botol 385ml", "price": "$6.00" },
        { "name": "Kecap Bango Botol Kecil", "price": "$3.50" },
        { "name": "Kecap Bango Pouch Mini 77gr", "price": "$1.50" },
        { "name": "Kecap Bango Pouch 280gr", "price": "$4.00" },
        { "name": "Kecap Bango Pouch 720gr", "price": "$8.00" },
        { "name": "Kecap Manis ABC Botol 600gr", "price": "$6.00" },
        { "name": "Kecap Asin 2 Kambing / Sungjong", "price": "$11.00" },
        { "name": "Saori Saus Tiram 10 bgs", "price": "$7.00" },
        { "name": "Cuka Dixi", "price": "$12.00" }
      ]
    },
    {
      "id": "bumbu-rempah", "name": "Bumbu & Rempah", "icon": "🧂",
      "items": [
        { "name": "Masako Ayam isi 12", "price": "$4.50" },
        { "name": "Masako Sapi isi 12", "price": "$4.50" },
        { "name": "Royco Ayam / Sapi 12 bungkus", "price": "$4.50" },
        { "name": "Sasa Micin 100gr", "price": "$3.00" },
        { "name": "Kaldu Jamur Totole 450gr", "price": "$11.00" },
        { "name": "Ladaku isi 12", "price": "$4.50" },
        { "name": "Bumbu Racik Indofood Soto / Rawon / Rendang / Gulai / Kare / Balado", "price": "$2.00" },
        { "name": "Bumbu Munik Rendang", "price": "$4.00" },
        { "name": "Bumbu Bamboo Nasi Goreng Pedas", "price": "$2.00" },
        { "name": "Bumbu Bamboo Soto Betawi", "price": "$2.00" },
        { "name": "Bumbu Instant Nasi Uduk / Nasi Kuning 3 sachet", "price": "$2.00" },
        { "name": "Bumbu Pecel Sinti 100gr", "price": "$2.50" },
        { "name": "Bumbu Pecel Mrs. Lim 250gr", "price": "$5.00" },
        { "name": "Bumbu Gado-Gado Enak Eco 185gr", "price": "$5.00" },
        { "name": "Bumbu Rujak Semoijie Skw", "price": "$24.00" },
        { "name": "Bumbu Tabur Antaka Jagung Bakar / Keju / Balado 100gr", "price": "$4.50" },
        { "name": "Boncabe Level 15, 30", "price": "$3.50" },
        { "name": "Desaku Ketumbar isi 12", "price": "$7.00" },
        { "name": "Desaku Kunyit 12 bgs", "price": "$7.00" },
        { "name": "Desaku Cabe Bubuk 12 bgs", "price": "$7.00" },
        { "name": "Desaku Bawang Putih 12 bgs", "price": "$7.00" },
        { "name": "Desaku Marinasi isi 12", "price": "$7.00" },
        { "name": "Bubuk Terasi Susan", "price": "$12.00" },
        { "name": "Bubuk Terasi Rumahan Botol Kecil", "price": "$8.00" },
        { "name": "Terasi Panggang Paknen 500gr", "price": "$18.00" },
        { "name": "Terasi Panggang Paknen 250gr", "price": "$10.00" },
        { "name": "Petis Udang Kalimantan / Hakao 360gr", "price": "$10.00" },
        { "name": "Tauco Kelinci 425gr", "price": "$12.00" },
        { "name": "Kemiri 200gr", "price": "$5.00" },
        { "name": "Kayu Manis", "price": "$4.00" },
        { "name": "Bunga Lawang", "price": "$5.00" },
        { "name": "Jinten", "price": "$5.00" },
        { "name": "Bubuk Gohiong / Nghiongfun", "price": "$2.00 - $5.00" },
        { "name": "Theufuji 250gr", "price": "$7.00" },
        { "name": "Fungkhiuk / Angka", "price": "$6.00" },
        { "name": "Bawang Goreng Mrs. Lim 270gr", "price": "$10.00" },
        { "name": "Bawang Putih Cincang Goreng Kering 170gr", "price": "$7.00" },
        { "name": "Daun Jeruk Kering", "price": "$4.00" },
        { "name": "Daun Salam Kering", "price": "$3.50" },
        { "name": "Cabe Kering Kecil 100gr", "price": "$5.00" },
        { "name": "Cabe Kering Besar Kalimantan", "price": "$7.00" },
        { "name": "Asam Jawa 400gr", "price": "$7.00" },
        { "name": "Gula Merah Kalimantan Hokimas 500gr", "price": "$10.00" },
        { "name": "Gula Merah 270gr", "price": "$5.00" },
        { "name": "Racik Ikan Goreng isi 10", "price": "$8.00" },
        { "name": "Racik Ayam Goreng isi 10", "price": "$8.00" },
        { "name": "Racik Sayur Asem isi 10", "price": "$8.00" },
        { "name": "Racik Sayur Sop isi 10", "price": "$8.00" },
        { "name": "Racik Sayur Lodeh isi 10", "price": "$8.00" },
        { "name": "Tongcai / Tungchoi", "price": "$6.00" },
        { "name": "Bubuk Kachiangma 600ml", "price": "$14.00" },
        { "name": "Bubuk Kachiangma", "price": "$12.00" }
      ]
    },
    {
      "id": "snack-kerupuk", "name": "Snack & Kerupuk", "icon": "🍿",
      "items": [
        { "name": "Kerupuk Bawang Warna Warni 250gr", "price": "$5.00" },
        { "name": "Kerupuk Bawang Udang Orange 250gr", "price": "$5.00" },
        { "name": "Kerupuk Wilco 350gr", "price": "$9.00" },
        { "name": "Kerupuk Warteq Keriting Bulat 500gr", "price": "$15.00" },
        { "name": "Kerupuk Udang Stik Delia", "price": "$14.00" },
        { "name": "Kerupuk Udang Besar Delia", "price": "$14.00" },
        { "name": "Kerupuk Ikan Tenggiri Sahang 500gr", "price": "$14.00" },
        { "name": "Kerupuk Ikan Belidak Kalbar 500gr", "price": "$16.00" },
        { "name": "Kerupuk Opak Singkong 20pcs", "price": "$8.00" },
        { "name": "Kerupuk Rengginang 450gr", "price": "$12.00" },
        { "name": "Kerupuk Ubi Pedas Eksa", "price": "$14.00" },
        { "name": "Kerupuk Emping Manis Ny Chandra", "price": "$16.00" },
        { "name": "Kerupuk Emping Original 500gr", "price": "$14.00" },
        { "name": "Kerupuk Emping Manis Pedas (Mentah) 500gr", "price": "$15.00" },
        { "name": "Momogi Jagung Bakar / Coklat / Keju", "price": "$5.00" },
        { "name": "Chocolatos Coklat Mini", "price": "$5.00" },
        { "name": "Chocolatos Coklat Besar isi 24", "price": "$10.00" },
        { "name": "Cup-Cup Wow isi 20", "price": "$4.50" },
        { "name": "Snack Enasuka isi 20", "price": "$4.50" },
        { "name": "Snack Ajisan isi 20", "price": "$4.50" },
        { "name": "Chuba-Chuba 10 bgs", "price": "$5.00" },
        { "name": "Beng-Beng Share It isi 12", "price": "$5.00" },
        { "name": "Beng-Beng Share It isi 25", "price": "$8.00" },
        { "name": "Wafer Superstar", "price": "$7.00" },
        { "name": "Sukro Dua Kelinci 10 bgs", "price": "$5.00" },
        { "name": "Sukro Dua Kelinci", "price": "$2.50" },
        { "name": "Kacang Telur Garuda 210gr", "price": "$3.50" },
        { "name": "Chiki Taro", "price": "$3.50" },
        { "name": "Chiki Mr.2000", "price": "$3.50" },
        { "name": "Chiki Chitato (Sapi Panggang / Indo Goreng / Ayam Bumbu / Beef Mala)", "price": "$3.50" },
        { "name": "Chiki Kusuka Original / Balado", "price": "$3.50" },
        { "name": "Chiki Qtela", "price": "$3.50" },
        { "name": "Chiki Twistko", "price": "$3.50" },
        { "name": "Monde Snack Serena", "price": "$3.50" },
        { "name": "Regal", "price": "$9.00" },
        { "name": "Saltcheese", "price": "$5.00" },
        { "name": "Tictac Rentengan 10 bgs", "price": "$5.00" },
        { "name": "Snack Mie Mamee Monster isi 8", "price": "$10.00" },
        { "name": "Basreng Pedas 500gr", "price": "$16.00" },
        { "name": "Usus Pedas / Original 100gr", "price": "$3.00" },
        { "name": "Kulit Ayam Crispy Pedas", "price": "$12.00" },
        { "name": "Sumpia Ebi 500gr", "price": "$16.00" },
        { "name": "Stik Gabus Keju 500gr", "price": "$15.00" },
        { "name": "Keripik Hekeng", "price": "$23.00" },
        { "name": "Bolu Pandan Apollo", "price": "$10.00" },
        { "name": "Stik Talas Ori / Balado", "price": "$15.00" },
        { "name": "Keripik Singkong Kunyit", "price": "$10.00" },
        { "name": "Kuping Gajah", "price": "$6.00" },
        { "name": "Keripik Singkong Balado Mrs Lim", "price": "$8.00" },
        { "name": "Emping Manis Pedas Super", "price": "$18.00" },
        { "name": "Emping Melinjo Premium Harvest", "price": "$16.00" },
        { "name": "Maici Basreng Pedas Level", "price": "$7.00" },
        { "name": "Peyek Mix 2 Rasa (Kacang-Teri / Kacang-Rebon)", "price": "$17.00" },
        { "name": "Ulat Sutra 500gr", "price": "$16.00" },
        { "name": "Ulat Sutra 700ml Toples", "price": "$7.00" },
        { "name": "Stik Keju", "price": "$12.00" },
        { "name": "Kolotok Junchoi 250gr", "price": "$10.00" },
        { "name": "Kolotok 500gr", "price": "$15.00" },
        { "name": "Kacang Mete Pedas Thai 500gr", "price": "$18.00" },
        { "name": "Kacang Mete Pedas Thai 250gr", "price": "$10.00" },
        { "name": "Kacang Bawang Oven ~350gr", "price": "$12.00" },
        { "name": "Kacang Bawang Goreng 500gr", "price": "$12.00" },
        { "name": "Permen Kaki Hot Lollipop 25pcs", "price": "$4.00" },
        { "name": "Permen Milkita Lollipop 30pcs", "price": "$5.00" },
        { "name": "Permen Alpenliebe Lollipop 24pcs", "price": "$5.00" },
        { "name": "Permen Mentos 50pc", "price": "$4.00" },
        { "name": "Permen Golia", "price": "$4.00" },
        { "name": "Permen Alpenliebe", "price": "$4.00" },
        { "name": "Permen Nano-Nano 3 bgs", "price": "$4.00" },
        { "name": "Permen Susu", "price": "$5.00" },
        { "name": "Permen Sancha Manisan Buah Haw isi 10", "price": "$2.00" },
        { "name": "Bento Squid Thailand", "price": "$2.50" },
        { "name": "Dahfa Snack Ikan Malaysia 320gr", "price": "$16.00" },
        { "name": "Kacang Polong / Biji Kuaci / Kacang Koro Guanyum 208gr", "price": "$12.00" },
        { "name": "Manisan Kelapa Pink 500gr", "price": "$15.00" },
        { "name": "Keripik Bawang Mrs. Lim", "price": "$15.00" },
        { "name": "Rempeyek Nyai Udang Rebon / Teri", "price": "$12.00" },
        { "name": "Telur Gabus Kata Oma", "price": "$3.50" },
        { "name": "Makaroni Kriuk Pedas Kylafood", "price": "$3.50" },
        { "name": "Seblak Rempah Kylafood", "price": "$5.00" }
      ]
    },
    {
      "id": "bahan-kue", "name": "Bahan Kue & Masak", "icon": "🎂",
      "items": [
        { "name": "Tepung Sasa Pisang Goreng 3 bgs", "price": "$4.00" },
        { "name": "Tepung Sasa Kentucky 3 bgs", "price": "$5.00" },
        { "name": "Tepung Kobe Serbaguna 3 bgs", "price": "$5.00" },
        { "name": "Tepung Putri Serbaguna", "price": "$5.00" },
        { "name": "Tepung Hunkwe 150gr", "price": "$3.00" },
        { "name": "Tepung Tapioca 450gr", "price": "$3.00" },
        { "name": "Tepung Beras 450gr", "price": "$3.00" },
        { "name": "Biji Selasih", "price": "$2.00" },
        { "name": "Pasta Toffieco Pandan / Coklat", "price": "$7.00" },
        { "name": "Ceres Coklat 200gr", "price": "$6.00" },
        { "name": "Agar-Agar Walet 4 bgs", "price": "$5.00" },
        { "name": "Nutrijell Plain", "price": "$1.50" },
        { "name": "Nutrijell Cincau / Jeruk / Lychee / Anggur", "price": "$1.50" },
        { "name": "Coklat Bubuk Cocoa", "price": "$7.00" },
        { "name": "Vanili Bubuk", "price": "$2.00" },
        { "name": "Fermipan", "price": "$6.00" },
        { "name": "Soda Kue Cap Kupu-Kupu", "price": "$4.00" },
        { "name": "Baking Powder Cap Kupu-Kupu", "price": "$4.00" },
        { "name": "SP / TBM", "price": "$2.00" },
        { "name": "Ragi Tempe 500gr", "price": "$15.00" },
        { "name": "Ragi Tape", "price": "$5.00" },
        { "name": "Ketupat Mini 30 bgs", "price": "$14.00" },
        { "name": "Loyang Lapis Segi Empat 18x18", "price": "$14.00" },
        { "name": "Loyang Bolu / Puding", "price": "$14.00" },
        { "name": "Cetakan Bakwan isi 3", "price": "$10.00" }
      ]
    },
    {
      "id": "ikan-asin", "name": "Ikan Asin & Seafood", "icon": "🐟",
      "items": [
        { "name": "Sokonkoi 500gr", "price": "$16.00" },
        { "name": "Sokonkoi 160gr", "price": "$5.00" },
        { "name": "Hakungkoi 500gr", "price": "$15.00" },
        { "name": "Hakoi 500gr", "price": "$13.00" },
        { "name": "Hakoi 200gr", "price": "$5.00" },
        { "name": "Makaukoi per 100gr", "price": "$5.00" },
        { "name": "Ikan Asin Kembung / Kamong Phu 500gr", "price": "$18.00" },
        { "name": "Ikan Asin Hiu 500gr", "price": "$18.00" },
        { "name": "Ikan Asin Fumuiphu 500gr", "price": "$16.00" },
        { "name": "Ikan Asin Fumuiphu Belah 250gr", "price": "$11.00" },
        { "name": "Ikan Asin Jambal 500gr", "price": "$24.00" },
        { "name": "Ikan Asin Potong Tenggiri 500gr", "price": "$24.00" },
        { "name": "Ikan Asin Tenggiri Iris 100gr", "price": "$5.00" },
        { "name": "Ikan Teri Kupas 500gr", "price": "$18.00" },
        { "name": "Ikan Teri Mie 500gr", "price": "$18.00" },
        { "name": "Ikan Teri Medan 500gr", "price": "$18.00" },
        { "name": "Ikan Teri Pulau Utuh 500gr", "price": "$16.00" },
        { "name": "Ikan Asin Lumek", "price": "$5.00" },
        { "name": "Ikan Asin Kakap Merah / Fungkaiphu", "price": "$48.00/kg" },
        { "name": "Cumi Asin Isi Telor 500gr", "price": "$20.00" },
        { "name": "Baby Cumi Asin 500gr", "price": "$20.00" },
        { "name": "Cumi Kering Belah / Sokonsak 500gr", "price": "$20.00" },
        { "name": "Ebi Super 500gr", "price": "$24.00" },
        { "name": "Juhi Pulau 100gr", "price": "$8.00" },
        { "name": "Sayur Asin Bungkusan Merek China 300gr", "price": "$2.50" }
      ]
    },
    {
      "id": "makanan-olahan", "name": "Makanan Olahan & Kue", "icon": "🍡",
      "items": [
        { "name": "Tempe Orek 500ml", "price": "$13.00" },
        { "name": "Kacang Teri Asem Manis / Original 500ml", "price": "$14.00" },
        { "name": "Teri Goreng Kriuk 250gr", "price": "$15.00" },
        { "name": "Kentang Mustofa Balado / Original", "price": "$3.00" },
        { "name": "Dodol Duren Singkawang 500gr", "price": "$18.00" },
        { "name": "Dodol Duren Isi Lapis", "price": "$10.00" },
        { "name": "Dodol Wijen Isi Lapis", "price": "$10.00" },
        { "name": "Dodol Labu / Pepaya", "price": "$9.00" },
        { "name": "Dodol 5 Rasa Junchoi isi 5 batang", "price": "$24.00" },
        { "name": "Permen Dodol Duren 500gr", "price": "$20.00" },
        { "name": "Kue Keranjang / Thiampan Belitung 2 pcs", "price": "$18.00" },
        { "name": "Gojin / Theusa Pia 600gr", "price": "$20.00" },
        { "name": "Lapis Legit 20 Telor Mentega Daisy", "price": "$40.00" },
        { "name": "Kue Semprit / Lutifa", "price": "$18.00" },
        { "name": "Nastar 600-700gr", "price": "$25.00" },
        { "name": "Kerupuk Bakso Ikan Coklat 500gr", "price": "$22.00" },
        { "name": "Monde Danish Butter Cookies 1400gr", "price": "$35.00" },
        { "name": "Maling Luncheon", "price": "$10.00" },
        { "name": "Astor 330gr", "price": "$7.00" },
        { "name": "Atapson Pokfut 500gr", "price": "$15.00" },
        { "name": "Atapson Cianthong 500gr", "price": "$15.00" },
        { "name": "Atapson Kulit 500gr", "price": "$15.00" },
        { "name": "Keranji 500gr", "price": "$15.00" },
        { "name": "Moichoikon 500gr", "price": "$15.00" },
        { "name": "Choisim Kaleng Lettuce", "price": "$6.00" },
        { "name": "Loba Cincang Manis / Asin 465gr", "price": "$14.00" },
        { "name": "Kulit Tahu", "price": "$4.00" },
        { "name": "Fucuk / Kulit Tahu Kering", "price": "$7.00" },
        { "name": "Jamur Shintake Kering / Hiongku", "price": "$5.00" },
        { "name": "Kitjiu 750gr", "price": "$18.00" },
        { "name": "Kuah Cap Pama isi 3 bgs", "price": "$8.00" },
        { "name": "Sambal Eat Cumi Ciamik / Cakalang", "price": "$6.50" }
      ]
    },
    {
      "id": "obat-kesehatan", "name": "Obat & Kesehatan", "icon": "💊",
      "items": [
        { "name": "Betadine Obat Merah", "price": "$4.00" },
        { "name": "Thrombophob Gel", "price": "$12.00" },
        { "name": "Obat Luka Dalam Yun Nan Baiyao", "price": "$20.00" },
        { "name": "Dermatix Ultra", "price": "$18.00" },
        { "name": "Cataflam (Obat Sakit Gigi)", "price": "$15.00" },
        { "name": "Hansaplast 100pc", "price": "$8.00" },
        { "name": "Balsem Geliga", "price": "$5.00" },
        { "name": "Balsem Cap Lang", "price": "$5.00" },
        { "name": "Zambuk", "price": "$9.00" },
        { "name": "Lohankuo isi 12pcs", "price": "$9.00" },
        { "name": "Minyak Tawon", "price": "$7.00" },
        { "name": "Minyak Kayu Putih 120ml", "price": "$7.00" },
        { "name": "Minyak Kayu Putih 60ml", "price": "$4.00" },
        { "name": "Minyak Telon My Baby 60ml", "price": "$5.00" },
        { "name": "Minyak Telon My Baby 150ml", "price": "$9.00" },
        { "name": "Minyak Angin Cap Kapak", "price": "$4.00" },
        { "name": "Freshcare Merah / Lavender", "price": "$3.00" },
        { "name": "Freshcare Smash Roll + Kerok", "price": "$4.00" },
        { "name": "Minyak Angin Thailand Poysian", "price": "$3.50" },
        { "name": "Counterpain", "price": "$12.00" },
        { "name": "Hot and Cream 120gr", "price": "$10.00" },
        { "name": "Minyak Batu (Obat Gosok Luka Memar)", "price": "$10.00" },
        { "name": "Minyak Gosok GPU 100ml", "price": "$10.00" },
        { "name": "Koyocabe", "price": "$3.00" },
        { "name": "Salonpas Merah", "price": "$3.00" },
        { "name": "Tolak Angin Cair 12 bgs", "price": "$9.00" },
        { "name": "Obat Sakit Perut Taypinsan Cap Kupu-Kupu 12 sachet", "price": "$8.00" },
        { "name": "Rapet Wangi", "price": "$4.00" },
        { "name": "Jamu Tolak Angin", "price": "$2.00" },
        { "name": "Panadol Extra Merah", "price": "$5.00" },
        { "name": "Panadol Biru", "price": "$5.00" },
        { "name": "Pilkita isi 5 lempeng", "price": "$6.00" },
        { "name": "Neo Rheumacyl", "price": "$8.00" },
        { "name": "Promag isi 3 lempeng", "price": "$8.00" },
        { "name": "Bodrex Merah", "price": "$8.00" },
        { "name": "Entrostop isi 2 lempeng", "price": "$8.00" },
        { "name": "Diapet isi 10", "price": "$5.00" },
        { "name": "Hufasulvon 60ml Syrup Batuk Anak", "price": "$9.00" },
        { "name": "Bodrex Extra", "price": "$2.50" },
        { "name": "Bodrex Flu Batuk", "price": "$2.50" },
        { "name": "Paramex", "price": "$2.50" },
        { "name": "Mixagrip", "price": "$2.50" },
        { "name": "Oskadon", "price": "$2.50" },
        { "name": "Fatigon Spirit Merah", "price": "$2.50" },
        { "name": "Amoxiline", "price": "$5.00" },
        { "name": "Combantrin isi 2 butir (Obat Cacing)", "price": "$4.00" },
        { "name": "Antimo", "price": "$3.00" },
        { "name": "Komix Cair 3 bgs", "price": "$2.00" },
        { "name": "Redoxon 10 tablet", "price": "$7.00" },
        { "name": "FG Troches Meiji (Obat Tenggorokan) isi 10", "price": "$6.00" },
        { "name": "Fungsajan (Masuk Angin) isi 12", "price": "$10.00" },
        { "name": "Heu Fung San", "price": "$2.00" },
        { "name": "Pikuangsuang", "price": "$5.50" },
        { "name": "Salep 88", "price": "$3.00" },
        { "name": "Salep Gatal Pink China", "price": "$4.00" },
        { "name": "Kalpanax Krim", "price": "$6.00" },
        { "name": "Obat Tetes Mata Cendo Xitrol", "price": "$7.00" },
        { "name": "Bedak Herocyn", "price": "$8.00" },
        { "name": "Bedak Caladine", "price": "$7.00" },
        { "name": "Bedak MBK", "price": "$2.00" },
        { "name": "Resix V Godokan Sirih", "price": "$7.00" }
      ]
    },
    {
      "id": "personal-care", "name": "Personal Care", "icon": "✨",
      "items": [
        { "name": "Odol Darlie 250gr", "price": "$8.00" },
        { "name": "Viva Milk Cleanser", "price": "$5.00" },
        { "name": "Viva Toner Bengkoang", "price": "$5.00" },
        { "name": "Nes V", "price": "$35.00" },
        { "name": "Flimty isi 16pack", "price": "$38.00" },
        { "name": "Pensil Alis Viva Coklat / Hitam", "price": "$7.00" },
        { "name": "Hair Tonic Proto Ginseng", "price": "$12.00" },
        { "name": "Hair Tonic NR", "price": "$15.00" },
        { "name": "Vitamin Rambut Elips Pink 20pc", "price": "$7.00" },
        { "name": "Softtex Siang / Malam / Pantyliner", "price": "$8.00" },
        { "name": "Sikat Gigi Atomy isi 8pc", "price": "$13.00" },
        { "name": "Sunscreen Atomy SPF 50+", "price": "$13.00" }
      ]
    },
    {
      "id": "lain-lain", "name": "Lain-lain", "icon": "📦",
      "items": [
        { "name": "Plastik Es Lilin", "price": "$3.50" },
        { "name": "Plastik Setengah Kilo 12x25 / 1kg 15x30", "price": "$4.00" },
        { "name": "Plastik Klip 8x12 100pc", "price": "$3.00" },
        { "name": "Kertas Nasi Bungkus 10pcs", "price": "$3.00" },
        { "name": "Cobek Kayu", "price": "$15.00" },
        { "name": "Sandal Swallow", "price": "$8.00" },
        { "name": "Kartu Domino", "price": "$3.00" },
        { "name": "Materai 10.000 dua lembar", "price": "$5.00" },
        { "name": "Arak Taiwan 35% Alcohol", "price": "$12.00" }
      ]
    }
  ]
};

// ─── STATE ────────────────────────────────────
let activeCategory = 'all';
let searchQuery    = '';
let searchTimer    = null;

// ─── DOM REFS ─────────────────────────────────
const navbar      = document.getElementById('navbar');
const pillsWrap   = document.getElementById('category-pills');
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const resultsInfo = document.getElementById('results-info');
const scrollTopBtn= document.getElementById('scroll-top');

// ─── NAVBAR SCROLL ────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── HERO CTA ─────────────────────────────────
document.getElementById('hero-cta')?.addEventListener('click', () => {
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
});

// ─── FADE-UP OBSERVER ─────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ─── SKELETON ─────────────────────────────────
function buildSkeletons(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="skeleton-card">
      <div class="skeleton skeleton-line w-30"></div>
      <div class="skeleton skeleton-line w-80"></div>
      <div class="skeleton skeleton-line w-60"></div>
      <div class="skeleton skeleton-line h-20 w-30"></div>
      <div class="skeleton skeleton-line h-30 w-100"></div>
    </div>`;
  }
  return html;
}

function showSkeletons(count) {
  productGrid.innerHTML = buildSkeletons(count || 12);
}

// ─── BUILD PILLS ──────────────────────────────
function buildCategoryPills() {
  const cats = PRODUCT_DATA.categories;
  const total = cats.reduce((a, c) => a + c.items.length, 0);

  let html = `<button class="cat-pill active" data-id="all" onclick="selectCategory('all')">
    <span class="pill-icon">🏪</span> Semua
    <span class="pill-count">${total}</span>
  </button>`;

  cats.forEach(cat => {
    html += `<button class="cat-pill" data-id="${cat.id}" onclick="selectCategory('${cat.id}')">
      <span class="pill-icon">${cat.icon}</span> ${cat.name}
      <span class="pill-count">${cat.items.length}</span>
    </button>`;
  });

  pillsWrap.innerHTML = html;
}

// ─── SELECT CATEGORY ──────────────────────────
window.selectCategory = function(id) {
  activeCategory = id;
  searchInput.value = '';
  searchQuery = '';

  pillsWrap.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.id === id);
  });

  showSkeletons(8);
  setTimeout(() => renderProducts(), 380);
};

// ─── LIVE SEARCH ──────────────────────────────
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchQuery = e.target.value.trim().toLowerCase();

  if (searchQuery) {
    activeCategory = 'all';
    pillsWrap.querySelectorAll('.cat-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === 'all');
    });
  }

  searchTimer = setTimeout(() => renderProducts(), 260);
});

// ─── RENDER ───────────────────────────────────
function renderProducts() {
  const cats   = PRODUCT_DATA.categories;
  const matched = [];

  cats.forEach(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return;
    cat.items.forEach(item => {
      const hay = (item.name + ' ' + cat.name).toLowerCase();
      if (!searchQuery || hay.includes(searchQuery)) {
        matched.push({ ...item, catName: cat.name, catIcon: cat.icon });
      }
    });
  });

  // results info
  if (searchQuery) {
    resultsInfo.textContent = `${matched.length} produk ditemukan untuk "${searchInput.value.trim()}"`;
  } else if (activeCategory !== 'all') {
    const cat = cats.find(c => c.id === activeCategory);
    resultsInfo.textContent = `${matched.length} produk dalam kategori ${cat ? cat.name : ''}`;
  } else {
    resultsInfo.textContent = `Menampilkan ${matched.length} produk`;
  }

  if (matched.length === 0) {
    productGrid.innerHTML = `<div class="no-results">
      <div class="nr-icon">🔍</div>
      <h3>Produk tidak ditemukan</h3>
      <p>Coba kata kunci lain atau pilih kategori berbeda.</p>
    </div>`;
    return;
  }

  const waIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.116 1.516 5.849L.057 23.454a.5.5 0 0 0 .617.619l5.7-1.496A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 0 1-4.99-1.365l-.357-.213-3.706.973.988-3.618-.233-.372A9.784 9.784 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>`;

  productGrid.innerHTML = matched.map(item => {
    const msg = encodeURIComponent(`Halo Warung Indo Michigan! 🙏\nSaya ingin memesan:\n\n*${item.name}*\nHarga: ${item.price}\n\nMohon info ketersediaannya. Terima kasih!`);
    return `<div class="product-card">
      <div class="product-cat-tag">${item.catIcon} ${item.catName}</div>
      <div class="product-name">${highlight(item.name, searchQuery)}</div>
      <div class="product-price">${item.price}</div>
      <a href="https://wa.me/${WA_NUMBER}?text=${msg}" target="_blank" rel="noopener" class="product-order-btn">
        ${waIcon} Order via WA
      </a>
    </div>`;
  }).join('');

  // stagger fade-in
  requestAnimationFrame(() => {
    productGrid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(14px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 22);
    });
  });
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:#FFF5CC;color:#00274C;border-radius:2px;padding:0 2px;">$1</mark>');
}

// ─── WA / FB HELPERS ──────────────────────────
window.openWAOrder = function() {
  const msg = encodeURIComponent('Halo Warung Indo Michigan! 🙏 Saya ingin melihat daftar produk yang tersedia. Terima kasih!');
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank', 'noopener');
};

window.joinWAGroup = function() {
  window.open(WA_GROUP, '_blank', 'noopener');
};

window.openFacebook = function() {
  window.open(FB_LINK, '_blank', 'noopener');
};

// ─── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCategoryPills();
  showSkeletons(12);
  // small delay for skeleton animation effect
  setTimeout(() => renderProducts(), 500);
});
