import React from 'react';
import { useContractReader } from 'eth-hooks';

export default function DAO({ localProvider, tx, readContracts, writeContracts, address, price, gasPrice }) {
  const totalSupply = useContractReader(readContracts, 'MembershipNFT', 'totalSupply');
  console.log({ totalSupply });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div>
        <h1 style={{ marginTop: '5%', textAlign: 'center', color: '#fff', fontSize: 35 }}>DAO</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <div style={{ height: '80vw', width: '30vw', borderRadius: '22px', background: '#D9D9D9' }}></div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '6.25%',
          left: '15.25%',
          background: '#9F1853',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '12.25%',
          left: '15.25%',
          background: '#FF8389 ',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '18.25%',
          left: '15.25%',
          background: '#3DDBD9',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '24.25%',
          left: '15.25%',
          background: '#FF832B',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30.25%',
          left: '15.25%',
          background: '#0072C3',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '36.25%',
          left: '15.25%',
          background: '#6FDC8C',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '49.25%',
          left: '44.25%',
          background: '#6929C4',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '12.25%',
          left: '72.25%',
          background: '#24A148',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '18.25%',
          left: '72.25%',
          background: '#33B1FF',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '24.25%',
          left: '72.25%',
          background: '#BE95FF',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30.25%',
          left: '72.25%',
          background: '#A8A8A8',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '36.25%',
          left: '72.25%',
          background: '#FA4D56',
          height: '10vw',
          width: '10vw',
          borderRadius: '50%',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <div style={{ alignSelf: 'flex-end' }}>
          <h1 style={{ marginTop: '5%', textAlign: 'center', color: '#fff', fontSize: 35 }}>
            A new proposal awaits your vote SWIPE LEFT TO SEE PROPOSAL
          </h1>
        </div>
      </div>
    </div>
  );
}
