import React from 'react';
import { useContractReader } from 'eth-hooks';

export default function Home({ localProvider, tx, readContracts, writeContracts, address, price, gasPrice }) {
  const totalSupply = useContractReader(readContracts, 'MembershipNFT', 'totalSupply');
  console.log({ totalSupply });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div>
        <h1 style={{ marginTop: '5%', textAlign: 'center', color: '#fff', fontSize: 35 }}>CONNECT</h1>
      </div>
      <div style={{ marginTop: '20%', padding: '0 20%' }}>
        <h2 style={{ color: '#fff', fontSize: 25 }}>Name</h2>
        <h2 style={{ color: '#fff', fontSize: 25 }}>E-Mail</h2>
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
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}
