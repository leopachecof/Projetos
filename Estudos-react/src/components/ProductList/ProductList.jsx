import { Product } from "../Produtc/Produtc";

export function ProductList() {
    return (
        <>
            <Product
            image="https://m.media-amazon.com/images/I/81+xlh0eUIL._AC_UL320_.jpg" 
            name="Floresta"
            description="Floresta Lego Modelo XPTO 500 peças"
            price="200"
                        
            />
            <Product
            image="https://m.media-amazon.com/images/I/81OqSTy+A1L._AC_UL320_.jpg" 
            name="Bonsai"
            description="Bonsai Lego Modelo XPTO 500 peças"
            price="200"
                        
            />
            <Product
            image="https://m.media-amazon.com/images/I/81qkKtQ49GL._AC_UL320_.jpg" 
            name="Police"
            description="Carro de polícia Modelo XPTO 500 peças"
            price="200"
                        
            />
        </>
    );
}