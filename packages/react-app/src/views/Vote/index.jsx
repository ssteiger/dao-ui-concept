import React from 'react';

export default function Vote({ localProvider, tx, readContracts, writeContracts, address, price, gasPrice }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div>
        <h1 style={{ marginTop: '5%', textAlign: 'center', color: '#fff', fontSize: 35 }}>VOTE</h1>
      </div>
      <div style={{ marginTop: '20%', padding: '0 20%' }}>
        <h2 style={{ color: '#fff', fontSize: 15 }}>Proposal:</h2>
        <p style={{ color: '#fff', fontSize: 35 }}>Move all DAO Treasury funds to staking protocol</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <button
          style={{
            width: 120,
            height: 82,
            marginBottom: 25,
            background: '#00FF75',
            color: '#FFF',
            borderRadius: 40,
            fontSize: 41,
          }}
        >
          YES
        </button>
        <button
          style={{
            width: 120,
            height: 82,
            marginBottom: 25,
            background: '#F04848',
            color: '#FFF',
            borderRadius: 40,
            fontSize: 41,
          }}
        >
          NO
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button
          style={{
            width: 250,
            height: 82,
            marginBottom: 25,
            background: '#FFC700',
            color: '#FFF',
            borderRadius: 40,
            fontSize: 41,
          }}
        >
          ABSTAIN
        </button>
      </div>
    </div>
  );
}
