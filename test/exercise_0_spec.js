import { expect } from 'chai'

import { buildStandardStates } from '../src/exercise_0'

describe('buildStandardStates', () => {
  it('builds a standard state', () => {
    const data = [
      { standard: 'standard/pci_dss_3_2', state: 'passed' },
      { standard: 'standard/pci_dss_3_2', state: 'failed' }
    ]

    const result = buildStandardStates(data)

    expect(result).to.be.deep.members([{
      standard: 'standard/pci_dss_3_2',
      state: { passed: 1, failed: 1 }
    }])
  })

  // it('builds two standard states', () => {
  //   const data = [
  //     { standard: 'standard/pci_dss_3_2', state: 'passed' },
  //     { standard: 'standard/pci_dss_3_2', state: 'failed' },
  //     { standard: 'standard/pci_dss_3_2', state: 'failed' },
  //     { standard: 'standard/tspc_2016', state: 'passed' },
  //     { standard: 'standard/tspc_2016', state: 'passed' },
  //     { standard: 'standard/tspc_2016', state: 'failed' }
  //   ]

  //   const result = buildStandardStates(data)

  //   expect(result.sort(o => o.standard)).to.be.deep.members([
  //     {
  //       standard: 'standard/pci_dss_3_2',
  //       state: { passed: 1, failed: 2 }
  //     },
  //     {
  //       standard: 'standard/tspc_2016',
  //       state: { passed: 2, failed: 1 }
  //     }
  //   ])
  // })

  // it('builds standard states with new states', () => {
  //   const data = [
  //     { standard: 'standard/pci_dss_3_2', state: 'passed' },
  //     { standard: 'standard/pci_dss_3_2', state: 'failed' },
  //     { standard: 'standard/pci_dss_3_2', state: 'missingData' },
  //     { standard: 'standard/tspc_2016', state: 'passed' },
  //     { standard: 'standard/tspc_2016', state: 'failed' },
  //     { standard: 'standard/tspc_2016', state: 'notScoped' }
  //   ]

  //   const result = buildStandardStates(data)

  //   expect(result.sort(o => o.standard)).to.be.deep.members([
  //     {
  //       standard: 'standard/pci_dss_3_2',
  //       state: { passed: 1, failed: 1, missingData: 1 }
  //     },
  //     {
  //       standard: 'standard/tspc_2016',
  //       state: { passed: 1, failed: 1, notScoped: 1 }
  //     }
  //   ])
  // })

  // it('constructs a standard state with only the most recent data point for each control detail', () => {
  //   const controlDetails = [{
  //     id: 'controlDetail/1',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'passed',
  //     date: new Date('2019-01-15')
  //   }, {
  //     id: 'controlDetail/2',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'passed',
  //     date: new Date('2019-01-15')
  //   }, {
  //     id: 'controlDetail/3',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'missingData',
  //     date: new Date('2019-01-11')
  //   }, {
  //     id: 'controlDetail/3',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'failed',
  //     date: new Date('2019-01-15')
  //   }, {
  //     id: 'controlDetail/4',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'missingData',
  //     date: new Date('2019-01-11')
  //   }, {
  //     id: 'controlDetail/4',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'passed',
  //     date: new Date('2019-01-15')
  //   }, {
  //     id: 'controlDetail/5',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'missingData',
  //     date: new Date('2019-01-09')
  //   }, {
  //     id: 'controlDetail/1',
  //     standard: 'standard/pci_dss_3_2',
  //     state: 'missingData',
  //     date: new Date('2019-01-08')
  //   }, ]

  //   expect(buildStandardStates(controlDetails)).to.be.deep.members([{
  //     standard: 'standard/pci_dss_3_2',
  //     state: {
  //       passed: 3,
  //       failed: 1,
  //       missingData: 1
  //     }
  //   }])
  // })
})