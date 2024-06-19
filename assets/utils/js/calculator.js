function hitung() {
  var usia = parseFloat(document.getElementById('age').value);
  var berat = parseFloat(document.getElementById('weight').value);
  var tinggi = parseFloat(document.getElementById('height').value);
  var lingkar = parseFloat(document.getElementById('lingkar').value);
  var resultDiv = document.getElementById('info');
  var alertContainer = document.getElementById('alert-container');
  
  var usiaArray = [1, 1.5, 2, 2.5, 3, 4];
  var beratArray = [[7.7, 12], [8.8, 13.7], [9.7, 15.3], [10.5, 16.9], [11.3, 18], [12.1, 19.4]];
  var tinggiArray = [[70, 78], [76, 85], [80, 92], [85, 97], [82, 95], [85,100]];
  var lingkarArray = [[45, 48], [47, 50], [49, 52], [50, 53], [51, 54]];

  // Validasi input
  if (isNaN(usia) || isNaN(berat) || isNaN(tinggi) || isNaN(lingkar)) {
      alertContainer.classList.add("slide-in-out");
      resultDiv.innerText = "Mohon masukkan angka yang valid.";
      setTimeout(() => {
          alertContainer.classList.remove("slide-in-out");
      }, 4000);
      return;
  }

  // Cek apakah input berada dalam rentang normal
  var usiaIndex = usiaArray.indexOf(usia);
  if (usiaIndex === -1) {
      alertContainer.classList.add("slide-in-out");
      resultDiv.innerText = "Usia yang dimasukkan tidak valid.";
      setTimeout(() => {
          alertContainer.classList.remove("slide-in-out");
      }, 4000);
      return;
  }

  var beratRange = beratArray[usiaIndex];
  var tinggiRange = tinggiArray[usiaIndex];
  var lingkarRange = lingkarArray[usiaIndex];

  if (berat < beratRange[0] || berat > beratRange[1] || 
      tinggi < tinggiRange[0] || tinggi > tinggiRange[1] ||
      lingkar < lingkarRange[0] || lingkar > lingkarRange[1]) {
      alertContainer.classList.add("slide-in-out");
      resultDiv.innerText = "Anak terkena stunting.";
      setTimeout(() => {
          alertContainer.classList.remove("slide-in-out");
      }, 4000);
  } else {
      alertContainer.classList.add("slide-in-out");
      resultDiv.innerText = "Anak tidak terkena stunting.";
      setTimeout(() => {
          alertContainer.classList.remove("slide-in-out");
      }, 4000);
  }
}
