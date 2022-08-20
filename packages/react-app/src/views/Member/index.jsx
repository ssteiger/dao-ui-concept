import React from 'react';
import { useContractReader } from 'eth-hooks';

export default function Member({ localProvider, tx, readContracts, writeContracts, address, price, gasPrice }) {
  const totalSupply = useContractReader(readContracts, 'MembershipNFT', 'totalSupply');
  console.log({ totalSupply });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div>
        <h1 style={{ marginTop: '5%', textAlign: 'center', color: '#fff', fontSize: 35 }}>MEMBER</h1>
      </div>
      <div style={{ marginTop: 20, padding: '0 20%' }}>
        <h2 style={{ color: '#fff', fontSize: 20 }}>WELCOME!</h2>
        <h2 style={{ color: '#fff', fontSize: 20 }}>YOU ARE A MEMBER</h2>
      </div>
      <div style={{ marginTop: 40 }}>
        <h2 style={{ textAlign: 'center', color: '#fff', fontSize: 40 }}>#002</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <div style={{ height: '60vw', width: '60vw', borderRadius: '50%', background: '#FF8389' }}></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <div style={{ alignSelf: 'flex-end' }}>
          <button
            style={{
              width: 250,
              height: 82,
              marginBottom: '50%',
              background: '#4589FF',
              color: '#FFF',
              borderRadius: 40,
              fontSize: 41,
            }}
          >
            GO TO DAO
          </button>
        </div>
      </div>
    </div>
  );
}
