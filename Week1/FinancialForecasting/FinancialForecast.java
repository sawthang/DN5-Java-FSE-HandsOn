public class FinancialForecast {

    public static double forecast(double currentValue,double growthRate,int years) {

        if(years == 0) {
            return currentValue;
        }

        // Recursive Case
        return forecast(currentValue,growthRate,years - 1)*(1 + growthRate);
    }
}