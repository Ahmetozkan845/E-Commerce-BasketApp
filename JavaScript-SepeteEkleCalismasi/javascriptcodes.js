class Products {
    constructor(_id, _category, _productName, _brand, _unitPrice) {
        this.Id = _id;
        this.category = _category;
        this.productName = _productName;
        this.brand = _brand;
        this._unitPrice = _unitPrice;
    } 
} 
var productList = [];
var sepet = [];
window.onload = function () {
    const productone = new Products(1, 'T-shirt', 'AKIRA T-SHIRT', 'Hummel', 199);
    const producttwo = new Products(2, 'Coat', 'Erkek Kapüşonlu Kürklü Mont', 'Jack & Jones', 1049);
    const productthree = new Products(3, 'Shoe', 'Erkek Günlük Ayakkabı', 'Adidas', 699);
    const productfour = new Products(4, 'Perfume', 'The Scent Edt 100 ml Erkek Parfümü', 'Hugo Boss', 1599);

    productList = [productone, producttwo, productthree, productfour];

}

function addToCard(_productId) {
    let p_id = _productId;
    let sepetList = document.getElementById("sepetul");

    productList.forEach(function (item) {
        if (item.Id == p_id)
        {

            if (sepet.length > 0)
            {
                let deger = false;
                sepet.forEach(function (sepetitem) {
                    if (sepetitem.Id == p_id)
                    {
                        deger = true;                       
                    }

                })
                if (deger)
                {
                    let sepetSpan = document.getElementById(item.Id);
                    let sayi = parseInt(sepetSpan.innerText);
                    sayi += 1;
                    sepetSpan.innerText = sayi;
                }                
                else
                {
                    sepetList.innerHTML = sepetList.innerHTML + `<li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <span id="${item.Id}" class="badge bg-primary rounded-pill" >1</span >   ${item.productName}
                                        </li >`;
                }
            }
            else
            {
                sepetList.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
                                                    <span id="${item.Id}" class="badge bg-primary rounded-pill" >1</span >   ${item.productName}
                                        </li >`;
            }
            


            sepet.push(item);
        }        
        
    })

    
}

function ToplamTutar() {
    var toplam = 0;
    let toplamtext = document.getElementById("toplamfiyat");
    for (var i = 0; i < sepet.length; i++) {
        toplam += sepet[i]._unitPrice;
    }
    toplamtext.innerHTML = toplam + " TL";

}

