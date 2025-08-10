
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return new int[] {0, 2, 5, 3, 7, 8, 4};
    }

    public int getToday() {
        return this.birdsPerDay[this.birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        this.birdsPerDay[this.birdsPerDay.length - 1]++;
    }

    public boolean hasDayWithoutBirds() {
        for (int count: this.birdsPerDay)
            if (count == 0)
                return true;
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int sum = 0;
        for (int i = 0; i < Math.min(numberOfDays, this.birdsPerDay.length); i++)
            sum += this.birdsPerDay[i];
        return sum;
    }

    public int getBusyDays() {
        int sum = 0;
        for (int count: this.birdsPerDay)
            if (count >= 5)
                sum ++;
        return sum;
    }
}
