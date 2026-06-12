public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        Product result1 =
        SearchAlgorithms.linearSearch(products, 104);

        if(result1 != null) {
            System.out.println(result1.productId);
            System.out.println(result1.productName);
            System.out.println(result1.category);
        }

        Product result2 =
                SearchAlgorithms.binarySearch(products, 104);

        if(result2 != null) {
            System.out.println(result2.productId);
            System.out.println(result2.productName);
            System.out.println(result2.category);
        }
    }
}