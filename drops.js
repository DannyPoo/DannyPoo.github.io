class DropTracker {
    constructor(name, hasPluralForm) {
        this.name = name;
        this.count = 0;
        this.rate = 1;
        this.hasPluralForm = hasPluralForm;
    }
    increaseDrop(){
        this.count += this.rate;
    }
    countSummary(){
        return "You now own " + this.count + " " + this.name + (this.hasPluralForm && this.count > 1? "s": "") + ".";
    }
}