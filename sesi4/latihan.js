let produk ={
    nama : "Mouse Wireless",
    harga: 150000,
    stock : 3,
    diskon : 10,
    info : function(){
        return (
            this.nama + "\n" +
            "Harga: Rp" + this.harga + "\n" +
            "Stock tersedia: " + this.stock
        )
    },
    hargaDiskon : function(){
        let total = this.harga - (this.harga * this.diskon / 100);
        return "Harga setelah diskon: Rp" + total;
    },
    beli : function(jumlah){
        if(this.stock == 0){
            return "Maaf, stock produk sudah habis!"
        }
        this.stock = this.stock - jumlah;
        let pesan = "Pembelian berhasil! Anda membeli " + jumlah + " " + this.nama + ".\n" +
        "Sisa stock sekarang:" + this.stock;
        if(this.stock == 0){
            pesan = pesan + "\nStock produk sudah habis, segera restock!";
        }
        return pesan;
    }                  
}

console.log(produk.info())
console.log("-------------------")
console.log(produk.hargaDiskon())
console.log("-------------------")
console.log(produk.beli)
console.log("-------------------")
console.log(produk.beli(2))
console.log("-------------------")
console.log(produk.beli(1))
