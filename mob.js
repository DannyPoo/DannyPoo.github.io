class Mob {
  constructor(name, drops) {
    this.name = name;
    this.drops = [];
    drops.forEach(drop => {
      this.drops.push(new DropTracker(drop.name, drop.hasPlural));
    });
  }
  attack() {
    this.drops.forEach(tracker => {
      tracker.increaseDrop();
    });
  }

  inventorySummary() {
    var summary = ""
    this.drops.forEach(tracker => {
      summary += tracker.countSummary() + "\n";
    })
    return summary;
  }

}