function hitung() {
    // Mendapatkan nilai usia dari input dengan id 'age' dan mengubahnya menjadi angka desimal
    var usia = parseFloat(document.getElementById('age').value);

    // Mendapatkan nilai berat dari input dengan id 'weight' dan mengubahnya menjadi angka desimal
    var berat = parseFloat(document.getElementById('weight').value);

    // Mendapatkan nilai tinggi dari input dengan id 'height' dan mengubahnya menjadi angka desimal
    var tinggi = parseFloat(document.getElementById('height').value);

    // Mendapatkan nilai lingkar dari input dengan id 'lingkar' dan mengubahnya menjadi angka desimal
    var lingkar = parseFloat(document.getElementById('lingkar').value);

    // Mendapatkan elemen dengan id 'info' untuk menampilkan hasil
    var resultDiv = document.getElementById('info');
    
    // Mendapatkan elemen dengan id 'alert-container' untuk menampilkan pesan peringatan
    var alertContainer = document.getElementById('alert-container');
  
    // Array berisi usia yang valid
    var usiaArray = [1, 1.5, 2, 2.5, 3, 4];
    // Array berisi rentang berat yang sesuai dengan usia dalam usiaArray
    var beratArray = [[7.7, 12], [8.8, 13.7], [9.7, 15.3], [10.5, 16.9], [11.3, 18], [12.1, 19.4]];
    // Array berisi rentang tinggi yang sesuai dengan usia dalam usiaArray
    var tinggiArray = [[70, 78], [76, 85], [80, 92], [85, 97], [82, 95], [85,100]];
    // Array berisi rentang lingkar kepala yang sesuai dengan usia dalam usiaArray
    var lingkarArray = [[45, 48], [47, 50], [49, 52], [50, 53], [51, 54]];

    // Validasi input: cek apakah usia, berat, tinggi, dan lingkar adalah angka yang valid
    if (isNaN(usia) || isNaN(berat) || isNaN(tinggi) || isNaN(lingkar)) {
        // Jika tidak valid, tampilkan pesan peringatan
        alertContainer.classList.add("slide-in-out");
        resultDiv.innerText = "Mohon masukkan angka yang valid.";
        // Hapus pesan peringatan setelah 4 detik
        setTimeout(() => {
            alertContainer.classList.remove("slide-in-out");
        }, 4000);
        return;
    }

    // Cek apakah usia berada dalam rentang yang valid dengan mencari indeks dalam usiaArray
    var usiaIndex = usiaArray.indexOf(usia);
    if (usiaIndex === -1) {
        // Jika usia tidak valid, tampilkan pesan peringatan
        alertContainer.classList.add("slide-in-out");
        resultDiv.innerText = "Usia yang dimasukkan tidak valid.";
        // Hapus pesan peringatan setelah 4 detik
        setTimeout(() => {
            alertContainer.classList.remove("slide-in-out");
        }, 4000);
        return;
    }

    // Mendapatkan rentang berat, tinggi, dan lingkar kepala yang sesuai dengan usia
    var beratRange = beratArray[usiaIndex];
    var tinggiRange = tinggiArray[usiaIndex];
    var lingkarRange = lingkarArray[usiaIndex];

    // Cek apakah berat, tinggi, dan lingkar kepala berada dalam rentang normal
    if (berat < beratRange[0] || berat > beratRange[1] || 
        tinggi < tinggiRange[0] || tinggi > tinggiRange[1] ||
        lingkar < lingkarRange[0] || lingkar > lingkarRange[1]) {
        // Jika salah satu nilai tidak dalam rentang normal, tampilkan pesan bahwa anak terkena stunting
        alertContainer.classList.add("slide-in-out");
        resultDiv.innerText = "Anak terkena stunting.";
        // Hapus pesan peringatan setelah 4 detik
        setTimeout(() => {
            alertContainer.classList.remove("slide-in-out");
        }, 4000);
    } else {
        // Jika semua nilai dalam rentang normal, tampilkan pesan bahwa anak tidak terkena stunting
        alertContainer.classList.add("slide-in-out");
        resultDiv.innerText = "Anak tidak terkena stunting.";
        // Hapus pesan peringatan setelah 4 detik
        setTimeout(() => {
            alertContainer.classList.remove("slide-in-out");
        }, 4000);
    }
}
