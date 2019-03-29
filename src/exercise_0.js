import _ from 'lodash';

/** ****
  INPUT
  =====
    [{
      id: 'controlDetail/1',
      standard: 'standard/pci_dss_3_2',
      state: 'passed',
      date: new Date('1980-01-01')
    }, {
      id: 'controlDetail/2',
      standard: 'standard/pci_dss_3_2',
      state: 'failed',
      date: new Date('1979-11-01')
    }]

  OUTPUT
  ======
    [{
      standard: 'standard/pci_dss_3_2',
      state: { passed: 1, failed: 1 }
    }]
*/


export const buildStandardStates = (data) => {
  // work goes here

}