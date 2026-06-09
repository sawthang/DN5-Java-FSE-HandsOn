public class SingletonTest {

    public static void main(String[] args) {

        System.out.println("Program Started");

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        
        logger1.log("Hello");
        logger2.log("World");

        System.out.println(logger1 == logger2);

    }
    
}