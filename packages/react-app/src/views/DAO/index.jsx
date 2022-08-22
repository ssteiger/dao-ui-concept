import React from 'react';
import { useContractReader } from 'eth-hooks';

export default function DAO({ localProvider, tx, readContracts, writeContracts, address, price, gasPrice }) {
  const totalSupply = useContractReader(readContracts, 'MembershipNFT', 'totalSupply');
  console.log({ totalSupply });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div>
        <h1 style={{ marginTop: '5%', marginBottom: '20%', textAlign: 'center', color: '#fff', fontSize: 35 }}>DAO</h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            flexGrow: 1,
            flex: '33.33%',
          }}
        >
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#9F1853',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
              marginBottom: '5%',
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            flexGrow: 1,
            flex: '33.33%',
          }}
        >
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#FF8389',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#3DDBD9',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#FF832B',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#0072C3',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#6FDC8C',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            flexGrow: 1,
            flex: '33.33%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
            <div style={{ height: '80vw', width: '30vw', borderRadius: '22px', background: '#D9D9D9' }}></div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            flexGrow: 1,
            flex: '33.33%',
          }}
        >
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#24A148',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#33B1FF',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />

          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#BE95FF',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#A8A8A8',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#FA4D56',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            flexGrow: 1,
            flex: '33.33%',
          }}
        >
          <div
            style={{
              flex: '0 1 auto',
              flexGrow: 0,
              flexShrink: 1,
              flexBasis: 'auto',
              background: '#6929C4',
              height: '10vw',
              width: '10vw',
              borderRadius: '50%',
              marginTop: '5%',
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
        <div style={{ alignSelf: 'flex-end' }}>
          <p style={{ margin: '5%', textAlign: 'center', color: '#fff', fontSize: '35px', lineHeight: '40px' }}>
            A new proposal awaits your vote
          </p>
          <p style={{ marginTop: '5%', textAlign: 'center', color: '#fff', fontSize: '20px', lineHeight: '35px' }}>
            SWIPE LEFT TO SEE PROPOSAL
          </p>
        </div>
      </div>
    </div>
  );
}
