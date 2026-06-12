public class ForecastTest {

    public static void main(String[] args) {

        double result =
                FinancialForecast.forecast(10000,0.10,4);

        System.out.println(
                "Future Value = " + result);
    }
}