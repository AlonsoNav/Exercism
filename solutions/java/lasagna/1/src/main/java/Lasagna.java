public class Lasagna {
    private int minutesInOven = 40;
    
    public int expectedMinutesInOven() {
        return minutesInOven;
    }

    public int remainingMinutesInOven(int actualMinutesInOven) {
        return minutesInOven - actualMinutesInOven;
    }

    public int preparationTimeInMinutes(int numLayers) {
        return 2 * numLayers;
    }

    public int totalTimeInMinutes(int numLayers, int actualMinutesInOven) {
        return this.preparationTimeInMinutes(numLayers) + actualMinutesInOven;
    }
}
