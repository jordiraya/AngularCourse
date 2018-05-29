export class CounterService {
  contActiveToInactive = 0;
  contInactiveToActive = 0;

  incrementActiveToInactive() {
    this.contActiveToInactive ++;
    console.log('contActiveToInactive: ' + this.contActiveToInactive);
  }

  incrementInactiveToActive() {
    this.contInactiveToActive ++;
    console.log('contInactiveToActive: ' + this.contInactiveToActive);
  }
}
