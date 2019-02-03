var penumpang  = [];
var tambahpenumpang = function(nama,penumpang){
	var nomor_kursi = penumpang.indexOf(nama);
	if(penumpang.length == 0){
		penumpang.unshift(nama)
		return penumpang;
	}else{
		var temukan = penumpang.find(function(x){
			return x==nama;
		})
		if (nama == temukan){
			console.log('Nama : '+nama +" Sudah tersedia pada no : "+ nomor_kursi);
			alert('Nama : '+nama +" Sudah tersedia pada no : "+ nomor_kursi+1);
			return penumpang;
		}else{
			for (a=0 ; a< penumpang.length ; a++){
				if (penumpang[a] == undefined){
					penumpang[a] = nama;
					return penumpang;
				}else if (a == penumpang.length -1){ //ketika posisi a sudah mencapai akhir,krena penumpang.length -1 = titik akhir index
					penumpang.push(nama);
					return penumpang;
				}
			}
		}
	}	
}

var hapuspenumpang = function(nama,penumpang){
	if(penumpang.length == 0){
		console.log('Maaf Penumpang Masih Kosong');
		alert('Maaf Penumpang Masih Kosong');
	}else{
		for (a=0; a<penumpang.length ; a++){
			if(penumpang[a] == nama){
				penumpang[a] = undefined;
				return penumpang;
			}else{
				console.log(nama + ' tidak ada dalam angkot');
			}
		}
	}
}

